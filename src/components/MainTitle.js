import React from 'react'
import styled from 'styled-components'

const MainTitle = ({ title, focusTitle }) => {
  return (
    <Wrapper>
      <h2 className='title'>{title}</h2>
      <h1 className='title'>{focusTitle}</h1>
    </Wrapper>
  )
}

const Wrapper = styled.section`

  max-width: 660px;
  margin: 2.5rem auto;

  .title{
    color: var(--white);
  }
`
export default MainTitle