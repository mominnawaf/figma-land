import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Content from './components/Content/Content';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Hero />
     <Features />
     <Content />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
