import React, { useEffect, useState } from "react";
import Group from '../models/Group';
import GroupAPI from "../api/GroupAPI";


export default function GroupListPage() {
    const [busses, setGroups] = useState < Group[] > ([]);

    async function getBusses() {
        setGroups(await GroupAPI.getAllBusses());
    }

    refresh();
}, []);
useEffect(() => {
    async function refresh() {
        await getGroups()
    }
}