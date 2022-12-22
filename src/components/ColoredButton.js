import React from 'react'
import styled from 'styled-components'

const ColoredButton = ({color, handleClick}) => {
  return (
    <Wrapper 
      color={color} 
      className="circle" 
      onClick={handleClick}
      data-color={color}
    >
    </Wrapper>
  )
}

const Wrapper = styled.button`
  background-color: ${({color})=> color};

  width: 0.8rem;
  height: 0.8rem;

  &:active{
      border: var(--light-grey) solid 2px;
  }
`
export default ColoredButton