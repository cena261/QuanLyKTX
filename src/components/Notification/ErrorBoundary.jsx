"use client";

import { Component } from "react";
import { AlertTriangle } from "lucide-react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <div className="p-6 bg-red-50 rounded-lg border border-red-200 text-center">
          <div className="flex justify-center mb-4">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="text-lg font-semibold text-red-800 mb-2">
            Đã xảy ra lỗi
          </h2>
          <p className="text-red-600 mb-4">
            Chúng tôi đang gặp sự cố khi tải dữ liệu. Vui lòng thử lại sau.
          </p>
          <details className="text-left bg-white p-4 rounded-md border border-red-200 mb-4">
            <summary className="text-red-800 font-medium cursor-pointer">
              Chi tiết lỗi
            </summary>
            <pre className="mt-2 text-xs text-red-600 overflow-auto">
              {this.state.error && this.state.error.toString()}
            </pre>
            <pre className="mt-2 text-xs text-gray-600 overflow-auto">
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </pre>
          </details>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Tải lại trang
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
