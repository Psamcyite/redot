import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuestions = async (category = "", difficulty = "") => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=5&type=multiple`
      );

      setQuestions(data.results);
    } catch (error) {
      setError("Error fetching questions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
          <Route path="/quiz" element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />} />
          <Route path="/result" element={<Result name={name} score={score} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;