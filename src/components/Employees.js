import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import axios from "axios"
import FormEmployees from "./FormEmployees"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash} from "@fortawesome/free-solid-svg-icons"

function Employees() {
	const [employee, setEmployee] = useState([])

	useEffect(() => {
		fetch("http://localhost:3004/employees")
			.then((response) => response.json())
			.then((data) => setEmployee(data))
	}, [])

	const handleDelete = (e) => {
		axios
			.delete(`http://localhost:3004/employees/${e}`)
			.then((res) => console.log(res.data))
		window.location.reload()
	}

	return (
		<Container fluid>
			<FormEmployees />

			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>Warehouse</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{employee.map((data) => (
						<tr key={data.id}>
							<td>{data.id}</td>
							<td>{data.warehouse}</td>
							<td>{data.firstName}</td>
							<td>{data.lastName}</td>
							<td>
								<button onClick={() => handleDelete(data.id)}>
									<FontAwesomeIcon icon={faTrash} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	)
}

export default Employees
