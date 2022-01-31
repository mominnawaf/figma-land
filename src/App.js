import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Content from './components/Content/Content';
import Partners from './components/Partners/Partners';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Hero />
     <Features />
     <Content />
      <Partners />
    </div>
  );
}

export default App;
