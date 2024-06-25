import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Heading, Checkbox, Box, Text } from "@chakra-ui/react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Todo List</Heading>
        <HStack width="100%">
          <Input 
            placeholder="Add a new todo" 
            value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} 
          />
          <Button colorScheme="blue" onClick={addTodo}>Add</Button>
        </HStack>
        <Box width="100%">
          <Heading as="h2" size="lg" mt={6} mb={4}>Ongoing Todos</Heading>
          {todos.filter(todo => !todo.completed).map((todo, index) => (
            <HStack key={index} spacing={4} mb={2}>
              <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)} />
              <Text>{todo.text}</Text>
            </HStack>
          ))}
        </Box>
        <Box width="100%">
          <Heading as="h2" size="lg" mt={6} mb={4}>Completed Todos</Heading>
          {todos.filter(todo => todo.completed).map((todo, index) => (
            <HStack key={index} spacing={4} mb={2}>
              <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)} />
              <Text as="s">{todo.text}</Text>
            </HStack>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Todo;