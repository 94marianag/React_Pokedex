import React, {Component} from 'react';
import{
    Row, Col, Container
}from "reactstrap"

class Profile extends Component {

    render(){
        const {pokemons} = this.props;
        return <Container>
            {pokemons.map(p => (
              <Row>
                <Col md="2">
                  <ul>
                    <li><h4>Name: {p.name}</h4></li>
                  </ul>
                </Col>

                <Col md="10"></Col>
                <img alt={""} src={p.sprites.front_default} />
                <img alt={""} src={p.sprites.back_default} />
                <img alt={""} src={p.sprites.front_shiny} />
                <img alt={""} src={p.sprites.back_shiny} />
                <br/>
                <label>Male</label>
                <img alt={"Female"} src={p.sprites.front_female} />
                <img alt={"Female"} src={p.sprites.back_female} />
                <img alt={"Female"} src={p.sprites.front_shiny_female} />
                <img alt={"Female"} src={p.sprites.back_shiny_female} />
                <label>Female</label>

              </Row>
            ))}
          </Container>
      }
};

export default Profile;