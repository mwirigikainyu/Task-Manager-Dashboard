import styled from "styled-components";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { File } from 'react-kawaii'

//Styled Components & Css
const Container = styled.section`
  display: grid;
  grid-template-rows: 150px auto;
  margin-right: 30px;
  margin-top: 20px;
  .svg{
    text-align: center;
  }
`;
const Task = styled.form`
  padding: 20px;
`;
const TaskItem = styled.div`
  overflow: hidden;
  width: 80%;
  margin: 30px;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 10px 1px rgba(63, 63, 63, 0.47);
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
const Greeting = styled.div`
  height: fit-content;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
`;

export default function Tasks(props) {
  const [task, setTask] = useState({ text: "", completed: false });
  const [todos, setTodos] = useState([]);

  // Functions
  const handleSubmit = (e) => {
    e.preventDefault();
    todos.push(task);
    setTodos(todos);
    setTask({ text: "", completed: null });
  };
  const handleCompletedTask = (index) => {
    todos[index].completed = true;
    setTodos(
      todos.map((todo, i) =>
        index === i
          ? {
            ...todo,
          }
          : todo
      )
    );
  };

  return (
    <Container>
      <Greeting>
        <p>Hello Jessica!</p>
        <h1>
          You have {todos.length} {todos.length === 1 ? "task" : "tasks"} today
        </h1>
      </Greeting>
      <Task onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What do you want to get done today?"
          value={task.text}
          // onFocus={(e) => { e.preventDefault() }}
          onChange={(e) => {
            setTask({ text: e.target.value, completed: false });
          }}
        ></input>
        {!todos.length && <File className="svg floating" size={420} mood="blissful" color="#7367f0" />}
        {todos.map((item, index) => {
          return !item.completed ? (
            <TaskItem key={index} onClick={() => { }}>
              <p>{item.text}</p>
              <FaTrash
                className={"delete"}
                onClick={() => {
                  handleCompletedTask(index);
                }}
              />
            </TaskItem>
          ) : null;
        })}
      </Task>
    </Container>
  );
}
