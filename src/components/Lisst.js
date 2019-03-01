import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import Itemm from "./itemm"

const tab=[
    {image:"https://www.docplanner.com/images/warsaw.png",title:"Leader in 10 countries",paragraphe:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"},
    {image:"https://www.docplanner.com/img/visits.png",title:"1 million appointments",paragraphe:"booked last month"},
    {image:"https://www.docplanner.com/img/patients.png",title:"30 million unique patients",paragraphe:"visit us every month"},
    {image:"https://www.docplanner.com/img/doctors.png",title:"2 million active doctors",paragraphe:"trust in our solutions"}
]
class Lisst extends Component {
    
    render() { 
        return ( 
        <div className="lisst">
   <Row>
            {
              tab.map((el,index)=><Col lg={6}><Item item={el} key={index}/></Col>)  
            }
            </Row>
        </div> );
    }
}
 
export default Lisst;