import { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Form, Alert, Spinner } from 'react-bootstrap'
import UserCard from './UserCard'

function UserList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />
        <p>Chargement des contacts…</p>
      </div>
    )
  }

  if (error) {
    return <Alert variant="danger">Erreur : les contacts n'ont pas pu être récupérés.</Alert>
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <h3>Mes contacts</h3>
        <span className="total">Total : {users.length} contacts</span>
      </div>

      <Form.Control
        type="text"
        placeholder="Rechercher un contact par nom..."
        className="mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Row>
        {filteredUsers.map((user) => (
          <Col key={user.id} sm={6} lg={4} className="mb-4">
            <UserCard
              name={user.name}
              email={user.email}
              phone={user.phone}
              city={user.address.city}
              company={user.company.name}
            />
          </Col>
        ))}
      </Row>

      {filteredUsers.length === 0 && <p>Aucun contact trouvé.</p>}
    </div>
  )
}

export default UserList
