import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const todos = useSelector((state) => state.todo.todos);

    return (
        <div className="space-y-4">
            {todos.length === 0 ? (
                <div className="bg-gray-100 rounded-xl p-8 text-center text-gray-500">
                    No Tasks Yet
                </div>
            ):(
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            )}
        </div>
    );
};

export default TodoList;