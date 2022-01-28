import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Hero />
     <Features />
     <Content />
    </div>
  );
}

export default App;
