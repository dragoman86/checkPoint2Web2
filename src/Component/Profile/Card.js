import Button from 'react-bootstrap/Button';
import { Card, Row, Container } from 'react-bootstrap';
import MyAdress from './Address';
import MyName from './FullName';
import MyTof from './ProfilePhoto';

function CardItem() {
  return (
    
      
    <Card style={{ width: '14rem', display: 'block', position: 'initial'}}>
        <>
        <MyTof></MyTof>
        </>
      <Card.Body>
        <Card.Title>
            <>
                <MyName></MyName>
            </>
        </Card.Title>
        <Card.Text>
          <>
            <MyAdress></MyAdress>
          </>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardItem;