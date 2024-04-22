import React from 'react'
import { Row } from 'react-bootstrap'

const Coaches = () => {
  return (
    <main className='team-member-collection'>
        <Row>
        <div className="col-12">
            <div className='team-member-box'>
                <div className='team-member-outbox'>
                    <div className="team-member-img">
                        <img  alt="avatar" src="https://kitt.lewagon.com/placeholder/users/cveneziani" />
                    </div>
                    <h3>Dr man</h3>
                    <p>Founder & CEO</p>
                </div>

            </div>
            </div>
        </Row>

    </main>
  )
}

export default Coaches
