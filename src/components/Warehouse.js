import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import axios from "axios"
import FormWarehouse from "./FormWarehouse"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash} from "@fortawesome/free-solid-svg-icons"

function Warehouse() {
	const [warehouse, setWarehouse] = useState([])

	useEffect(() => {
		fetch("http://localhost:3004/warehouse")
			.then((response) => response.json())
			.then((data) => setWarehouse(data))
	}, [])

	const handleDelete = (e) => {
		axios
			.delete(`http://localhost:3004/warehouse/${e}`)
			.then((res) => console.log(res.data))
		window.location.reload()
	}

	return (
		<Container fluid>
			<FormWarehouse />
			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>Warehouse</th>
						<th>City</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{warehouse.map((data) => (
						<tr key={data.id}>
							<td>{data.id}</td>
							<td>{data.warehouse}</td>
							<td>{data.city}</td>
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

export default Warehouse
