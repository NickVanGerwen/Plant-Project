import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";

import { Variables } from './APIURLs';


function FamilyList() {

    const [families, setfamilies] = useState([])

    async function getUserFamilies() {
        try {
            const apirequest = await axios.get(Variables.GetGroupsByUserUrl);
            return apirequest.data;
        } catch (error) {
            console.error(error);
        }
    }

    async function GetFamilies() {
        setfamilies(await getUserFamilies());
        return;
    }

    useEffect(() => {
        GetFamilies()
    })

    return (
        <div>
            <h1>Families:</h1>
<<<<<<< Updated upstream

            <table class="table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>password</th>
                        <th>id</th>
                    </tr>
                </thead>
                <tbody>
                    {families.map(fam => (
=======
            {families != null ?
                <table className="table">
                    <thead>
>>>>>>> Stashed changes
                        <tr>
                            <th>name</th>
                            <th>password</th>
                            <th>id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {families.map(fam => (
                            <tr>
                                <th>{fam.name}</th>
                                <th>{fam.password}</th>
                                <th>{fam.id}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                : <a>geen families gevonden.</a>
            }

        </div>
    )
}

export default FamilyList