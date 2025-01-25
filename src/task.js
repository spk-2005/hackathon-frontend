import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';
import './task.css';

export default function Task() {
  const { date, userId } = useParams();
  const [activities, setActivities] = useState([]);
  const [allCompleted, setAllCompleted] = useState(false);
  const [userName, setUserName] = useState('');
  const [userProblem, setUserProblem] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToConfirm, setTaskToConfirm] = useState(null);
  const [dayCompleted, setDayCompleted] = useState(false);
  const [message, setMessage] = useState('');
  
  // Track today's completion date
  const today = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

  useEffect(() => {
    const storedCompletionDate = sessionStorage.getItem('completionDate');
    
    if (storedCompletionDate === today) {
      // If the tasks have already been completed today, prevent further actions
      setDayCompleted(true);
      setAllCompleted(true);
      setActivities([]); // Clear activities as they're not needed today
    } else {
      // Fetch the user data and activities if it's a new day
      const fetchUserData = async () => {
        const storedName = sessionStorage.getItem('usname');
        setUserName(storedName);
        
        try {
          const response = await fetch(
            `https://api.airtable.com/v0/appfQNmAs6vTN5iAn/userinputs`,
            {
              method: 'GET',
              headers: {
                Authorization: `Bearer pataRZ3DHSFEkG4y5.990679aa58294bb7876ba2b2450d1c3b79ef7c49cf4754557f69d0e5e07e2061`,
                'Content-Type': 'application/json',
              },
            }
          );
          const data = await response.json();

          const userRecord = data.records.find((record) => record.fields.Name === storedName);

          if (userRecord) {
            const healthCondition = userRecord.fields.HealthCondition;
            setUserProblem(userRecord.fields.problem);

            let userActivities = [];
            if (healthCondition === 'Heart Patient') {
              userActivities = [
                { name: 'Sleep', completed: false, limit: '8 hours' },
                { name: 'Walk', completed: false, limit: '5000 steps' },
                { name: 'Eat', completed: false },
                { name: 'Yoga', completed: false, limit: 'Light Yoga' },
                { name: 'Breath Exercise', completed: false },
                { name: '5 Sense Exercise', completed: false },
              ];
            } else if (healthCondition === 'Diabetes') {
              userActivities = [
                { name: 'Sleep', completed: false, limit: '7 hours' },
                { name: 'Walk', completed: false, limit: '8000 steps' },
                { name: 'Eat', completed: false },
                { name: 'Yoga', completed: false, limit: 'Moderate Yoga' },
                { name: 'Breath Exercise', completed: false },
                { name: '5 Sense Exercise', completed: false },
              ];
            } else {
              userActivities = [
                { name: 'Sleep', completed: false, limit: '7-8 hours' },
                { name: 'Walk', completed: false, limit: '10000 steps' },
                { name: 'Eat', completed: false },
                { name: 'Yoga', completed: false, limit: 'Moderate Yoga' },
                { name: 'Breath Exercise', completed: false },
                { name: '5 Sense Exercise', completed: false },
              ];
            }

            setActivities(userActivities);
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
      fetchUserData();
    }
  }, [userId, date,today]);

  useEffect(() => {
    // Check localStorage for activity completion statuses
    const activityStatuses = activities.map((activity) =>
      localStorage.getItem(activity.name) === 'true'
    );
    const completedStatus = activityStatuses.every((status) => status);
    setAllCompleted(completedStatus);
  }, [activities]);

  useEffect(() => {
    // Check if all tasks are completed, mark the day as completed in Airtable
    if (allCompleted) {
      localStorage.setItem('completionDate', today); // Store today's completion date
      markDayAsDoneInAirtable();
    }
  }, [allCompleted,today]);

  const toggleActivityStatus = (index) => {
    const activity = activities[index];
    setTaskToConfirm(activity);
    setIsModalOpen(true);
  };

  const handleConfirm = () => {
    const updatedActivities = [...activities];
    const index = activities.indexOf(taskToConfirm);
    updatedActivities[index].completed = true;
    setActivities(updatedActivities);

    // Update localStorage to reflect the completed status
    localStorage.setItem(taskToConfirm.name, 'true');
    
    setIsModalOpen(false);

    // Check if all tasks are now completed
    const allActivitiesCompleted = updatedActivities.every(
      (activity) => activity.completed
    );
    setAllCompleted(allActivitiesCompleted);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const markDayAsDoneInAirtable = async () => {
    try {
      const response = await fetch(
        `https://api.airtable.com/v0/appfQNmAs6vTN5iAn/dailytasks`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer pataRZ3DHSFEkG4y5.990679aa58294bb7876ba2b2450d1c3b79ef7c49cf4754557f69d0e5e07e2061`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              date: date,
              Status: 'Done',
              Name: userName,
              email: `${localStorage.getItem('email')}`,
            },
          }),
        }
      );

      if (response.ok) {
        setMessage(`All tasks are completed for the day! Data has been sent to Airtable.`);
        console.log(`Day ${date} marked as done in Airtable for user ${userId}.`);
      } else {
        console.error('Failed to update Airtable');
      }
    } catch (error) {
      console.error('Error updating Airtable:', error);
    }
  };

  return (
    <section id="tasks-section">
      <h1>Complete Your Tasks - {sessionStorage.getItem('usname')}</h1>
      <h3>Your Main Problem: {userProblem}</h3>
      <h2>Tasks for {userName || 'User'} on {date}</h2>
      <div>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Limit</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.name}</td>
                <td>
                  <button
                    className={activity.completed ? 'completed' : ''}
                    onClick={() => toggleActivityStatus(index)}
                    disabled={dayCompleted}
                  >
                    {activity.completed ? '✔ Completed' : 'Mark as Done'}
                  </button>
                </td>
                <td>{activity.limit || 'No limit'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {allCompleted && !dayCompleted && (
        <div className="success-message">
          <p>{message}</p>
        </div>
      )}

      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        taskName={taskToConfirm ? taskToConfirm.name : ''}
      />
    </section>
  );
}  