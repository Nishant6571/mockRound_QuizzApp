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
    <VStack
      align="flex-start"
      spacing={4}
      p={4}
      boxShadow="md"
      rounded="md"
      bg="gray.100"
    >
      <Text fontWeight="bold" fontSize="lg">
        {questionText}
      </Text>
      {options.map((option, index) => (
        <Button
          key={index}
          variant="outline"
          colorScheme="teal"
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </Button>
      ))}
      <Button colorScheme="teal" onClick={onPreviousQuestion}>
        Previous
      </Button>
      <Button colorScheme="teal" onClick={onNextQuestion}>
        Next
      </Button>
    </VStack>
  );
};

export default QuizQuestion;
