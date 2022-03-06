import React from "react";
import { Button, Segment } from 'semantic-ui-react'
import AddComponent from "./AddComponent";
import DeleteComponent from "./DeleteComponent";
import GoBackComponent from "./GoBackComponent";

class GeoLocationComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const {geoData, getGeoLocation, geoId, handleDeleteButton,
             search, addGeoLocation} = this.props


        return (
            <React.Fragment>
                {geoData ?
                <Segment>
                    <p>Geo Location for: {geoId}</p>
                    <p>Longitude: {geoData.geo_location.longitude}</p>
                    <p>Latitude: {geoData.geo_location.latitude}</p>
                    {search ? <AddComponent geoData={geoData} addGeoLocation={addGeoLocation}/> :<DeleteComponent handleDeleteButton={handleDeleteButton} id={geoId}/>}
                    {search && <GoBackComponent/>}
                </Segment>
                 :
                 <div></div>} 
                 
            </React.Fragment>
        )
    }
}

export default GeoLocationComponent;