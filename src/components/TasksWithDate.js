import React from 'react'
import styled from 'styled-components';
import TaskList from './TaskList';

const TasksWithDate = ({date,tasks}) => {
  return (
    <Wrapper>
      <h1>{date}</h1>
      <TaskList tasks={tasks} />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h1{
    max-width: 650px;
    margin: 3rem auto;
    color: var(--white);
  }
`
export default TasksWithDate