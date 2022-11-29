import './App.css';
import { Card, Row, Col, Container } from 'react-bootstrap';
import React from "react";
import MyTof, { MyTof2 } from './Component/Profile/ProfilePhoto';
import CardItem from './Component/Profile/Card';
import { MyName2 } from './Component/Profile/FullName';
import { MyAdress2 } from './Component/Profile/Address';

function App() {
  return (
    <div>
        <>
        <div className='part1'>
        <h1>Work with bootstrap</h1>
        <Container>
        <Row>
        <Col>
        <CardItem />
        </Col>
        <Col>
        <CardItem />
        </Col>
        <Col>
        <CardItem />
        </Col>
        <Col>
        <CardItem />
        </Col>
        </Row>
        </Container>
        </div>
        <hr></hr>
        <div className='part2'>
        <h1>Work without bootstrap</h1>
        <MyTof2 />
        <MyName2 />
        <MyAdress2 />
        </div>
     </>
     </div>
  );
}

export default App;
