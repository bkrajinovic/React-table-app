import React from "react"
import "./App.css"
import Warehouse from "./components/Warehouse"
import Goods from "./components/Goods"
import Employees from "./components/Employees"
import NavBar from "./components/NavBar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Run : json-server --watch db.json --port 3004 for data

function App() {
	return (
		<Router>
			<NavBar></NavBar>
			<Switch>
				<Route path="/" exact component={Home}></Route>
				<Route path="/warehouse" component={Warehouse}></Route>
				<Route path="/goods" component={Goods}></Route>
				<Route path="/employees" component={Employees}></Route>
			</Switch>
		</Router>
	)
}

function Home() {
	return(
    <h1>My React table app</h1>
  )
}

export default App
