import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardHeader } from 'mdb-react-ui-kit';

const cardColor = ({ color, title, text }) => {
  return (
    <MDBCard background={color} className='text-white mb-3' style={{ maxWidth: '70rem'}}>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          {text}
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}


export default cardColor;