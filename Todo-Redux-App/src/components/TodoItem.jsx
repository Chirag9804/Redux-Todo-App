import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../features/todo/todoSlice";

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [text, setText] = useState(todo.text);
    const saveTodo = () => {
        if (!text.trim()) return;

        dispatch(
            updateTodo({
                id: todo.id,
                text,
            })
        );

        setEdit(false);
    };

    return (
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-4 flex justify-between items-center hover:shadow-xl transition duration-300">
            {edit ? (
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="flex-1 mr-4 px-3 py-2 rounded-lg border focus:ring-2 focus:ring-green-300 outline-none"
                />
            ) : (
                <p className="font-medium text-gray-700 flex-1 break-words">
                    {todo.text}
                </p>
            )}

            <div className="flex gap-2 ml-4">
                {edit ? (
                    <button
                        onClick={saveTodo}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition">
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setEdit(true)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg transition">
                        Edit
                    </button>
                )}

                <button
                    onClick={() => dispatch(deleteTodo(todo.id))}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TodoItem;