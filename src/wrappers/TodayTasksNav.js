import React from 'react'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { BsCardChecklist } from 'react-icons/bs';
import { NavButton, DotLabel, AddFilterButton } from '../components';

const TodayTasksNav = () => {
  const { pathname } = useLocation()

  return (
    <Wrapper>
      <Link to="/today-tasks" className='route-link'>
        <NavButton icon={BsCardChecklist} label="Todo tasks" isIconActive={pathname === "/today-tasks"} />
      </Link>
      <div className='tag-list'>
        {/* <DotLabel label="Personal" />
        <DotLabel label="Personal" />
        <DotLabel label="Personal" /> */}
        {/* <AddFilterButton /> */}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 3rem;

  button{
    display: flexbox;
    align-items: center;
    column-gap: 1rem;
  }

  .tag-list{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    /* 1.8rem + 1.2rem = "icon" + "column gap" for indent*/
    padding-left: calc(1.5rem + 1.5rem);
  }
`
export default TodayTasksNav