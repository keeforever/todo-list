import React from 'react'
import styled from 'styled-components'

const NavButton = ({ icon: Icon, label, className, isIconActive }) => {
  return (
    <Wrapper className={className}>
      <span>
        <Icon className={`${isIconActive ? "active-icon" : ""} icon`} />
      </span>
      <span className='today-task-label'>{label}</span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  column-gap: 1.5rem;
  align-items: center;
  
  span{
    /* font-size: 1.2rem; */
    font-weight: 500;
  }

  .active-icon{
    color: var(--purple);
  }
`
export default NavButton