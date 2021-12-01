import React from 'react'

function PlantList({ Group }) {

    var plantarray = []
    if (Group != null) {//kan de array van users niet accessen, alleen god weet waarom, dus doe het zo
        for (var i = 0; i < Group.plants.length; i++) {
            plantarray.push(Group.plants[i])
        }
    }
    return (
        <table className="table">
            <thead>
                <tr id="troverride">
                    <th>Water nodig</th>
                    <th>Naam</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {plantarray.map(plant => (
                    <tr>
                        <th>{plant.waterTime}</th>
                        <th>{plant.name}</th>
                        <th>{plant.type}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default PlantList