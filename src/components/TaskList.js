//Импорт библиотек 
import React from "react";

function TaskList(props) {
  /*
    Дочерний функциональный компонент, который отвечает за вывод задач (заголовок, статус)
  */
  
  //  Изменение цвета статуса задачи
  let taskColor = 'gray';
  if (props.task.status === 'В процессе') {
    taskColor = 'blue';
  } else if (props.task.status === 'Выполнена') {
    taskColor = 'green';
  }

  //  Обработчик событий, который передает в родительский компонент на который нажал пользователь
  const handleTaskClick = () => {
    props.onTaskClick(props.task);
  };

  // Обработчик событий, который передает в родительский компонент id задачи, которую необходимо удалить 
  const handleDeleteClick = (event) => {
    event.stopPropagation();
    props.onDelete(props.task.id);
  };

  // Отрисовка
  return (
    <div className="task" onClick={handleTaskClick}>
      <h3>{props.task.title}</h3>
      <p style={{ color: taskColor }}>{props.task.status}</p>

      <button onClick={handleDeleteClick}>Удалить заметку</button>
    </div>
  );
}

//Экспорт компонента для его импорта в других компонентах
export default TaskList;
