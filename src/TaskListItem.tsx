import type { FC } from 'react';

interface TaskListItemProps {
  children: string;
}

const TaskListItem: FC<TaskListItemProps> = ({ children }) => {
  return <li>{children}</li>;
};

export default TaskListItem;
