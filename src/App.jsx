import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/DashBoard";
import StudentManager from "./pages/StudentManager";
import RoomManager from "./pages/RoomManager";
import InvoiceManager from "./pages/InvoiceManager";
import NotificationManager from "./pages/NotificationManager";
import ContractManager from "./pages/ContractManager";
import RequestManager from "./pages/RequestManager";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student-manager"
            element={
              <ProtectedRoute>
                <StudentManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/room-manager"
            element={
              <ProtectedRoute>
                <RoomManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/invoice-manager"
            element={
              <ProtectedRoute>
                <InvoiceManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notification-manager"
            element={
              <ProtectedRoute>
                <NotificationManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contract-manager"
            element={
              <ProtectedRoute>
                <ContractManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/request-manager"
            element={
              <ProtectedRoute>
                <RequestManager />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
