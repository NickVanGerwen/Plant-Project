import React from 'react'
import "../css/popup.css"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Variables } from '../components/APIURLs';



function PlantCreationPopup({ groupid = null }) {

    console.log(groupid);

    function AddPlant() {
        var name = "aa";
        var type = "ALoeoeoeoeoeoeo";
        var waterinterval = 7;
        // axios.put("https://localhost:44301/NewPlant?name=1&type=1&waterIntervalinDays=1&groupid=1");
        axios.put(Variables.BaseUrl + "NewPlant?name=" + name + "&type=" + type + "&waterIntervalinDays=" + waterinterval + "&groupid=" + groupid)
    }

    return (
        <div className="popup">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Naam</Form.Label>
                    <Form.Control placeholder="naam" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Type</Form.Label>
                    <Form.Control placeholder="type" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Hoevaak water nodig</Form.Label>
                    <Form.Control placeholder="aantal dagen" />
                </Form.Group>
            </Form>
            <Button style={{ marginLeft: "2%", marginTop: "1%" }} variant="secondary" onClick={() => AddPlant()}>Plant toevoegen</Button>
        </div>
    )
}

export default PlantCreationPopup;