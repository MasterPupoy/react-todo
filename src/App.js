import React, { useState } from 'react';
import { 
  ChakraProvider, 
  Flex,
  Box,
  Text,
  Button
} from "@chakra-ui/react";

import TodosContainer from './components/TodosContainer';
import TodosDrawer from './components/TodosDrawer';

import { AddIcon } from "@chakra-ui/icons";

import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([
    {
      Due_date: "2021-09-04",
      assigned_to: "me",
      description: "Code lik a fukn ninja",
      title: "Code"
    }
  ]); 

  console.log(todos);

  return (
    <ChakraProvider>
      <div className="App">
        <Flex
          w="100%"
          h="10vh"
          justifyContent="space-between"
          p="20px"
          style={{
            background: "linear-gradient(90deg, rgba(108,4,193,1) 26%, rgba(135,4,193,1) 54%, rgba(159,4,193,1) 65%, rgba(114,63,211,1) 77%, rgba(46,152,237,1) 90%, rgba(0,212,255,1) 99%)",
            boxShadow: "10px 6px 3px #d5d5d5"
          }}
        >
          <Box>
            <Text
             style={{
               fontFamily: 'sans-serif',
               fontSize: '20px',
               fontWeight: '700',
               color: '#fff'
             }} 
            >
              MY TO-DOs
            </Text>
          </Box> 
          <Box>
            <Button 
              leftIcon={<AddIcon />} 
              colorScheme="teal" 
              variant="solid"
              onClick={() => {
                setOpen(prevState => !prevState);
              }}
            >
              Add To-Do
            </Button>
          </Box>
        </Flex>
        <TodosContainer 
          todos={todos}
          setNewTodos={setTodos}
        />
        <Box
          w="100%"
          h="10vh"
          justifyContent="space-between"
          p="20px"
          style={{
            background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(86,86,86,1) 100%)",
            boxShadow: "10px 6px 3px #d5d5d5",
            position: "absolute",
            bottom: "0"
          }}
        >
          <Text
            color="#fff"
          >
            @ardelloson
          </Text>
        </Box>
      </div>
      <TodosDrawer 
        isOpen={open} 
        handleDrawer={() => setOpen(prevState => !prevState)} 
        setNewTodos={setTodos}
      />
    </ChakraProvider>
  );
}

export default App;
