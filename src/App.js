import { useState } from 'react'

import Card from './components/Card'
import Container from './components/Container'

import UseForm from './components/UseForm'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const submit = usuario => {
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }
  console.log(usuarios)
  return (
    <div style={{ marginTop: '10%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UseForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(X =>
              <li key={X.Email}> {`${X.name} ${X.lastname}: ${X.Email}`}</li>)}
          </ul>
        </Card>
      </Container>
    </div>

  )
}


export default App
