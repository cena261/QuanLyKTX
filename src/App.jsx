import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import BillPayment from "./pages/Bill";
import PaymentConfirmation from "./pages/Pay-confirm";
import PersonalInfo from "./pages/PersonalInfo";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/bill"
          element={
            <Layout>
              <BillPayment />
            </Layout>
          }
        />
        <Route
          path="/payment-confirmation"
          element={
            <Layout>
              <PaymentConfirmation />
            </Layout>
          }
        />
        <Route
          path="/personal-info"
          element={
            <Layout>
              <PersonalInfo />
            </Layout>
          }/>
      </Routes>
    </Router>
  );
}

export default App;