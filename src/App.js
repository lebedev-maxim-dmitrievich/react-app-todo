import React, { useState } from "react"
import TaskList from "./components/TaskList";
import SelectedTask from "./components/SelectedTask";

function App() {
    const [tasks, setTasks] = useState([
        {id: 1, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
        {id: 2, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
        {id: 3, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
        {id: 4, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
        {id: 5, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
    ])

    const [selectedTask, setSelectedTask] = useState(null);

    const addTask = () => {
        const task = {
            id: tasks.length + 1,
            title: 'Новый заголовок',
            body: 'Новый текст',
            status: 'Ожидает'
        };
        setTasks([...tasks, task]);
    }

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };
    
    return (
        <div>
            <h1>Список заметок</h1>

            <button onClick={addTask}>Добавить новую заметку</button>

            <aside>
                    {tasks.map((task) => (
                    <TaskList
                        key={task.id}
                        task={task}
                        onTaskClick={(handleTaskClick)} // Передаем обработчик клика
                    />
                    ))}
            </aside>
            
            <h1>Выбранная заметка</h1>
            <div>
                <SelectedTask task={selectedTask} />
            </div>
        </div>
    );
}

export default App;