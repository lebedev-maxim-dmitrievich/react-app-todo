import React, { useState } from "react";
import TaskList from "./components/TaskList";
import SelectedTask from "./components/SelectedTask";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Купить хлеба', body: 'Текст', status: 'Ожидает' },
    { id: 2, title: 'Забрать кота', body: 'Текст', status: 'Ожидает' },
    { id: 3, title: 'Сделать программу', body: 'Текст', status: 'Ожидает' },
  ]);

  const [selectedTask, setSelectedTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const addTask = () => {
    let newTaskId = 1;

    if (tasks.length !== 0) {
      newTaskId =
        tasks.reduce((acc, curr) => (acc.id > curr.id ? acc : curr)).id + 1;
    }

    const task = {
      id: newTaskId,
      title: 'Новый заголовок',
      body: 'Новый текст',
      status: 'Ожидает',
    };
    setTasks([...tasks, task]);

    if (selectedTask == null) {
      setSelectedTask(task);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));

    if (selectedTask == null || selectedTask.id === id) {
      setSelectedTask(null);
    }
  };

  const updateTask = (updatedTask) => {
    setSelectedTask(updatedTask);
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="sidebar">
        <h1>Список заметок</h1>
        <input
          type="text"
          placeholder="Поиск по заголовку..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={addTask}>Добавить новую заметку</button>
        {tasks.length === 0 ? (
          <p>Заметок нет</p>
        ) : (
          filteredTasks.map((task) => (
            <TaskList
              key={task.id}
              task={task}
              onTaskClick={handleTaskClick}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>

      <div className="main-container">
        <h1>Выбранная заметка</h1>
        <SelectedTask task={selectedTask} onUpdateTask={updateTask} />
      </div>
    </div>
  );
}

export default App;
