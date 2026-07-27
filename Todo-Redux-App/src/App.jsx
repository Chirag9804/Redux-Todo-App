import React from 'react'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-white/30">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-2">
          Todo App
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Organize your daily tasks
        </p>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  )
}

export default App