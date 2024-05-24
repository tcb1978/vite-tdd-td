import type { FC, ReactNode } from 'react';

interface TaskListProps {
  children: ReactNode;
  header?: ReactNode;
}

const TaskList: FC<TaskListProps> = ({ header, children }) => {
  return (
    <>
      {header && { header }}
      <ul>{children}</ul>
    </>
  );
};

export default TaskList;
