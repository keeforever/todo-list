import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment/moment';
import ColoredButton from '../components/ColoredButton';
import { MdOutlineAccessTime } from 'react-icons/md';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { useTodoContext } from '../contexts/todo_context';
import uuid from 'react-uuid';

/*
moment().format('MMMM Do YYYY, h:mm:ss a'); // December 20th 2022, 1:40:27 pm
moment().format('dddd');                    // Tuesday
moment().format("MMM Do YY");               // Dec 20th 22
moment().format('YYYY [escaped] YYYY');     // 2022 escaped 2022
moment().format();                         
*/

function AddTask() {

  const {addTask} = useTodoContext()

  const initialState = {
    id: uuid(),
    time: null,
    date: moment().format('LL'),
    task: '',
    taskStatus: "todo",
    color: 'var(--blue)'
  }

  const [state, setState] = useState(initialState)

  const handleInput = (e) => {
    const { name, value } = e.currentTarget

    if (name === "date") {
      setState({ ...state, [name]: moment().format('LL')})
      return
    }

    if (name === "time") {
      //a way for getting local time format with moment js
      const time = moment(new Date(new Date(`3-27-2000 ${value}`))).format('h:mm a')
      setState({ ...state, [name]: time })
      return
    }
    
    setState({ ...state, [name]: value })
  }

  const addColor = (e) => {
    const value = e.currentTarget.getAttribute('data-color')
    setState({ ...state, color: value })
  }

  const handleSubmit = (e) => {
    if(!state.task){
      return
    }
    
    if (e.code === "Enter") {
      // action will be dispatched in todo context.
      addTask(state)
      setState(initialState)
      return
    }
  }

  return (
    <Wrapper >
      <div className='task-colors'>
        <ColoredButton color="var(--blue)" handleClick={addColor} />
        <ColoredButton color="var(--yellow)" handleClick={addColor} />
        <ColoredButton color="var(--rose)" handleClick={addColor} />
      </div>
      <input
        type="text"
        name="task"
        value={state.task ? state.task : ''}
        placeholder='What is your next task?'
        className='task-input'
        onChange={handleInput}
        onKeyUp={handleSubmit}
      />
      <div className='date-time-input'>
        <button className='custom-btn'>
          <MdOutlineAccessTime className='icon' />
          <input
            type="time"
            name="time"
            className='custom-input'
            onChange={handleInput}
          />
        </button>
        <button className='custom-btn'>
          <IoCalendarClearOutline className='icon' />
          <input
            type="date"
            name="date"
            className="custom-input"
            onChange={handleInput}
          />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 3rem;
  max-width: 660px;
  min-width: 340px;
  padding: 1rem;
  border-radius: var(--radius);
  background-color: var(--white);

  display: flex;
  column-gap: 1rem;
  align-items: center;

  .task-colors{
    display: flex;
    column-gap: 0.4rem;
  }

  .task-input{
    font-size: 1rem;
    flex-grow: 1;
    flex-shrink: 0;
    &::placeholder{
      color: var(--light-grey);
    }
  }

  .date-time-input{
    display: flex;
    column-gap: 1.5rem;
    flex-shrink: 0;
  }

  .icon{
    color: var(--purple);
  }

  .custom-btn{
    position: relative ;
  }

  .custom-input{
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    opacity: 0;
  }


`
export default AddTask