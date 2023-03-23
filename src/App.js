
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import About from './pages/About/About';
import Appointments from './pages/Appointments/Appointments';
import ContactUs from './pages/ContactUs/ContactUs';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import MyAppointments from './pages/MyAppoinments/MyAppointments';
import NotFound from './pages/NotFound/NotFound';
import Reviews from './pages/Reviews/Reviews';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/appointments' element={<Appointments />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/my-appointments' element={<MyAppointments/>}/>
          <Route path='/dashboard/*' element={<Dashboard/>}/>

          {/* 404! */}
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
