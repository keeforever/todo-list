import React from 'react'
import styled from 'styled-components';
import { MainTitle, TaskList } from '../components';
import { useTodoContext } from '../contexts/todo_context';


const CompletedTasks = () => {
  const {completedTasks} = useTodoContext()

  return (
    <Wrapper>
      <MainTitle title="Today completed tasks." focusTitle={' '}/>
      <TaskList tasks={completedTasks}/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
`
export default CompletedTasks