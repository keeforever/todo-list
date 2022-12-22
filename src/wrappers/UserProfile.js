import React from 'react'
import styled from 'styled-components';
import { ProfileCircle } from '../components';

const UserProfile = () => {
  return (
    <Wrapper>
      <ProfileCircle />
      <div className='user-info'>
        <p className='bio'>Do-it</p>
        <p className='name'>Kaliyamoorthy</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: center;

  .user-info{
    display: flex;
    flex-direction: column;
    .bio{
      color: var(--grey);
    }
    .name{
      font-size: 1.4rem;
      color: var(--violet);
      letter-spacing: 0.60px;
      font-weight: 300;
    }
  }
`
export default UserProfile