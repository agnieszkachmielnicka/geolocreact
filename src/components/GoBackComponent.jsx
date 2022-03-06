import React from "react";
import { Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';


export default function GoBackComponent(props) {

    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => {navigate('/list');}}>Go back to list</Button>
        </div>
    )
}