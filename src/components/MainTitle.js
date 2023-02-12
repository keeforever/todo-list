import React from 'react'
import styled from 'styled-components'

const MainTitle = ({ title, focusTitle }) => {
  return (
    <Wrapper>
      <h2 className='title' dangerouslySetInnerHTML={{__html: title }}/>
      <h1 className='title'>{focusTitle ? focusTitle : '"Hark work pays off."'}</h1>
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