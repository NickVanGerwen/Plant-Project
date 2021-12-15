import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Variables } from '../components/APIURLs';
import wateringcan from '../wateringcan.ico'

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


    function WaterPlant(plantid) {
        console.log("watered plant: " + plantid)
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
                            <td style={{ width: "25%" }}> <img src={wateringcan} style={{ width: "25px", marginRight: "10%" }} variant="secondary" onClick={() => WaterPlant(plant.id)} />{plant.waterTime.substr(0, 10)}</td>
                            <td data-testid={"plant" + plant.id} style={{ width: "25%" }}>{plant.name}</td>
                            <td style={{ width: "25%" }}>{plant.type}</td>
                            {plant.waterIntervalInDays <= 2 ? <td style={{ width: "25%" }}>elke dag</td> : <td style={{ width: "25%" }}>elke {plant.waterIntervalInDays} dagen</td>}
                        </tr>
                    ))}
                    {createPlantActive ?
                        <tr id="troverride">
                            <td style={{ width: "25%" }}>
                                <Button style={{ marginLeft: "2%", marginTop: "1%", backgroundColor: "red" }} variant="secondary" onClick={() => TogglePopup()} >X</Button> <Button style={{ marginLeft: "2%", marginTop: "1%" }} variant="secondary" onClick={() => AddPlant()}>Voeg Toe</Button>
                            </td>
                            <td style={{ width: "25%" }}><Form.Control placeholder="naam" id="plantname" /></td>
                            <td style={{ width: "25%" }}><Form.Control placeholder="type" id="planttype" /></td>
                            <td style={{ width: "25%" }}><Form.Control type="number" placeholder="aantal dagen" id="plantwaterinterval" /></td>
                        </tr>
                        :
                        <tr id="troverride" >
                            <td style={{ width: "25%" }}>
                                <Button style={{ marginLeft: "2%", marginTop: "1%" }} variant="secondary" onClick={() => TogglePopup()}>Plant toevoegen</Button>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>

        </>
    )
}
export default PlantList