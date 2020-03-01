import React, {Component} from 'react';
import{
    Row, Col, Button
}from "reactstrap"

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokemon: null
        }
    };

    render(){
        const {pokemons} = this.props
        const {name, id, sprites} = this.props.pokemons
        return <Row>
            <Col md={8}>
            <img
            alt={name}
            src={sprites.front_default}
            />
            </Col>
            <Col md={4}>

            </Col>
        </Row>
    }
};

export default Profile;