import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import axios from "axios"

function FormGoods() {
	const [data, setData] = useState({
		warehouse: "",
		name: "",
		quantity: "",
	})

	const myStyle = {
		marginTop: "20px",
		marginBottom: "10px",
	}

	const postData = () => {
		axios.post("http://localhost:3004/goods", data).then((data) => {
			console.log(data)
			window.location.reload()
		})
	}

	return (
		<Form style={myStyle}>
			<Form.Row>
				<Col>
					<Form.Control
						placeholder="Warehouse"
						value={data.warehouse}
						onChange={(e) => setData({...data,  warehouse: e.target.value })}
					/>
				</Col>
				<Col>
					<Form.Control
						placeholder="Name"
						value={data.name}
						onChange={(e) => setData({...data,  name: e.target.value })}
					/>
				</Col>
			</Form.Row>
			<Form.Row style={myStyle}>
				<Col>
					<Form.Control
						placeholder="Quantity"
						value={data.quantity}
						onChange={(e) => setData({ ...data, quantity: e.target.value })}
					/>
				</Col>
				<Col />
			</Form.Row>
			<Button
				onClick={postData}
				disabled={(!data.warehouse, !data.name, !data.quantity)}
				style={myStyle}
				variant="outline-success"
			>
				Save
			</Button>
		</Form>
	)
}

export default FormGoods
