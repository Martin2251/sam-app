import React from 'react'
import"./StateAi.scss"
import { Row,Col } from 'react-bootstrap'

const StateOfArtAi = () => {
  return (
    <main className='container'>
        
        <h3>State of Art Ai</h3>
        <Row className='row'>
        <Col md={12} lg={6}>
        <section>
       <p>image goes here </p>
        </section>
        </Col>
        <Col md={12} lg={6}>
       <section>
           <h3>State of the art AI </h3>
           <span>meets sports science </span>
           <p>using latest elements </p>
       </section>
        </Col>

        </Row>
    </main>
  )
}

export default StateOfArtAi
