import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites'; 


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    } 

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
      }

    render() {
        return (
            <div>
                <Navbar dark color="primary">    {/* The tell sign of this Component(Navbar) is its' first letter "If it's capitalized, then it's a React" or "If it's a lowercase, then it's JSX" */}
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
            </div>
        );
    };
}
export default Main;
