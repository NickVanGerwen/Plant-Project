import React, { useState, useEffect } from "react";
import axios from "axios";
import { Variables } from '../components/APIURLs';
import UserList from '../components/UserList';
import PlantList from "../components/PlantList"


function GroupInfoPage(props) {
    const [family, setFamily] = useState([]);
    const [familyLoaded, setFamilyLoaded] = useState(false);


    async function GetFamilyById(id) {
        try {
            const apirequest = await axios.get(Variables.GetGroupByGroupIdUrl + props.location.state.id);
            setFamilyLoaded(true);
            return apirequest.data;
        } catch (error) {
            console.error(error);
        }
    }

    async function SetFamily(id) {
        setFamily(await GetFamilyById(id));

        return;
    }

    useEffect(() => {
        if (!familyLoaded && props.location.state.id !== null) {
            SetFamily(props.location.state.id);
        }
    })

    return (
        <div className="page" >
            {familyLoaded ?
                <>
                    <h1 style={{ marginLeft: '1%', marginTop: '1%' }}>name</h1>
                    <hr />
                    <h2 style={{ marginLeft: '1%', marginTop: '1%' }}>Planten</h2>
                    <PlantList Group={family[0]} />
                    <hr />
                    <h2 style={{ marginLeft: '1%', marginTop: '1%' }}>gebruikers</h2>
                    <UserList Group={family[0]} />
                </>
                : null}
        </div>
    )
}

export default GroupInfoPage