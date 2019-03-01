import React, { Component } from 'react';
import './App.css'   ;
import List from './list'
import { Container, Row, Col } from 'react-grid-system';

class  Mapp extends Component {
    
    
    render() { 
        return (     

            <div className=" back">
            <Container>
                <Row>
                    <Col sm={6}>
    
                                     <h1>
                                      The world's
                                      <br/>biggest healthcare platform
                                    </h1>



                                    <p>
                                            We work from 6 offices all over the world, bringing Docplanner Group <br/>to life in almost 20 countries.
                                          </p>    
                                          </Col>
                                          <Col sm={6}>
                                          <List/>
                                          </Col>
                                          </Row>
                                          </Container>
            </div>



           
           );
    }
    
}
 
export default Mapp ;