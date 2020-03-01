import React, {Component} from 'react';
import {Row, Col, Container} from "reactstrap"

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
                            </ul>
                        </Col>
                    </Row>
                ))
            }
        </Container>
    }
}

export default Pokedex