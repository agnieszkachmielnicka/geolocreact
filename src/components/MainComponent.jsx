import React from 'react'
import ListComponent from '../containters/ListComponent';
import MenuContainer from '../containters/MenuContainer';
import LoginComponent from '../auth/LoginComponent';
import LogoutComponent from '../auth/LogoutComponent';
import RequireAuth from '../auth/RequireAuth';
import GeoLocationComponent from '../components/GeoLocationComponent';
import { Routes, Route } from 'react-router-dom';
import {SERVER_URL} from '../config'

class MainComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            getGeoLocation: '',
            geoData: null,
            search: false,
            geoLocationList: null,
            afterAdd: false,
            isAuth: localStorage.getItem('token'),
        }
    }

    handleLogout = () => {
        this.setState({
            isAuth: false
        })
    }

    componentDidMount() {
        if (this.state.isAuth) {
            const headers = { 'Authorization': 'Token ' + this.state.isAuth }
            fetch(SERVER_URL + '/geo/api/', { headers })
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        geoLocationList: data
                    })
            });
        }
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousState.afterAdd !== this.state.afterAdd) {
            const headers = { 'Authorization': 'Token ' + this.state.isAuth }
            fetch(SERVER_URL + '/geo/api/', { headers })
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        geoLocationList: data,
                        afterAdd: false
                    })
            });
        }
    }

    deleteGeoLoc = (id, geoData) => {
        let newGeoData = geoData.filter( function (loc) {
            return loc.id !== id
        });
        return newGeoData
    }

    handleDeleteButton = (id) => {
        const headers = { 'Authorization': 'Token ' + this.state.isAuth }
        fetch(SERVER_URL + '/geo/api/' + id + '/', {
            method: 'DELETE',
            headers: headers
        })
        .then(res => res.text())
        .then(res => {
            this.setState((prevState) => {
                let tempList = this.deleteGeoLoc(id, prevState.geoLocationList)
                return ({
                    geoLocationList: tempList
                })
            })
        })
    }

    handleSearch = (event) => {
        const value = event.target.value;
        this.setState({
            getGeoLocation: value
        });
    }

    handleAddGeoLoc = (data) => {
        const headers = { 'Authorization': 'Token ' + this.state.isAuth,
        'Content-Type': 'application/json'}
        fetch(SERVER_URL + '/geo/api/', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                afterAdd: true
            })
        })
    }

    handleGetButtonClick = () => {
        const headers = { 'Authorization': 'Token ' + this.state.isAuth }
        fetch(SERVER_URL + '/geo/api/' + this.state.getGeoLocation + '/', { headers })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    geoData: data,
                    search: true
                })
        });
    }


    render() {

        return (
            <React.Fragment>
                <MenuContainer isAuth={this.state.isAuth}/>
                <h1>Geo Location App</h1>
                {!this.state.isAuth && <h2>Please login to see geo locations</h2>}
                <Routes>
                    <Route exact path='/list' 
                    element={<RequireAuth><ListComponent handleDeleteButton={this.handleDeleteButton} geoLocationList={this.state.geoLocationList} handleSearch={this.handleSearch} handleGetButtonClick={this.handleGetButtonClick}/></RequireAuth>}></Route>
                    <Route exact path='/get-geo-loc' element={<RequireAuth><GeoLocationComponent addGeoLocation={this.handleAddGeoLoc} search={this.state.search} getGeoLocation={this.state.getGeoLocation} geoData={this.state.geoData}/></RequireAuth>}></Route>
                    <Route exact path='/login' element={<LoginComponent handleLogin={this.handleLogin} />}></Route>
                    <Route exact path='/logout' element={<LogoutComponent handleLogout={this.handleLogout} />}></Route>
                    {/* <Route exact path='/contact' element={< Contact />}></Route> */}
                </Routes>
            </React.Fragment>)
    }
}

export default MainComponent;