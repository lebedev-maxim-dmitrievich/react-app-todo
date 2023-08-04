import React, { useState } from "react"
import TaskList from "./components/TaskList";

function App() {
    const [tasks, setTask] = useState([
        {id: 1, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
        {id: 2, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
        {id: 3, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
        {id: 4, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
        {id: 5, title: 'Заголовок', body: 'Текст', status: 'Ожидает'},
    ])

    return(
        <div>
            {tasks.map(task => 
                    <TaskList task={task} key={task.id} />
                )}
        </div>
    )
}

export default App;