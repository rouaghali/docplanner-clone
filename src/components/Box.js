import React from 'react';
import { MDBBtn,MDBContainer, MDBCard, MDBCardBody,MDBRow, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// import { Container, Row, Col } from 'react-grid-system';

const Box = () => {
  return (


    <MDBContainer>
        <MDBRow>
        
     
      
    <MDBCol lg='6' sm='12'>
      <MDBCard style={{ width: "22rem" }}>
      <div className="card1"  >
        <MDBCardBody>
          <MDBCardTitle>For patients</MDBCardTitle>
          <MDBCardText> 
         <b> Find a doctor, book a visit and solve any health-related doubt </b>
         
          </MDBCardText>
          <div class="style-select">
							<select data-id="domain-switcher">
								<option>Choose country</option>
																	<option value="http://www.doctoraliar.com">Argentina</option>
																	<option value="http://www.doctoralia.com.au">Australia</option>
																	<option value="http://www.doctoralia.com.br">Brazil</option>
																	<option value="http://www.doctoralia.cl">Chile</option>
																	<option value="http://www.doctoralia.co">Colombia</option>
																	<option value="http://www.znamylekar.cz">Czech</option>
																	<option value="http://www.doctoralia-fr.com">France</option>
																	<option value="http://www.miodottore.it">Italy</option>
																	<option value="http://www.doctoralia.com.mx">Mexico</option>
																	<option value="http://www.doctoralia.pe">Peru</option>
																	<option value="http://www.znanylekarz.pl">Poland</option>
																	<option value="http://www.doctoralia.com.pt">Portugal</option>
																	<option value="http://www.doctoralia.es">Spain</option>
																	<option value="http://www.doktortakvimi.com">Turkey</option>
																	<option value="http://www.doctoralia.co.uk">UK</option>
															</select>
						</div>
          
        </MDBCardBody>
        <img  className="photo" src="https://www.docplanner.com/img/screen-marketplace@2x.png"></img>
        </div>
      </MDBCard>
      
    </MDBCol>
        
  
<MDBCol lg='6' sm='12'>
<MDBCard style={{ width: "22rem" }}>
<div  className="card2">
  <MDBCardBody>
  
    <MDBCardTitle>For doctors</MDBCardTitle>
    <MDBCardText> 
   <b> Save time managing visits and cut no-shows by half </b>
   
    </MDBCardText>
    <img className="photo" src="https://www.docplanner.com/img/screen-saas@2x.png"></img>
                  
  </MDBCardBody>
  </div>
</MDBCard>
</MDBCol>



</MDBRow>
</MDBContainer>
  );
}

export default Box;