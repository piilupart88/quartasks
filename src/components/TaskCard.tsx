import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Task } from '../tasks/Task';
import moment from 'moment';
import '../styles/TaskCard.css';

enum TaskStatus {
  toDo = 'TO DO', 
  inProgress = 'IN PROGRESS',
  done = 'DONE'
}

type Props = {
  saveTask: (e: React.FormEvent, formData: Task, edit: boolean) => void,
  edit?: Task;
  cancelAction: (v: boolean) => void;
  deleteTask: (id: number|undefined) => void;
};
const TaskCard: React.FC<Props> = ({ saveTask, edit, cancelAction, deleteTask }) => {
  const task = new Task({
    id: undefined,
    name: '',
    description: '',
    assignee: '',
    startDate: moment(),
    endDate: moment(),
    status: 'TO DO',
  });

  const [formData, setFormData] = React.useState<Task>(edit || task);


  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData((prevState) => ({
      ...prevState,
      [e.currentTarget?.id]: e.currentTarget?.value,
    } as Task));
  };

  const setValue = (value: Date|TaskStatus|null|string, field: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    } as Task));
  };

  return (
    <form className='task-form'>
      <div>
        <div className='form--field'>
          <label htmlFor='name'>Title</label>
          <input 
             onChange={handleForm} type='text' id='name' value={formData.name}/>
        </div>
        <div className='form--field'>
          <label htmlFor='body'>Description</label>
          <textarea 
            value={formData.description}
            onChange={(e) => setValue(e.target.value, 'description')} 
            id='description' 
          />
        </div>
        <div className='form--field'>
          <label htmlFor='assignee'>Assignee</label>
          <input
            onChange={handleForm} 
            type='text' 
            id='assignee'
            value={formData.assignee}/>
        </div>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <div className='form--field'>
            <DatePicker
              label="From date"
              value={moment(formData.startDate)}
              onChange={(newValue: any) => setValue(newValue, 'durationFrom')}
            />
          </div>

        <div className='form--field'>
          <DatePicker
            label="To date"
            value={moment(formData.endDate)}
            onChange={(newValue: any) => setValue(newValue, 'durationTo')}
          />
          </div>
        </LocalizationProvider>

       
        <div className='form--field'>
        <label htmlFor="status">Status:</label>
          <select 
                  name="status" 
                  id="status" 
                  onChange={(e) => setValue(e.target.value as TaskStatus, 'status')} 
          >
            <option value="toDo">To do</option>
            <option value="inProgress">In progress</option>
            <option value="done">Done</option>
          </select>
      </div>
      </div>
      <div className='form--field'>
        <button
          type="submit"
          className='form__button'
          onClick={(e) => saveTask(e, formData, edit ? true : false)}
          disabled={formData === undefined ? true : false}
        >
          {edit? 'Edit' : 'Add'}
        </button>
      {  edit && <button
          className='form__button delete__button'
          onClick={() => deleteTask(edit?.id)}
        >
          Delete
        </button>}
        <button
          className='form__button'
          onClick={() => cancelAction(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  )
};

export default TaskCard;
