import React from 'react';
import {
  Flex,
  Box,
  Text
} from '@chakra-ui/react';

import { CloseIcon } from '@chakra-ui/icons';

export default function TodosContainer({ todos, setNewTodos }) {

  const removeTodos = (Title) => {
    
    let updated = todos.filter(todos => todos.title !== Title);

    setNewTodos(updated);

  }


  return (
    <Flex
      height="90vh"
      style={{
        backgroundImage : "url(./static/bg)"
      }}
      p="50px"
      w="100%"
      overflowY="auto"
    >
    { (todos) 
      ? <Box
        w="100%"
      >
          {todos.map((todo, i) => {
            return (
              <Flex
                justifyContent="space-between"
                w="100%"
                h="150px"
                my="10px"
                key={i}
                style={{
                  background: "rgba( 255, 255, 255, 0.3 )",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 12.5px )",
                  borderRadius: "10px",
                  border: "1px solid rgba( 255, 255, 255, 0.18 )"
                }}
              >
                <Box
                  textAlign="left"
                  my="10px"
                  p="10px"
                >
                  <Text
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      fontStyle: 'sans-serif'
                    }}
                  >
                    {todo.title} 
                  </Text>
                  <Text
                    style={{
                      fontSize: '18px',
                      fontWeight: '500',
                      fontStyle: 'sans-serif'
                    }}
                  >
                    {todo.description}
                  </Text>
                  <Text
                    style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      fontStyle: 'sans-serif'
                    }}
                  >
                    Due On : {todo.Due_date}
                  </Text>
                  <Text
                    style={{
                      fontSize: '18px',
                      fontWeight: '500',
                      fontStyle: 'sans-serif'
                    }}
                  >
                    Assigned To : {todo.assigned_to}
                  </Text>
                </Box>
                <Box
                  w="40px"
                  bg="#8F0505"
                  style={{
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                    border: "1px solid rgba( 255, 255, 255, 0.18 )",
                    cursor: "pointer"
                  }}
                  py="50px"
                  onClick={() => {
                    removeTodos(todo.title);
                  }}
                >
                  <CloseIcon color="#fff" />
                </Box>
              </Flex>
            )
          })} 
        </Box>
      : <Box> No To-Dos</Box>
        
    
    }
    </Flex>
  )
}
