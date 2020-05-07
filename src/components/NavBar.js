import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link } from "react-router-dom"

function NavBar() {
	const myStyle = {
		color: "Lightgray",
		marginLeft: "10px",
		fontSize: "18px",
	}

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand>Table App</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Link style={myStyle} to="/">
						Home
					</Link>
					<Link style={myStyle} to="/warehouse">
						Warehouse
					</Link>
					<Link style={myStyle} to="/employees">
						Employees
					</Link>
					<Link style={myStyle} to="/goods">
						Goods
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default NavBar
