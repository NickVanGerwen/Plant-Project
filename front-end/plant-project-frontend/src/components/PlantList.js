import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Variables } from '../components/APIURLs';
import wateringcan from '../wateringcan.ico';
import wateringcanblue from "../wateringcanblue.ico";
import warning from "../warning.ico";

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
        if (name === "" || type === "") {
            alert("vul alle velden in");
        } else if (waterinterval <= 0) {
            alert("aantal dagen moet 1 of hoger zijn")
        }
        else {
            axios.put(Variables.PutNewPlant + "name=" + name + "&type=" + type + "&waterIntervalinDays=" + waterinterval + "&groupid=" + Group.id)
            window.location.reload(false);
        }
    }

    function IconEnter(plantid) {
        document.getElementById("watercan" + plantid).src = wateringcanblue
    }
    function IconLeave(plantid, plantdate) {

        if (IsExpired(plantdate)) {
            document.getElementById("watercan" + plantid).src = warning
        }
        else {
            document.getElementById("watercan" + plantid).src = wateringcan

        }
    }

    function IsExpired(plantdate) {
        const today = new Date();
        let month = today.getMonth();
        month++;
        if (month < 10) {
            month = '0' + month
        }
        if (plantdate.substr(0, 4) < today.getFullYear()) {
            return true
        }
        if (plantdate.substr(0, 4) == today.getFullYear() && plantdate.substr(5, 2) < month) {
            return true;
        }
        if (plantdate.substr(0, 4) == today.getFullYear() && plantdate.substr(5, 2) == month && plantdate.substr(8, 2) <= today.getDate()) {
            return true;
        }
        return false;
    }

    function WaterPlant(plantid) {
        try {
            axios.patch(Variables.PatchPlantDate + plantid)
            window.location.reload(false);

        } catch (error) {
            alert("Connectie gefaald")
            console.error(error);
        }
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
                        <tr id="troverride" data-testid="plantlist" onMouseEnter={() => IconEnter(plant.id)} onMouseLeave={() => IconLeave(plant.id, plant.waterTime)}>
                            <td style={{ width: "25%" }}>

                                {IsExpired(plant.waterTime) ? <img title="markeer als bewatert" id={"watercan" + plant.id} alt="water" src={warning} style={{ cursor: "pointer", width: "25px", marginRight: "10%" }} variant="secondary" onClick={() => WaterPlant(plant.id)} /> : <img title="markeer als bewatert" id={"watercan" + plant.id} alt="water" src={wateringcan} style={{ cursor: "pointer", width: "25px", marginRight: "10%" }} variant="secondary" onClick={() => WaterPlant(plant.id)} />}



                                {plant.waterTime.substr(0, 10)}
                            </td>
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