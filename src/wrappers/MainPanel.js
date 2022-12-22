import React from 'react'
import { Routes, Route } from 'react-router';
import styled from 'styled-components';
import TodoTasks from './TodoTasks';
import ScheduledTasks from './ScheduledTasks';
import InProgressTasks from './InProgressTasks';
import CompletedTasks from './CompletedTasks';

const MainPanel = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path='/today-tasks' element={<TodoTasks />} />
        <Route path='/scheduled-tasks' element={<ScheduledTasks />} />
        <Route path='/in-progress-tasks' element={<InProgressTasks />} />
        <Route path='/completed-tasks' element={<CompletedTasks />} />
      </Routes>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  padding: 0 1.5rem;
  background-color: var(--violet);
  border-radius: 0  var(--radius) var(--radius) 0;

  overflow-y: scroll;

  @media screen and (max-width: 730px){
    padding: 0 1rem;
    border-radius: 0 ;
  }
`

export default MainPanel;