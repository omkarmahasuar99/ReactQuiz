import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Quiz from "./components/Quiz";
import { useState } from "react";
function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizDifficulty, setQuizDifficulty] = useState();
  function handleChangeDifficulty(difficulty) {
    setQuizDifficulty(difficulty);
  }
  function handleStartQuiz() {
    setQuizStarted(true);
  }
  if (!quizStarted) {
    return <LandingPage onStart={handleStartQuiz} />;
  }
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}

export default App;
