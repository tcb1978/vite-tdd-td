import { useState } from 'react';
import { Task } from './types';
import AddTask from './AddTask';
import TaskList from './TaskList';
import TaskListItem from './TaskListItem';
import TaskListHeader from './TaskListHeader';

function App() {
  console.log('App Rendered');
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAddTask = (taskName: string) => {
    const trimedTaskName = taskName.trim();

    if (!trimedTaskName) {
      return;
    }

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.max(...prevTasks.map((task) => task.id), 0) + 1,
        title: taskName,
        isCompleted: false,
      },
    ]);
  };

  return (
    <div className='App'>
      <h1>Tasks</h1>
      <AddTask onAddTask={onAddTask} />
      {tasks.length > 0 ? <TaskListHeader count={tasks.length} /> : null}
      <TaskList>
        {tasks.map((task) => (
          <TaskListItem key={task.id}>{task.title}</TaskListItem>
        ))}
      </TaskList>
    </div>
  );
}

export default App;
