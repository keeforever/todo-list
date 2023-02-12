import React from 'react'
import styled from 'styled-components';
import AddTask from './AddTask';
import {TaskList} from '../components';
import { useTodoContext } from '../contexts/todo_context';
import { MainTitle } from '../components';

function TodayTasks() {
  const {todoTasks, focusTitle} = useTodoContext()
  
  return (
    <Wrapper>
      <MainTitle title={focusTitle ? "Today main focus." : '&#128077;&#128077;&#128077;'} focusTitle={focusTitle} />
      <AddTask />
      {todoTasks.length !== 0 && <TaskList tasks={todoTasks} />}
    </Wrapper>
  )
}

const Wrapper = styled.section`

`
export default TodayTasks
