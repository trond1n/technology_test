// src/components/TodoList.test.tsx
import TodoList from './TodoList';
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'


describe('TodoList', () => {
    test('renders TodoList component', () => {
        render(<TodoList />);
        expect(screen.getByText('Todo List')).toBeInTheDocument();
    });

    test('adds a new todo', () => {
        render(<TodoList />);

        const input = screen.getByPlaceholderText('Add a new todo');
        const button = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(button);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('does not add empty todo', () => {
        render(<TodoList />);

        const button = screen.getByText('Add');
        fireEvent.click(button);

        expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });
    test('deletes a todo when delete button is clicked', () => {
        render(<TodoList />);

        // Добавляем задачу
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add');
        fireEvent.change(input, { target: { value: 'Task to delete' } });
        fireEvent.click(addButton);

        // Проверяем, что задача добавилась
        expect(screen.getByText('Task to delete')).toBeInTheDocument();

        // Находим кнопку удаления и кликаем по ней
        const deleteButton = screen.getByText('Удалить');
        fireEvent.click(deleteButton);

        // Проверяем, что задача удалилась
        expect(screen.queryByText('Task to delete')).not.toBeInTheDocument();
    });
});