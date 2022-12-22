import React from 'react'
import styled from 'styled-components';
import { TaskList } from '../components';
import { useTodoContext } from '../contexts/todo_context';
import {MainTitle} from '../components';

const InProgressTasks = () => {
  const {inProgressTasks,focusTitle} = useTodoContext()
  return (
    <Wrapper>
      <MainTitle title="Today main focus." focusTitle={focusTitle} />
      <TaskList tasks={inProgressTasks}/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
`
export default InProgressTasks