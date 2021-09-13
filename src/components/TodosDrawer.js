import React, { useRef } from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Textarea
} from '@chakra-ui/react';

export default function TodosDrawer({ isOpen, handleDrawer, setNewTodos }) {
  const title = useRef();
  const description = useRef();
  const assignedTo = useRef();
  const dueDate = useRef();

  const setTodos = () => {
    let todoTitle = title.current.value;
    let todoDesc = description.current.value;
    let todoAssigned = assignedTo.current.value;
    let todoDue = dueDate.current.value;

    const todo = {
      title : todoTitle,
      description : todoDesc,
      assigned_to : todoAssigned,
      Due_date : todoDue
    }

    setNewTodos(todos => [...todos, todo])

    todoTitle = ''
    todoDesc = ''
    todoAssigned = ''
    todoDue = ''

    handleDrawer();
  }


  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        size="sm"
        onClose={() => handleDrawer()}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add New To-Do</DrawerHeader>

          <DrawerBody>
            <Input ref={title} my="20px" placeholder="Title" />
            <Textarea
              placeholder="Description"
              size="md"
              my="20px"
              resize="none"
              ref={description}
            />
            <Input ref={dueDate} my="20px" type="date" placeholder="Due date" /> 
            <Input ref={assignedTo} my="20px" type="text" placeholder="Assigned to" />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={() => {
              handleDrawer();
            }}>
              Cancel
            </Button>
            <Button 
              colorScheme="blue"
              onClick={() => {
                setTodos();
              }}
            >
              Set To-Do
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> 
    
    </>
  )
}
