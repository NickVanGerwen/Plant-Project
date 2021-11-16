import React, { useEffect, useState } from "react";
import Group from '../models/Group';
import GroupAPI from "../api/GroupAPI";
import axios from "axios";

import { Variables } from './APIURLs';


function FamilyList() {

    const [families, setfamilies] = useState([])

    async function getUserFamilies() {
        try {
            const apirequest = await axios.get(Variables.GetGroupsByUserUrl);

            console.log(apirequest.data);
            return apirequest.data;
        } catch (error) {
            console.error(error);
        }
    }

    async function GetFamilies() {
        setfamilies(await getUserFamilies());
        console.log("a");
        return;
    }

    useEffect(() => {
        GetFamilies()
    })

    return (
        <div>
            <h1>Families:</h1>

            <table>
                <thead>
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

        </div>
    )
}

export default FamilyList