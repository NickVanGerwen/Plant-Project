import React from 'react'
import { useBootstrapPrefix } from 'react-bootstrap/esm/ThemeProvider'

function UserList({ Group }) {

    var plantarray = []
    if (Group != null) {//kan de array van users niet accessen, alleen god weet waarom, dus doe het zo
        for (var i = 0; i < Group.users.length; i++) {
            plantarray.push(Group.users[i])
        }
    }

    return (
        <table className="table">
            <thead>
                <tr id="troverride">
                    <th>Water nodig over</th>
                    <th>Naam</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {plantarray.map(plant => (
                    <tr>
                        <th>{plant.name}</th>
                        <th>{plant.name}</th>
                        <th>{plant.name}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default UserList