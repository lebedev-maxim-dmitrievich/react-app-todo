import React from "react"
import * as ReactDOMClient from "react-dom/client"
import App from './App.js'

const app = ReactDOMClient.createRoot(document.getElementById("root"))

app.render(<App />);