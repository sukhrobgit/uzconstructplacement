import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function StaffCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.staffName}</Card.Title>
        <Card.Text>
            {props.role}
        </Card.Text>
        <Card.Text>
          {props.body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StaffCard;
