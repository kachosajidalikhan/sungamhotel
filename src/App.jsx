import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Frontend/Header/header';
import Home from './Frontend/Home/home';
import Footer from './Frontend/Footer/footer';
import RoomsSection from './Frontend/RoomSection/roomsection';
import RestaurantMenu from './Frontend/MenuSection/menusection';
import RoomDetail from './Frontend/RoomSection/RoomDetail';
import RoomBookingPage from './Frontend/BookingPage/roombookingpage';
import RoomPaymentPage from './Frontend/PaymentPage/roompaymentpage';
import EventPaymentPage from './Frontend/PaymentPage/eventpaymentpage';
import Services from './Frontend/Services/services';
import Aboutsection from './Frontend/AboutSection/aboutsection';
import ContactUs from './Frontend/Contact/contact';
import Gallery from './Frontend/Gallery/gallery';
import EventsSection from './Frontend/Events/events';
import EventsDetail from './Frontend/Events/eventsdetail';
import AdminPanel from "./Dashboard/AdminPanel";
import EventBookingPage from './Frontend/BookingPage/eventbookingpage';
import Login from './Frontend/Login/login';

function App() {

  // Dummy currentUser with type 'admin' for testing
  let currentUser = { type: 'admin' };  // Manually set currentUser as admin

  return (
    <div>
      {currentUser && currentUser.type === 'admi' ? <AdminPanel /> :
      <BrowserRouter>
        <Header/>
        <div className='pt-16'>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<RestaurantMenu />} />
          <Route path='/rooms' element={<RoomsSection />} />
          <Route path='/roomdetail/:roomId' element={<RoomDetail />} />
          <Route path='/room-booking-page/:roomId' element={<RoomBookingPage />} />
          <Route path='/room-payment-page' element={<RoomPaymentPage />} />
          <Route path='/services' element={<Services />} />
          <Route path='/aboutus' element={<Aboutsection />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/events' element={<EventsSection />} />
          <Route path='/eventsdetail/:eventId' element={<EventsDetail />} />
          <Route path='/adminpanel/*' element={<AdminPanel />} />
          <Route path='/event-booking-page/:eventId' element={<EventBookingPage />} />
          <Route path='/event-payment-page' element={<EventPaymentPage />} />
          <Route path='/admin-login' element={<Login />} />

        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      }
    </div>
  );
}

export default App;
