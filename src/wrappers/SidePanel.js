import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import UserProfile from './UserProfile';
import TodayTasksNav from './TodayTasksNav';
import { NavButton } from '../components';
import {TbCalendarTime} from 'react-icons/tb';
import {RiSettings4Line} from 'react-icons/ri';
import {AiOutlineFileDone} from 'react-icons/ai'
import { CgTimelapse } from 'react-icons/cg';

const SidePanel = (props) => {
  
  const { pathname } = useLocation()

  return (
    <Wrapper>
      <UserProfile />
      <hr className='splitter-line' />
      <TodayTasksNav />
      <Link className="route-link" to="/in-progress-tasks"> 
        <NavButton 
          icon={CgTimelapse} 
          label="In progress tasks" 
          className="nav-btn"
          isIconActive={pathname === "/in-progress-tasks"}
         />
      </Link>
      <Link className="route-link" to="/completed-tasks"> 
        <NavButton 
          icon={AiOutlineFileDone} 
          label="Completed tasks" 
          className="nav-btn"
          isIconActive={pathname === "/completed-tasks"}
         />
      </Link>
      <Link className="route-link" to="/scheduled-tasks"> 
        <NavButton 
          icon={TbCalendarTime} 
          label="Scheduled tasks" 
          className="nav-btn"
          isIconActive={pathname === "/scheduled-tasks"}
         />
      </Link>
      <NavButton icon={RiSettings4Line} label="Settings" />
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  padding: 1.5rem;

  .splitter-line{
    width: 240px;
    margin: 1.5rem auto;
  }

  .nav-btn{
    margin:1.5rem 0 2.5rem;
  }

  @media screen and (max-width: 730px){
    display: none;
  }
`
export default SidePanel