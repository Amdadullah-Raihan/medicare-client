
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Appointments from './pages/Appointments/Appointments';
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Reviews from './pages/Reviews/Reviews';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/appointments' element={<Appointments/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Home/>}/>


      {/* 404! */}
      <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
