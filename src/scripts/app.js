import React from 'react'
import ReactDOM from 'react-dom'
import HomeView from "./views/homeView.js"

const app = function() {

	ReactDOM.render(<HomeView />,document.querySelector('.container'))
}

app()