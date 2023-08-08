import React from "react"
import * as ReactDOMClient from "react-dom/client"
import App from './App.js'
import './css/main.css'

//Поиск ссылки на элемент root в DOM дереве
const app = ReactDOMClient.createRoot(document.getElementById("root"))

//Отрисовка
app.render(<App />);