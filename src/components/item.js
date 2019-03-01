import React from 'react';
// class Item extends Component {
//     constructor(props) {
//         super(props);
//        
//     }
//     render() { 
//      const {item}=this.props
//         return ( <div className="item">
//          <h1>{item.name}</h1>
//          <h2>{item.lastname}</h2>
//          <h3>{item.age} ans</h3>
//         </div> );
//     }
// }
 
// export default Item;

const Item=({item})=>{
return (
 <div className="item">
     <img src={item.image}/>
     <h2>{item.title}</h2>
     <p>{item.paragraphe}</p>
 </div>
)
}
export default Item;