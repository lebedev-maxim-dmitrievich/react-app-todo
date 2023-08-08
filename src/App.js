//Импорт библиотек 
import React, { useState } from "react";
import TaskList from "./components/TaskList";
import SelectedTask from "./components/SelectedTask";

function App() {
  /*
    Данный функциональный компонент является родительским для всех остальных компонентов и в нём отрисовываются компонент: TaskList -
    который отображает все задачи которые создал пользователь, Selected Task - который позволяет взаимодействовать (редактировать) с выбранной задачей. 
  */

  //  Объявление констант, которые использует хук useState (создает состояние внутри компонента и предоставляет функциональность для управления этим состоянием)
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Купить хлеба', body: 'Текст', status: 'Ожидает' },
    { id: 2, title: 'Забрать кота', body: 'Текст', status: 'Ожидает' },
    { id: 3, title: 'Сделать программу', body: 'Текст', status: 'Ожидает' },
  ]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  //  Метод для добавление задачи в tasks
  const addTask = () => {
    // Генерация уникального значения id
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

    //  При создание новой задачи, если задача для редактирования не выбрана, будет открыта для редактирования текущая созданная
    if (selectedTask == null) {
      setSelectedTask(task);
    }
  };

  //  Метод для удаления задач из task по id 
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));

    //  Проверка для обнуления окна компонента, если удаляемая задача такая же, как и открытая для редактирования
    if (selectedTask == null || selectedTask.id === id) {
      setSelectedTask(null);
    }
  };

  //  Метод для обновления задач из task по новому объекту task 
  const updateTask = (updatedTask) => {
    setSelectedTask(updatedTask);
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  //  Обработчик событий, который принимает в себя задачу по которой нажмет пользователь
  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  //  Метод который возвращает значения по тому, что ввели в строке поиска 
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //  Отрисовка
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

//Экспорт компонента для его импорта в других компонентах
export default App;
