import styled from 'styled-components'
import DotedLabel from './DotedLabel';
import { useTodoContext } from '../contexts/todo_context';


const Task = (props) => {
  const { task, id, time, taskStatus, color } = props
  const { editTask } = useTodoContext();

  return (
    <Wrapper>
      <DotedLabel label={task} dotColor={color} />
      <div className='time-checkbox'>
        <p style={{whiteSpace:"nowrap"}}>{time}</p>
        <div className='custom-btn'>
          <select type="checkbox" value={taskStatus} onChange={(e) => editTask({ id, taskStatus: e.target.value })} >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 630px;
  min-width: 340px;

  margin: 1rem auto;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius);
  background-color: var(--white);

  display: flex;
  align-items: center;

  .time-checkbox{
    p{
      margin: 0;
    }
    display: flex;
    align-items: center;
    column-gap: 2.5rem;
  }

  select{
    padding: 0.3rem;
    border-radius: var(--radius);
    color: var(--grey);
  }
  select:focus{
    outline: var(--grey);
  }
`
export default Task