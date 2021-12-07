import React, { useState, useEffect } from "react";
import axios from "axios";
import { Variables } from '../components/APIURLs';
import UserList from '../components/UserList';
import PlantList from "../components/PlantList"

function GroupInfoPage(props) {
    const [family, setFamily] = useState([]);
    const [familyLoaded, setFamilyLoaded] = useState(false);


    console.log(props.location.state.id + ", " + props.location.state.name)
    async function GetFamilyById() {
        try {
            const apirequest = await axios.get(Variables.GetGroupByGroupIdUrl + props.location.state.id);
            setFamilyLoaded(true);
            return apirequest.data;
        } catch (error) {
            console.error(error);
        }
    }

    async function SetFamily() {
        setFamily(await GetFamilyById());
        return;
    }

    useEffect(() => {
        if (!familyLoaded && props.location.state.id !== null) {
            SetFamily();
        }
    })

    return (
        <div className="page" >
            {familyLoaded ?
                <>
                    <h1 style={{ marginLeft: '1%', marginTop: '1%' }}>{props.location.state.name}</h1>
                    <hr />
                    <h2 style={{ marginLeft: '1%', marginTop: '1%' }}>Planten</h2>
                    <PlantList Group={family[0]} />
                    <h2 style={{ marginLeft: '1%', marginTop: '1%' }}>gebruikers</h2>
                    <UserList Group={family[0]} />
                </>
                : null
            }
        </div>
    )
}

export default GroupInfoPage