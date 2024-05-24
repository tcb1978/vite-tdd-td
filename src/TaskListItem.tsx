import type { FC } from 'react';

interface TaskListItemProps {
  children: string;
  id: number;
  onRemoveTask: (taskId: number) => void;
}

const TaskListItem: FC<TaskListItemProps> = ({
  children,
  id,
  onRemoveTask,
}) => {
  return (
    <li>
      {children}
      <button
        onClick={() => {
          onRemoveTask(id);
        }}
      >
        X
      </button>
    </li>
  );
};

export default TaskListItem;
