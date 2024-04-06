import './App.css';
import About from './components/About.js';
import Feature from './components/Feature.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar';
import NavbarMob from './components/NavbarMob.js';
import Status from './components/Status.js';

function App() {
  const resolFind = window.innerWidth;
  return (
    <>
      {resolFind > 991 ? <Navbar /> : <NavbarMob />}
      <About/>
      <Feature/>
      <Status/>
      <Footer/>
    </>
  );
}

export default App;
