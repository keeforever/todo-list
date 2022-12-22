import React from 'react'
import styled from 'styled-components'
import {HiPlusCircle} from 'react-icons/hi';

const AddFilterButton = () => {
  return (
    <Wrapper >
      <HiPlusCircle className='icon' />
      <p className='label'>Add filter</p>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  column-gap: 1.5rem;
  align-items: center;
  
  .icon{
    margin: -2px;
    width: 1.1rem;
    height: 1.1rem;
    color: var(--light-grey);
  }

  .label{
    margin: 0;
    /* font-size: 1.2rem; */
    color: var(--light-grey);
  }
`

export default AddFilterButton