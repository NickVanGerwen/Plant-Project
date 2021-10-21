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
            <h1>{families.length}</h1>
        </div>
    )
}

export default FamilyList
// export default function GroupListPage() {
//     const [busses, setGroups] = useState < Group[] > ([]);

//     async function getBusses() {
//         setGroups(await GroupAPI.getAllBusses());
//     }

//     refresh();
// }, []);
// useEffect(() => {
//     async function refresh() {
//         await getGroups()
//     }
// }