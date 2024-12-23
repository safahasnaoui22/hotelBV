import AdminPage from "./components/AdminPage";
import Booking from "./Dashboard/BookingAdmin";
import BookingAdmin from "./Dashboard/BookingAdmin";
import BookingPage from "./components/BookingPage";
import ChartRooms from "./Dashboard/ChartRooms";
import Circular from "./pages/Circular";
import ClientDetails from "./components/ClientDetails ";
import Contact from "./pages/Contact";
import Dashboard from "./Dashboard/Dashboard";
import DeleteReservation from "./components/DeleteReservation";
import EditReservation from "./components/EditReservation ";
import Example from "./pages/Example";
import FlightDeals from "./pages/FlightPanel ";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Home from "./pages/Home";
import Loader from "./Loader";
import LoginComponent from "./pages/Login";
import Main from "./admin/Main";
import MoreInfo from "./pages/MoreInfo";
import Notfound from "./Notfound";
import Presentation from "./pages/Presentation";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Register from "./pages/Register";
import Restaurent from "./Restaurent";
import Room from "./components/Room";
import RoomDt from "./RoomDt";
import RoomManagement from "./RoomManagement";
import RoomPic from "./pages/Roompic";
import Roomms from "./Roomms";
import Rooms from "./Dashboard/ChartRooms";
import Services from "./pages/Services";
import Step2 from "./components/Step2";
import TablePage from "./Dashboard/TablePage";
import UpdateRoom from "./UpdateRoom";
import YourReservation from "./components/YourReservation";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isAuthenticated, userData } = useAuth();

  const [loading, setLoading] = useState(true);
  const isAdmin = isAuthenticated && userData.role === "admin";
{/*
  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, ); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  } */}



  return (
    <>
      <Header />
      <Router>
        <Routes>
        <Route exact path="/mm" element={<Main />} />
        <Route exact path="/policy" element={<PrivacyPolicy />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/exmple" element={<Example />} />
        <Route exact path="/flight" element={<FlightDeals />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/client-details/:id" element={<ClientDetails />} />
          <Route exact path="/more-info" element={<MoreInfo />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/roompic" element={<RoomPic />} />
          <Route exact path="/roomMan" element={<RoomManagement />} />
          <Route exact path="/chart" element={<ChartRooms />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/roomsdetails" element={<Roomms />} />
          <Route exact path="/circular" element={<Circular />} />
          <Route exact path="/pre" element={<Presentation />} />
          <Route exact path="/restaurent" element={<Restaurent />} />
          <Route exact path="/booking" element={<BookingPage />} />
          <Route exact path="/bookingadmin" element={<BookingAdmin />} />
          <Route exact path="/your-reservation" element={<YourReservation />} />
          <Route exact path="/edit-reservation" element={<EditReservation />} />
          <Route exact path="/delete-reservation" element={<DeleteReservation />} />
          <Route exact path="/admin-reservation" element={<AdminPage/>} />
          <Route path="/rooms&suites" element={<Room/>} />
          <Route path="/step2" element={<Step2/>} />
          <Route exact path="/roomDt/:id" element={<RoomDt />} />
          <Route exact path="/update/:id" element={<UpdateRoom />} />
          <Route path="*" element={<Notfound />} />
          <Route
            path="/register"
            element={!isAuthenticated ? <Register /> : <Navigate to="/dash" />}
          />
          <Route
            path="/login"
            element={!isAuthenticated ? <LoginComponent /> : <Navigate to="/dash" />}
          />
          <Route
            path="/dash"
            element={isAuthenticated ? <Dashboard /> : <LoginComponent />}
          />
        
          <Route
            path="/bookR"
            element={
              isAuthenticated ? (
                isAdmin ? (
                  <Booking />
                ) : (
                  <Navigate to="/" />
                )
              ) : (
                <LoginComponent />
              )
            }
          />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
