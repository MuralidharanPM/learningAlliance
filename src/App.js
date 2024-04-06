import './App.css';
import About from './components/About.js';
import Feature from './components/Feature.js';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar';
import Status from './components/Status.js';

function App() {
  return (
    <>
      <Navbar/>
      <About/>
      <Feature/>
      <Status/>
      <Footer/>
    </>
  );
}

export default App;
