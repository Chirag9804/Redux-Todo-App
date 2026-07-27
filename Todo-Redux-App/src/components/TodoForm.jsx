import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const TodoForm = () => {
    const [input, setInput] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!input.trim()) return;

        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-3 mb-6"
        >
            <input
                type="text"
                placeholder="Enter your task..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition"
            />

            <button
                className="px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg hover:scale-105 transition">
                Add
            </button>
        </form>
    );
};

export default TodoForm;