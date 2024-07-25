import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const MultiDisciplinary = () => {
  return (
<Container>
    <Row>
    <Col md={12} lg={6}>
    <div className='multidisciplinary'>
        <h3>MultiDiscpinary</h3>
        <small>team</small>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, ullam!</p>
        <Button>Meet the Team</Button>
    </div>
    </Col>
    </Row>
</Container>
  )
}

export default MultiDisciplinary
