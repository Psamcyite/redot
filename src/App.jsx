import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  const [name, setName] = useState();

  return (
    <Router>
      <div className='app' style={{ backgroundImage: 'url("/ques1.png")'}}>
        <Header />
        <Routes>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/quiz' exact>
            <Quiz />
          </Route>
          {/** ... <Route path='/result' exact>
            <Result />
          </Route> ... */}
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
