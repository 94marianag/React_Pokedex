import React, {Component} from 'react';
import {Row, Col, Container, Button, Alert} from "reactstrap"

class Pokedex extends Component {
    render(){        
        const {pokemons} = this.props
        return <Container>
            <h3>Mi Pokedex</h3>
            {
                pokemons.map(p => (
                    <Row>
                        <Col md="6">
                            <img alt={p.name} src={p.sprites.front_default} />
                        </Col>
                        <Col md="6">
                            <ul>
                                <li>Id: {p.id}</li>
                                <li>Name: {p.name}</li>
                                <br/>
                                <li>
                                    <Button 
                                    color="danger"
                                    onClick = {() => {
                                        var i = pokemons.indexOf( p );
                                        pokemons.splice( i, 1 );
                                        console.log(pokemons)
                                        console.log("Has borrado " + p.name)
                                        //return window.location.reload()
                                    }}
                                    onChange = {() => {   
                                    }}
                                    >Delete</Button>
                                </li>
                            </ul>
                        </Col>                      
                    </Row>                    
                ))
            }            
        </Container>
    }
};

export default Pokedex;