import React from "react";

function PlantList({ Group }) {

    var plantarray = []
    if (Group != null) {//kan de array van users niet accessen, alleen god weet waarom, dus doe het zo
        for (var i = 0; i < Group.plants.length; i++) {
            plantarray.push(Group.plants[i])
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
                            <td style={{ width: "25%" }}>{plant.waterTime.substr(0, 10)}</td>
                            <td data-testid={"plant" + plant.id} style={{ width: "25%" }}>{plant.name}</td>
                            <td style={{ width: "25%" }}>{plant.type}</td>
                            {plant.waterIntervalInDays <= 2 ? <td style={{ width: "25%" }}>elke dag</td> : <td style={{ width: "25%" }}>elke {plant.waterIntervalInDays} dagen</td>}
                        </tr>
                    ))}

                </tbody>
            </table>

        </>
    )
}
export default PlantList