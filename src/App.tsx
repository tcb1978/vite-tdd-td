import { useState } from 'react';

type Priority = 'p1' | 'p2' | 'p3';

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  priority?: Priority;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Task 1',
      isCompleted: false,
    },
  ]);

  const [taskName, setTaskName] = useState<string>('');

  const handleOnClick = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.max(...prevTasks.map((task) => task.id), 0) + 1,
        title: taskName,
        isCompleted: false,
      },
    ]);
    setTaskName('');
  };

  return (
    <div className='App'>
      <h1>Tasks</h1>
      <label htmlFor='task-input'>Add Task </label>
      <input
        id='task-input'
        type='text'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleOnClick}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.isCompleted ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
