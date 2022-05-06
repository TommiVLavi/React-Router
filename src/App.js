import './App.css';
import Home from './routes/Home'
import Contact from './routes/Contact'
import About from './routes/About'
import Non from './routes/Nothing'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <BrowserRouter>
        <Link to="/">Home</Link>{' '}
        <Link to="/con">Contact</Link>{' '}
        <Link to="/ab">About</Link>{' '}
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/con" element={<Contact />} />
          <Route path="/ab" element={<About />} />
          <Route path="*" element={<Non />} />
        </Routes>
      </BrowserRouter>
      
      </header>
    </div>
  );
}

export default App;
