import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Airtable from 'airtable';
import './dailycalender.css';

export default function DailyCalendar() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState({});
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasksFromAirtable(currentMonth);
  }, [currentMonth]);

  const fetchTasksFromAirtable = async (month) => {
    const apiKey = 'pataRZ3DHSFEkG4y5.990679aa58294bb7876ba2b2450d1c3b79ef7c49cf4754557f69d0e5e07e2061';
    const baseId = "appfQNmAs6vTN5iAn";
    const tableName = 'dailytasks';

    const base = new Airtable({ apiKey }).base(baseId);

    try {
      const records = await base(tableName).select().all();

      const taskCompletion = {};

      records.forEach((record) => {
        const taskDate = new Date(record.get('date')); // Convert the Date field to a JavaScript Date object
        if (taskDate.getMonth() === month) { // Check if the month matches
          const status = record.get('Status'); // Fetch the status
          const isCompleted = status === 'Done';
          taskCompletion[taskDate.getDate()] = isCompleted; // Store completion status for each day

          // Log to check if the status is correctly fetched and processed
          console.log(`Task for ${taskDate.getDate()} is ${status === 'Done' ? 'Completed' : 'Not Done'}`);
        }
      });

      console.log('Task Completion:', taskCompletion);
      setTasks(records);
      setCompletedTasks(taskCompletion);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDayClick = (day) => {
    const year = new Date().getFullYear();
    const month = currentMonth + 1; 
    const date = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    navigate(`/task/${date}`);
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(new Date().getFullYear(), currentMonth + 1, 0).getDate();
    let calendarDays = [];

    for (let i = 1; i <= daysInMonth; i++) {
      console.log(`Rendering day ${i}: ${completedTasks[i] ? 'Completed' : 'No task or Not Completed'}`);
      
      // Check if there is a status for the day, otherwise leave it neutral
      const className = completedTasks[i] === undefined ? '' : (completedTasks[i] ? 'completed' : 'not-completed');

      calendarDays.push(
        <div
          key={i}
          className={`calendar-day ${className}`}
          onClick={() => handleDayClick(i)}
        >
          {i}
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div className="daily-calendar">
      <h2>Daily Tasks for {new Date().toLocaleString('default', { month: 'long' })}</h2>
      <div className="calendar">{renderCalendar()}</div>
    </div>
  );
}
