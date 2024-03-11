import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Stack,
  Text,
  Center,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizData } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const QuizForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState("");

  const { isLoading, isError } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchQuizData(category, difficulty, numberOfQuestions));
    console.log("Name:", name);
    console.log("Category:", category);
    console.log("Difficulty:", difficulty);
    console.log("Number of Questions:", numberOfQuestions);
    navigate("/quiz");
  };

  return (
    <Center>
      <form onSubmit={handleSubmit}>
        <Stack
          spacing={6}
          p={6}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
          bg="gray.100"
          w="400px"
          maxW="100%"
        >
          <FormControl>
            <FormLabel fontWeight="bold" fontSize="lg" color="teal.500">
              Enter Your Name
            </FormLabel>
            <Input
              type="text"
              placeholder="Your Name"
              borderRadius="md"
              focusBorderColor="teal.400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold" fontSize="lg" color="teal.500">
              Select Category
            </FormLabel>
            <Select
              placeholder="Select Category"
              borderRadius="md"
              focusBorderColor="teal.400"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="9">General Knowledge</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold" fontSize="lg" color="teal.500">
              Select Difficulty
            </FormLabel>
            <Select
              placeholder="Select Difficulty"
              borderRadius="md"
              focusBorderColor="teal.400"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel fontWeight="bold" fontSize="lg" color="teal.500">
              Choose Number of Questions
            </FormLabel>
            <Input
              type="number"
              min="1"
              max="50"
              borderRadius="md"
              focusBorderColor="teal.400"
              value={numberOfQuestions}
              onChange={(e) => setNumberOfQuestions(e.target.value)}
            />
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            borderRadius="md"
            _hover={{ bg: "teal.500" }}
            _active={{ bg: "teal.600" }}
            isLoading={isLoading}
            loadingText="Starting Quiz..."
          >
            START QUIZ
          </Button>
          {isError && (
            <Text color="red.500" fontSize="sm">
              Something went wrong. Please try again later.
            </Text>
          )}
        </Stack>
      </form>
    </Center>
  );
};

export default QuizForm;
