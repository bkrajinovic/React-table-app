import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import axios from "axios"

function FormWarehouse() {
	const [data, setData] = useState({
		warehouse: "",
		city: "",
	})

	const postData = () => {
		axios.post("http://localhost:3004/warehouse", data).then((data) => {
			console.log(data)
			window.location.reload()
		})
	}

	const myStyle = {
		marginTop: "20px",
		marginBottom: "10px",
	};


	return (
		<Form style={myStyle}>
			<Form.Row>
				<Col>
					<Form.Control
						placeholder="Warehouse"
						value={data.warehouse}
						onChange={(e) => setData({...data,  warehouse: e.target.value })}
					></Form.Control>
				</Col>
				<Col>
					<Form.Control
						placeholder="City"
						value={data.city}
						onChange={(e) => setData({...data,  city: e.target.value })}
					/>
				</Col>
			</Form.Row>
			<Button
				style={myStyle}
				variant="outline-success"
				onClick={postData}
				disabled={(!data.warehouse, !data.city)}
			>
				Save
			</Button>
		</Form>
	)
}

export default FormWarehouse
