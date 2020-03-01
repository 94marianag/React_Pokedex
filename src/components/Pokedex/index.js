import React, {Component} from 'react';
import {Row, Col, Container, Button} from "reactstrap"

class Pokedex extends Component {

    render(){        
        const {pokemons} = this.props
        return <Container>
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
                                <li>
                                    <Button  
                                    color="dark"
                                    onClick = {() => {
                                        
                                        console.log("Viendo perfil..."+p.name)
                                        
                                     }}
                                    
                                    >View</Button>
                                </li>
                                <br/>
                                <li>
                                    <Button 
                                    color="danger"
                                    onClick = {() => {
                                        var i = pokemons.indexOf( p );
                                        pokemons.splice( i, 1 );
                                        console.log(pokemons)
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