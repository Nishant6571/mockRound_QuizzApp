import React from "react";
import { Button, Text, VStack } from "@chakra-ui/react";

const QuizQuestion = ({
  question,
  onAnswerSubmit,
  onNextQuestion,
  onPreviousQuestion,
}) => {
  const {
    question: questionText,
    incorrect_answers,
    correct_answer,
  } = question;
  const options = [...incorrect_answers, correct_answer].sort(
    () => Math.random() - 0.5
  );

  const handleOptionClick = (option) => {
    onAnswerSubmit(option);
  };

  return (
    <VStack align="flex-start">
      <Text fontWeight="bold" mb={4}>
        {questionText}
      </Text>
      {options.map((option, index) => (
        <Button
          key={index}
          variant="outline"
          mb={2}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </Button>
      ))}
      <Button onClick={onPreviousQuestion}>Previous</Button>
      <Button onClick={onNextQuestion}>Next</Button>
    </VStack>
  );
};

export default QuizQuestion;
