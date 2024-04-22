import React from 'react';
import { Row } from 'react-bootstrap';
import './Coaches.scss';

const Coaches = () => {
  // Array of coach objects
  const coaches = [
    {
      id: 1,
      name: 'Dr man',
      position: 'Founder & CEO',
      imgSrc: 'https://kitt.lewagon.com/placeholder/users/cveneziani'
    },
    {
        id: 1,
        name: 'Dr man',
        position: 'Founder & CEO',
        imgSrc: 'https://kitt.lewagon.com/placeholder/users/cveneziani'
      },
      {
        id: 1,
        name: 'Dr man',
        position: 'Founder & CEO',
        imgSrc: 'https://kitt.lewagon.com/placeholder/users/cveneziani'
      },
      {
        id: 1,
        name: 'Dr man',
        position: 'Founder & CEO',
        imgSrc: 'https://kitt.lewagon.com/placeholder/users/cveneziani'
      },
      {
        id: 1,
        name: 'Dr man',
        position: 'Founder & CEO',
        imgSrc: 'https://kitt.lewagon.com/placeholder/users/cveneziani'
      },
      {
        id: 1,
        name: 'Dr man',
        position: 'Founder & CEO',
        imgSrc: 'https://kitt.lewagon.com/placeholder/users/cveneziani'
      },
    // Add more coaches as needed
  ];

  return (
    <main className='team-member-collection'>
      <Row>
        <div className="col-8">
          {/* Map over coaches array */}
          {coaches.map(coach => (
            <div key={coach.id} className='team-member-box'>
              <div className='team-member-outbox'>
                <div className="team-member-img">
                  <img alt="avatar" src={coach.imgSrc} />
                </div>
                <h3>{coach.name}</h3>
                <p>{coach.position}</p>
              </div>
            </div>
          ))}
        </div>
      </Row>
    </main>
  );
}

export default Coaches;
