import React, { useState } from "react";
import { useSelector } from "react-redux";
import QuizQuestion from "../components/QuizQuestion";

const Quizpage = () => {
  const quizData = useSelector((state) => state.quizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const questions = quizData.results || [];
  const totalQuestions = questions.length;

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleAnswerSubmit = (answer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  if (quizData.isLoading) {
    return <div>Loading...</div>;
  }

  if (quizData.isError) {
    return <div>Error occurred while fetching data</div>;
  }

  if (totalQuestions === 0) {
    return <div>No questions available</div>;
  }

  if (currentQuestionIndex === totalQuestions) {
    return (
      <div>
        <h1>Quiz Completed</h1>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Question not available</div>;
  }

  return (
    <div>
      <h1>Quiz Page</h1>
      <p>
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </p>
      <QuizQuestion
        question={currentQuestion}
        onAnswerSubmit={handleAnswerSubmit}
        onNextQuestion={handleNextQuestion}
        onPreviousQuestion={handlePreviousQuestion}
      />
    </div>
  );
};

export default Quizpage;
