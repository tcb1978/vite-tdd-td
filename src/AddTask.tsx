import { useState, type FC } from 'react';

type TaskInputProps = {
  onAddTask: (taskName: string) => void;
};

const AddTask: FC<TaskInputProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState<string>('');

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTaskName = taskName.trim();

    if (!trimmedTaskName) {
      return;
    }

    onAddTask(trimmedTaskName);
    setTaskName('');
  };

  return (
    <form onSubmit={(e) => handleAddTask(e)}>
      <label htmlFor='task-input'>Add Task: </label>
      <input
        id='task-input'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddTask;
