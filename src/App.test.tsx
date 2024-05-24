import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('should render input field and add button', () => {
    render(<App />);

    const input = screen.getByRole('textbox', { name: /add task/i });
    const button = screen.getByRole('button', { name: /add/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('should add a task to list when add button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole('textbox', { name: /add task/i });
    const button = screen.getByRole('button', { name: /add/i });

    const newInputValue = 'New Task 1';

    await user.type(input, newInputValue);
    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText(newInputValue)).toBeInTheDocument();
    });
  });

  test('should clear the input value after a task is added', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole('textbox', { name: /add task/i });
    const button = screen.getByRole('button', { name: /add/i });

    const newInputValue = 'New Task 1';

    await user.type(input, newInputValue);
    await user.click(button);

    const emptyInputValue = '';

    await waitFor(() => {
      expect(input).toHaveValue(emptyInputValue);
    });
  });

  test('should not add an empty task', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /add/i });

    await user.click(button);

    await waitFor(() => {
      expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });
  });

  test('should add a task by pressing the enter key', async () => {
    const user = userEvent.setup();
    render(<App />);

    const input = screen.getByRole('textbox', { name: /add task/i });

    const newInputValue = 'New Task 1{enter}';

    await user.type(input, newInputValue);
  });
});
