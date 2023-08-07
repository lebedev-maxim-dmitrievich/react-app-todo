import React, { useState } from "react"
import TaskList from "./components/TaskList";
import SelectedTask from "./components/SelectedTask";

function App() {
    const [tasks, setTasks] = useState([
        {id: 1, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
        {id: 2, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
        {id: 3, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
    ])

    const [selectedTask, setSelectedTask] = useState(null);

    const addTask = () => {
        let newTaskId = 1

        if (tasks.length !== 0)
            newTaskId = tasks.reduce((acc, curr) => acc.id > curr.id ? acc : curr).id + 1

        const task = {
            id: newTaskId,
            title: 'Новый заголовок',
            body: 'Новый текст',
            status: 'Ожидает'
        };
        setTasks([...tasks, task]);
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };
    
    return (
        <div>
            <h1>Список заметок</h1>

            <button onClick={addTask}>Добавить новую заметку</button>

            <aside>
                {tasks.length === 0 ? (
                    <p>Заметок нет</p>
                ) : (
                    tasks.map((task) => (
                        <TaskList
                        key={task.id}
                        task={task}
                        onTaskClick={(handleTaskClick)} // Передаем обработчик клика
                        onDelete={(deleteTask)}
                    />
                    ))
                )}
            </aside>
            
            <h1>Выбранная заметка</h1>
            <div>
                <SelectedTask task={selectedTask} />
            </div>
        </div>
    );
}

export default App;