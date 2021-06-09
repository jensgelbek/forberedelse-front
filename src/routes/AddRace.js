import React from "react";
import { Form, Button } from "react-bootstrap";
import { fetchData } from "../apiUtils";
import CenteredContainer from "../components/CenteredContainer";
import {useHistory} from "react-router";
import {USER} from "../settings";

const initialValues = {
    name: "",
    date: "",
    distance:"",
    raceTime:"01:01:01",
  }

function AddRace(){
    const [raceData, setRaceData] = React.useState(initialValues)
    const [message,setMessage]=React.useState("")
    const [serverError, setServerError] = React.useState(null)
    const history = useHistory()
  
    function handleSubmit(event) {
     event.preventDefault()
     console.log(raceData)
     fetchData(USER.ADDRACE,"POST",raceData).then(setRaceData(initialValues)).then(setMessage("Race added."));
    
    }
  
    function handleChange(event) {
      setRaceData({
        ...raceData,
        [event.target.name]: event.target.value,
      })
      setMessage("")
    }
  
return (
    <CenteredContainer>
      <h1>Add Race</h1>
      <Form style={{ width: "400px" }} onSubmit={handleSubmit}>
       
        <Form.Group controlId="name">
          <Form.Label>Race Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={raceData.name}
            onChange={handleChange}
            placeholder="Enter racename"
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={raceData.date}
            onChange={handleChange}
            placeholder="Enter date"
          />
        </Form.Group>
        <Form.Group controlId="distance">
          <Form.Label>Distance</Form.Label>
          <Form.Control
            type="number"
            name="distance"
            value={raceData.distance}
            onChange={handleChange}
            placeholder="Enter distance"
          />
        </Form.Group>
        <Form.Group controlId="time">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            name="raceTime"
            format="hh:mm:ss"
            value={raceData.raceTime}
            onChange={handleChange}
            placeholder="Enter time"
          />
        </Form.Group>
        <Button block type="submit">
          Submit
        </Button>
      </Form>
      <p>{message}</p>
    </CenteredContainer>
  );
}

export default AddRace;