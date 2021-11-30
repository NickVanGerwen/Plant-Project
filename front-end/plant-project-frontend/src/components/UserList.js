import React from 'react'

function UserList({ Group }) {

    var userarray = []
    if (Group != null) {//kan de array van users niet accessen, alleen god weet waarom, dus doe het zo
        for (var i = 0; i < Group.users.length; i++) {
            userarray.push(Group.users[i])
        }
    }

    return (
        <table className="table">
            <thead>
                <tr id="troverride">
                    <th>Naam</th>
                </tr>
            </thead>
            <tbody>
                {userarray.map(user => (
                    <tr>
                        <th>{user.name}</th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default UserList