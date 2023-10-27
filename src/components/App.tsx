import React, { useState } from 'react';
import '../styles/App.css';
import Quarter from './Quarter';
import moment from 'moment';
import { Task } from '../tasks/Task';
import { MockTasks } from '../tasks/MockTasks';
import TaskCard from './TaskCard';

function App() {
  const [year, setYear] = useState(moment().year());
  const [quarter, setQuarter] = useState(moment().quarter());
  const [taskList, setTaskList] = useState<Task[]>(MockTasks);
  const [taskCardOpen, setTaskCardOpen] = useState<boolean>(false);
  const updateQuarter = (value: number) => {
    const newQuarter = quarter + value;
    if (newQuarter === 5) {
      setQuarter(1);
      setYear(year + 1);
    } else if (newQuarter === 0 ) {
      setQuarter(4);
      setYear(year -1);
    } else {
      setQuarter(newQuarter);
    } 
  };

  const addTask = async (e: React.FormEvent, formData: Task, edit: boolean) => {
    e.preventDefault();
    setTaskCardOpen(false);
    if (edit) {
      return setTaskList(editTask(formData.id as number, formData));
    }

    const task: Task = {
      id: Math.random(),
      name: formData.name,
      description: formData.description,
      assignee: formData.assignee,
      startDate: formData.startDate,
      endDate: formData.endDate,
      status: formData.status,
    }
    setTaskList([task, ...taskList])
  };

  const editTask = (id: number, updatedTask: Task) => {
    return taskList.map(task => {
      if (task.id === id) {
          return updatedTask;
      }
      return task;
    });
   
  };

  const deleteTask = async (id: number|undefined) => {
    if (!id) {
      return;
    }
    setTaskCardOpen(false);
    const tasks: Task[] = taskList.filter((task: Task) => task.id !== id)
    setTaskList(tasks);
  };


  return (
    <div className="container">
      <div className="header">
      <button 
        onClick={() => updateQuarter(-1)}
      >
        Last
      </button>
      <div className="title">
        Q{quarter} {year}
      </div>
      <button 
        onClick={() => updateQuarter(1)}
      >
        Next
      </button>
      </div>
      <Quarter 
        year={year} 
        quarter={quarter} 
        taskList={taskList} 
        saveTask={addTask} 
        deleteTask={deleteTask}
      />
      <div>
      <button onClick={() => setTaskCardOpen(true)}>
        Add Task
      </button>
      </div>
    
      {taskCardOpen && <TaskCard 
                          saveTask={addTask}
                          cancelAction={() => setTaskCardOpen(false)}
                          deleteTask={deleteTask} />}
    </div>
  );
}

export default App;
