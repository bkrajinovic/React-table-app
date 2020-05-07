import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import axios from "axios"

function FormEmployees() {
	const [data, setData] = useState({
		warehouse: "",
		firstName: "",
		lastName: "",
	})

	const myStyle = {
		marginTop: "20px",
		marginBottom: "10px",
	}

	const postData = () => {
		axios.post("http://localhost:3004/employees", data).then((data) => {
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
						placeholder="First Name"
						value={data.firstName}
						onChange={(e) => setData({...data, firstName: e.target.value })}
					/>
				</Col>
			</Form.Row>
			<Form.Row style={myStyle}>
				<Col>
					<Form.Control
						placeholder="Last Name"
						value={data.lastName}
						onChange={(e) => setData({...data,  lastName: e.target.value })}
					/>
				</Col>
				<Col />
			</Form.Row>
			<Button
				onClick={postData}
				style={myStyle}
				variant="outline-success"
				disabled={(!data.warehouse, !data.firstName, !data.lastName)}
			>
				Save
			</Button>
		</Form>
	)
}

export default FormEmployees
