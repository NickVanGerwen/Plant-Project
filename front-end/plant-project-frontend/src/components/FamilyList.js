import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import axios from "axios";
import { Variables } from './APIURLs';
import { Link } from 'react-router-dom';

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

    function MoreDetails(id) {
        document.getElementById("fam" + id).click();
        console.log("aaa" + id);
    }

    return (
        <div>
            {families != null ?
                <div>
                    <table className="table">
                        <thead>
                            <tr id="troverride">
                                <th>name</th>
                                <th>aantal gebruikers</th>
                                <th>password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {families.map(fam => (
                                <tr onClick={() => MoreDetails(fam.id)}>
                                    <th>{fam.name}</th>
                                    <th>{fam.userCount}</th>
                                    <th>{fam.password}</th>
                                    <Link hidden id={"fam" + fam.id} to={{ pathname: "/GroupInfo", state: { id: fam.id } }} />
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                : <div>geen families gevonden.</div>
            }
        </div>
    )
}

export default FamilyList