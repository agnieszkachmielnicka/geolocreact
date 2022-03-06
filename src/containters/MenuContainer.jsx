import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default class MenuContainer extends Component {

    constructor(props) {
        super(props)
    }


    render() {

        const { isAuth } = this.props

        return (
            <Menu>
                {isAuth ?  <Link to="/logout">
                    <Menu.Item
                        name='logout'
                    >
                    Logout
                    </Menu.Item>
                </Link> :
                <Link to="/login">
                    <Menu.Item
                        name='login'
                    >
                    Login
                    </Menu.Item>
                </Link>     
                }
            </Menu>
        )
    }
}