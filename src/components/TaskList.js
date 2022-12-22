import React from 'react'
import styled from 'styled-components'
import Task from './Task';

const TaskList = ({tasks}) => {
  return (
    <Wrapper>
      {
        tasks.map((task)=>{
          return <Task key={task.id} {...task}/>
        })
      }
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-bottom: 1.5rem;
`
export default TaskList