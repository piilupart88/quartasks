import React, { useState } from 'react';
import { Task } from '../tasks/Task';
import moment from 'moment';
import '../styles/Quarter.css';
import HoverCard from './HoverCard';
import TaskCard from './TaskCard';

interface QuarterProps {
  taskList: Task[];
  year: number;
  quarter: number;
  deleteTask: (id: number|undefined) => void;
  saveTask: (e: React.FormEvent, formData: Task, edit: boolean) => void,
}

function Quarter({ year, quarter, taskList, saveTask, deleteTask }: QuarterProps) {
  const [cancel, setCancel] = useState<boolean>(false);
  const getQuarter = (quarter: number, year: number) => {
    const months : Map<string, number> = new Map();
    const weeks : Array<number> = [];
    const firstWeek = (quarter - 1) * 13;

    for (let i = 1; i < 14; i++) {
      const week = firstWeek + i;
      const qWeek = moment(moment().year(year).week(week));

      const month = moment(moment(qWeek)).month('MMM');
      const formatted = moment(month).format('MMM');

      if (months.get(formatted)) {
        months.set(formatted, months.get(formatted) as number + 1);
      } else {
        months.set(formatted, 1);
      }
      weeks.push(week);
    }

    return {
      months,
      weeks
    };
  }

  const cancelAction = (value: boolean) => {
    return setCancel(value);
  };

  const drawTask = (task: Task) => {
    const startWeek = moment(task.startDate).week();
    const endWeek = moment(task.endDate).week();

    return (<div className="week-row">
            { getQuarter(quarter, year).weeks.map((week: number) => {
                return week >= startWeek && week <= endWeek ? 
                (<HoverCard cancel={cancel} weeks={<div>{week}</div>} >
                  <TaskCard edit={task} saveTask={saveTask} cancelAction={cancelAction} deleteTask={deleteTask} />
                </HoverCard>        
                ) :
                <div className={'week-cell'}>{week}</div>
            })}
          </div>
    )
  };


  return (
    <div className="quarter">
      <div className="month-row">
        { [...getQuarter(quarter, year).months.entries()].map(([month, quantity]) => (
          <div style={{flex: `${quantity} 1 0`}} className="month-cell">{month}</div>
        ))}
      </div>
      <div className="week-row">
        { getQuarter(quarter, year).weeks.map((week) => (
          <div className="week-cell"><span>{week}</span></div>
        ))}
      </div>
      { taskList.map((task) => (
          drawTask(task)
        ))}
    </div>
  );
}

export default Quarter;
