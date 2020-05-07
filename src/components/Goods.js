import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Table from "react-bootstrap/Table"
import Container from "react-bootstrap/Container"
import axios from "axios"
import FormGoods from "./FormGoods"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash} from "@fortawesome/free-solid-svg-icons"

function Goods() {
	const [goods, setGoods] = useState([])

	useEffect(() => {
		fetch("http://localhost:3004/goods")
			.then((response) => response.json())
			.then((data) => setGoods(data))
	}, [])

	const handleDelete = (e) => {
		axios
			.delete(`http://localhost:3004/goods/${e}`)
			.then((res) => console.log(res.data))
		window.location.reload()
	}

	return (
		<Container fluid>
			<FormGoods />

			<Table striped bordered hover variant="dark">
				<thead>
					<tr>
						<th>#</th>
						<th>Warehouse</th>
						<th>Name</th>
						<th>Quantity</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{goods.map((data) => (
						<tr key={data.id}>
							<td>{data.id}</td>
							<td>{data.warehouse}</td>
							<td>{data.name}</td>
							<td>{data.quantity}</td>
							<td>
								<button
									onClick={() => handleDelete(data.id)}
								>
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

export default Goods
