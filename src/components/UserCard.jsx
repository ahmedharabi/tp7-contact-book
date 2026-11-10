import { Card } from 'react-bootstrap'

function UserCard(props) {
  return (
    <Card className="user-card h-100">
      <Card.Body>
        <div className="avatar">{props.name.charAt(0)}</div>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          ✉️ {props.email}
          <br />
          📞 {props.phone}
          <br />
          📍 {props.city}
          <br />
          🏢 {props.company}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default UserCard
