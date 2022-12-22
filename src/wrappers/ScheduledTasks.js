import React from 'react'
import styled from 'styled-components'
import { ScheduledTask } from '../components';
import { useTodoContext } from '../contexts/todo_context';

const ScheduledTasks = () => {
  const {scheduledTasks} = useTodoContext()
  return (
    <Wrapper>
      {
        scheduledTasks.map((scheduledTask,index)=>{
          return <ScheduledTask key={index} {...scheduledTask}/>
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
`

export default ScheduledTasks