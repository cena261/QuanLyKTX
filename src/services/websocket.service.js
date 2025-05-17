import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

class WebSocketService {
  constructor() {
    // Core properties
    this.stompClient = null;
    this.eventListeners = new Map();
    this.connectCallbacks = [];
    this.errorCallbacks = [];
    this.closeCallbacks = [];

    // Connection management
    this.retryCount = 0;
    this.maxRetries = 3;
    this.retryDelay = 3000;
    this.debugMode = true;
  }

  connect(url = "/ws") {
    try {
      // Check if already connected
      if (this.stompClient?.connected) {
        console.log("WebSocket is already connected");
        return;
      }

      // Validate authentication
      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData?.access_token) {
        console.warn("No authentication token found");
        this.errorCallbacks.forEach((callback) =>
          callback(new Error("No authentication token found"))
        );
        return;
      }

      // Extract username from JWT token
      let username;
      try {
        const tokenPayload = JSON.parse(
          atob(userData.access_token.split(".")[1])
        );
        username = tokenPayload.sub;
        console.log("Extracted username from token:", username);
      } catch (error) {
        console.error("Error parsing JWT token:", error);
        this.errorCallbacks.forEach((callback) =>
          callback(new Error("Invalid authentication token"))
        );
        return;
      }

      // Configure WebSocket URL
      const baseUrl = import.meta.env?.VITE_API_URL || "http://localhost:8080";
      const wsUrl = `${baseUrl}/api${url}`;
      console.log("Connecting to WebSocket URL:", wsUrl);

      // Configure SockJS options
      const sockjsOptions = {
        transports: ["websocket", "xhr-streaming", "xhr-polling"],
        debug: this.debugMode,
        timeout: 5000,
      };

      // Create STOMP client
      this.stompClient = new Client({
        webSocketFactory: () => new SockJS(wsUrl, null, sockjsOptions),
        connectHeaders: {
          Authorization: `Bearer ${userData.access_token}`,
          "X-User-Name": username,
          "Content-Type": "application/json",
        },
        debug: (str) => {
          if (this.debugMode) {
            console.log("STOMP Debug:", str);
          }
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onStompError: (frame) => {
          console.error("STOMP error:", frame);
          this.errorCallbacks.forEach((callback) => callback(frame));
        },
        onWebSocketError: (event) => {
          console.error("WebSocket error:", event);
          this.errorCallbacks.forEach((callback) => callback(event));
        },
        onWebSocketClose: (event) => {
          console.log("WebSocket connection closed:", event.code, event.reason);
          this.closeCallbacks.forEach((callback) => callback(event));

          // Handle reconnection
          if (event.code !== 1000 && this.retryCount < this.maxRetries) {
            this.retryCount++;
            const delayMs = this.retryDelay * Math.pow(2, this.retryCount - 1);
            console.log(
              `Retrying connection (${this.retryCount}/${this.maxRetries}) in ${delayMs}ms...`
            );
            setTimeout(() => this.connect(url), delayMs);
          } else if (this.retryCount >= this.maxRetries) {
            console.error(
              "Maximum retry attempts reached. WebSocket connection failed."
            );
          }
        },
      });

      // Handle successful connection
      this.stompClient.onConnect = (frame) => {
        console.log("WebSocket connected successfully", frame);
        this.retryCount = 0;
        this.connectCallbacks.forEach((callback) => callback());

        // Subscribe to global notifications
        this.stompClient.subscribe("/topic/notifications", (message) => {
          try {
            const data = JSON.parse(message.body);
            console.log("Received global notification:", data);
            this.notifyListeners("notification_update", data);
          } catch (error) {
            console.error("Error processing WebSocket message:", error);
          }
        });

        // Subscribe to user-specific notifications
        const userDestination = `/user/${username}/queue/notifications`;
        console.log("Subscribing to user destination:", userDestination);
        this.stompClient.subscribe(userDestination, (message) => {
          try {
            const data = JSON.parse(message.body);
            console.log("Received personal notification:", data);
            this.notifyListeners("notification_update", data);
          } catch (error) {
            console.error("Error processing WebSocket message:", error);
          }
        });

        // Subscribe to test response
        this.stompClient.subscribe("/topic/test-response", (message) => {
          try {
            const data = JSON.parse(message.body);
            console.log("Received test response:", data);
          } catch (error) {
            console.error("Error processing test response:", error);
          }
        });

        // Send test message
        this.sendTestMessage();
      };

      // Activate STOMP client
      console.log("Activating STOMP client connection...");
      this.stompClient.activate();
      console.log("STOMP client activation initiated");
    } catch (error) {
      console.error("Error connecting to WebSocket:", error);
      this.errorCallbacks.forEach((callback) => callback(error));
    }
  }

  // Helper method to notify all listeners of an event
  notifyListeners(eventType, data) {
    const listeners = this.eventListeners.get(eventType) || [];
    listeners.forEach((callback) => callback(data));
  }

  // Send test message to verify connection
  sendTestMessage() {
    if (this.stompClient?.connected) {
      const testMessage = {
        message: "xin chào từ frontend",
        timestamp: new Date().toISOString(),
      };
      console.log("Sending test message to /app/test-connect:", testMessage);
      this.stompClient.publish({
        destination: "/app/test-connect",
        body: JSON.stringify(testMessage),
      });
    } else {
      console.error("Cannot send test message: WebSocket is not connected");
    }
  }

  // Disconnect WebSocket
  disconnect() {
    if (this.stompClient) {
      console.log("Disconnecting WebSocket...");
      this.stompClient.deactivate();
      this.stompClient = null;
      this.retryCount = 0;
      console.log("WebSocket disconnected");
    }
  }

  // Event listener management
  addEventListener(eventType, callback) {
    if (!this.eventListeners.has(eventType)) {
      this.eventListeners.set(eventType, []);
    }
    this.eventListeners.get(eventType).push(callback);
  }

  removeEventListener(eventType, callback) {
    if (this.eventListeners.has(eventType)) {
      const listeners = this.eventListeners.get(eventType);
      const index = listeners.indexOf(callback);
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    }
  }

  // Connection event handlers
  onConnect(callback) {
    this.connectCallbacks.push(callback);
  }

  onError(callback) {
    this.errorCallbacks.push(callback);
  }

  onClose(callback) {
    this.closeCallbacks.push(callback);
  }

  // Utility methods
  isConnected() {
    return this.stompClient?.connected || false;
  }

  sendMessage(destination, message) {
    if (this.stompClient?.connected) {
      this.stompClient.publish({
        destination: destination,
        body: JSON.stringify(message),
      });
    } else {
      console.error("WebSocket is not connected");
    }
  }
}

// Create and export a single instance
const websocketService = new WebSocketService();
export default websocketService;
