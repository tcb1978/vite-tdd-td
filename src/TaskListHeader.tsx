import type { FC } from 'react';

interface TaskListHeaderProps {
  count: number;
}

const TaskListHeader: FC<TaskListHeaderProps> = ({ count }) => {
  return <h2>Total Tasks ({count})</h2>;
};

export default TaskListHeader;
