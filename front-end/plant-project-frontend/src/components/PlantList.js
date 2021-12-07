import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Variables } from '../components/APIURLs';

function PlantList({ Group }) {
    const [createPlantActive, setcreatePlantActive] = useState(false);

    var plantarray = []
    if (Group != null) {//kan de array van users niet accessen, alleen god weet waarom, dus doe het zo
        for (var i = 0; i < Group.plants.length; i++) {
            plantarray.push(Group.plants[i])
        }
    }

    function TogglePopup() {
        setcreatePlantActive(!createPlantActive)
        console.log("show popup " + createPlantActive)
    }

    function AddPlant() {
        var name = document.getElementById("plantname").value;
        var type = document.getElementById("planttype").value;
        var waterinterval = document.getElementById("plantwaterinterval").value;
        if (name === "" || type === "" || waterinterval === 0) {
            alert("vul alle velden in");
        } else {
            axios.put(Variables.BaseUrl + "NewPlant?name=" + name + "&type=" + type + "&waterIntervalinDays=" + waterinterval + "&groupid=" + Group.id)
            window.location.reload(false);
        }
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr id="troverride">
                        <th>Water nodig</th>
                        <th>Naam</th>
                        <th>Type</th>
                        <th>Hoe vaak</th>
                    </tr>
                </thead>
                <tbody>
                    {plantarray.map(plant => (
                        <tr data-testid="plantlist">
                            <th style={{ width: "25%" }}>{plant.waterTime}</th>
                            <th data-testid={"plant" + plant.id} style={{ width: "25%" }}>{plant.name}</th>
                            <th style={{ width: "25%" }}>{plant.type}</th>
                            {plant.waterIntervalInDays <= 2 ? <th style={{ width: "25%" }}>elke dag</th> : <th style={{ width: "25%" }}>elke {plant.waterIntervalInDays} dagen</th>}
                        </tr>
                    ))}
                    {createPlantActive ?
                        <tr id="troverride">
                            <th style={{ width: "25%" }}>
                                <Button style={{ marginLeft: "2%", marginTop: "1%", backgroundColor: "red" }} variant="secondary" onClick={() => TogglePopup()} >X</Button> <Button style={{ marginLeft: "2%", marginTop: "1%" }} variant="secondary" onClick={() => AddPlant()}>Voeg Toe</Button>
                            </th>
                            <th style={{ width: "25%" }}><Form.Control placeholder="naam" id="plantname" /></th>
                            <th style={{ width: "25%" }}><Form.Control placeholder="type" id="planttype" /></th>
                            <th style={{ width: "25%" }}><Form.Control type="number" placeholder="aantal dagen" id="plantwaterinterval" /></th>
                        </tr>
                        :
                        <tr id="troverride" >
                            <th style={{ width: "25%" }}>
                                <Button style={{ marginLeft: "2%", marginTop: "1%" }} variant="secondary" onClick={() => TogglePopup()}>Plant toevoegen</Button>
                            </th>
                        </tr>
                    }
                </tbody>
            </table>

        </>
    )
}
export default PlantList