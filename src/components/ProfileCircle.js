import React from 'react'
import styled from 'styled-components';

const ProfileCircle = () => {
  return (
    <Wrapper className='circle'>
      <img src="https://avatars.githubusercontent.com/u/108993409?v=4" alt="user" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img{
    width: 65px;
    height: 65px;
    object-fit: cover;
  }
`

export default ProfileCircle