//import React, { Component } from 'react' 
// export default class Panier extends Component {  

//     constructor(props) {
//         super(props)
//         this.state = {}
//     }


//     render() {
        
//         const {id,titre,prix,description} = this.props.produit
//         console.log(this.props.produit)
        
//         return (
//             <>

//                         <tr>
                            
//                             <td>{titre}</td>
//                             <td>{prix}</td>
//                             <td>{description}</td>
//                         </tr>
                
//             </>
//         )
//     }
// }

export default function Panier(props){

    const {titre,prix,description} = props.panier
    return(
        <>

        <div className="prod_panier">
        <h3>Titre:{titre}</h3>
        <p>Prix:{prix}</p>
        <p>Description:{description}</p>
        </div>
        </>
    )
}