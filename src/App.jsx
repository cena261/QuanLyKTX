import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import BillPayment from "./pages/Bill";
import PaymentConfirmation from "./pages/Pay-confirm";
import PersonalInfo from "./pages/PersonalInfo";
import Layout from "./Layout";
import RoomInfo from "./pages/RoomInfo";
import ContractExtension from "./pages/Contract";
import RoomChange from "./pages/RoomChange";

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
          <Route
          path="/room-info"
          element={
            <Layout>
              <RoomInfo />
            </Layout>
          }/>
          <Route
          path="/contract"
          element={
            <Layout>
              <ContractExtension />
            </Layout>
          }/>
          <Route
          path="/room-change"
          element={
            <Layout>
              <RoomChange />
            </Layout>
          }/>
      </Routes>
    </Router>
  );
}

export default App;