import React from "react";
import { Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class SearchContainer extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {handleSearch, handleGetButtonClick} = this.props

        return (
            <React.Fragment>
                <p>Get geo location by ip address or url: </p>
                <Input onChange={handleSearch} placeholder='Search...' />
                <Link to="/get-geo-loc">
                    <Button onClick={handleGetButtonClick} type="button">
                        Get
                    </Button>
                </Link>
            </React.Fragment>
        )
    }
}

export default SearchContainer;