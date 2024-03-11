import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Stack,
} from "@chakra-ui/react";

const QuizForm = () => {
  const handleclick = () => {
    console.log("buttonclicke");
  };
  return (
    <Stack
      spacing={6}
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      w="400px"
      maxW="100%"
    >
      <FormControl>
        <FormLabel fontWeight="bold" fontSize="lg">
          Enter Your Name
        </FormLabel>
        <Input
          type="text"
          placeholder="Your Name"
          borderRadius="md"
          focusBorderColor="teal.400"
        />
      </FormControl>
      <FormControl>
        <FormLabel fontWeight="bold" fontSize="lg">
          Select Category
        </FormLabel>
        <Select
          placeholder="Select Category"
          borderRadius="md"
          focusBorderColor="teal.400"
        >
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel fontWeight="bold" fontSize="lg">
          Select Difficulty
        </FormLabel>
        <Select
          placeholder="Select Difficulty"
          borderRadius="md"
          focusBorderColor="teal.400"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel fontWeight="bold" fontSize="lg">
          Choose Number of Questions
        </FormLabel>
        <Input
          type="number"
          min="1"
          max="50"
          borderRadius="md"
          focusBorderColor="teal.400"
        />
      </FormControl>
      <Button
        onClick={handleclick}
        colorScheme="teal"
        borderRadius="md"
        _hover={{ bg: "teal.500" }}
        _active={{ bg: "teal.600" }}
      >
        START QUIZ
      </Button>
    </Stack>
  );
};

export default QuizForm;
