
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      
      <nav>
        <Link to = '/'>Home</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/contact'>Contact</Link>
        <Link to = '/learn'>Learn</Link>

      </nav>


      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/learn' />
        <Route path=''element={<React/>}/>
        <Route path='angular'element={<Angular/>}/>


      </Routes>
     </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>
}

function About() {
  return <h2>About</h2>
}

function Contact() {
  return <h2>Contact</h2>
}

function React() {
  return <h2>React</h2>
}

function Angular() {
  return <h2>Angular</h2>
}


export default App;
