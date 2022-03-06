import React from "react";
import { Button } from 'semantic-ui-react'


class DeleteComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { id, handleDeleteButton } = this.props

        return(
            <Button onClick={() => handleDeleteButton(id)} negative>Delete</Button>
        )
    }
}

export default DeleteComponent;