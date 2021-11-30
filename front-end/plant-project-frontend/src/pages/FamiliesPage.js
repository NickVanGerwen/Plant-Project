import FamilyList from "../components/FamilyList";
import React from "react";

function FamiliesPage() {
    return (
        <div className="page">
            <h1 style={{ marginLeft: '1%', marginTop: '1%' }}>Families</h1>
            <hr />
            <FamilyList />
        </div>
    )
}
export default FamiliesPage