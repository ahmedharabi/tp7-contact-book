import { Navbar, Container } from 'react-bootstrap'
import UserList from './components/UserList'

function App() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>📒 ContactBook</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="my-4">
        <UserList />
      </Container>
    </div>
  )
}

export default App
