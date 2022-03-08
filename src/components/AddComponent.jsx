import React from "react";
import { Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';


function AddComponent(props) {

    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => {props.addGeoLocation(props.geoData); navigate('/list');}} positive>Add Location</Button>
        </div>
    )
}

export default AddComponent;