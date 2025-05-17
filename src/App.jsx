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
import DeviceReport from "./pages/DeviceReport";
import Report from "./pages/Report";
import EmergencySupport from "./pages/EmergencySupport";
import Rules from "./pages/Rules";
import RequestHistory from "./pages/RequestHistory";
import RequestSuccess from "./pages/RequestSuccess";
import Notifications from "./pages/Notification";

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
          <Route
          path="/device-report"
          element={
            <Layout>
              <DeviceReport />
            </Layout>
          }/>
          <Route
          path="/report"
          element={
            <Layout>
              <Report />
            </Layout>
          }/>
          <Route
          path="/emergency-support"
          element={
            <Layout>
              <EmergencySupport />
            </Layout>
          }/>
          <Route
          path="/rules"
          element={
            <Layout>
              <Rules />
            </Layout>
          }/>
          <Route
          path="/request-history"
          element={
            <Layout>
              <RequestHistory />
            </Layout>
          }/>
          <Route
          path="/request-success"
          element={
            <Layout>
              <RequestSuccess />
            </Layout>
          }/>
          <Route
          path="/notifications"
          element={
            <Layout>
              <Notifications />
            </Layout>
          }/>
      </Routes>
    </Router>
  );
}

export default App;