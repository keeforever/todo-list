import React from 'react'
import styled from 'styled-components'

const TaskTag = ({ label, dotColor }) => {
  return (
    <Wrapper dotColor={dotColor} >
      <div className='color-dot circle'></div>
      <p className='label'>{label}</p>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  column-gap: 1.5rem;
  align-items: center;
  
  .color-dot{
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${({ dotColor }) => dotColor};
    flex-shrink: 0;
  }

  .label{
    margin: 0;
    /* font-size: 1.2rem; */
    text-transform: capitalize;
  }
`


export default TaskTag