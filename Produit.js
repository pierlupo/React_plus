import React, { Component } from 'react' 
// export default class Produit extends Component {  

//     constructor(props) {
//         super(props)
//         this.state = {}
//     }

//     addProdOnclic = (e) => {
//         this.props.addProdToPanierByid(e.target.dataset.idselected)
//         console.log(this.props.addProdToPanierByid(e.target.dataset.idselected))
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
//                             <td><button onClick={this.addProdOnclic} data-idselected={id}>Ajout Produit</button></td>
//                         </tr>
                
//             </>
//         )
//     }
// }

export default function Produit(props){
const clicBtn = () => {
    // console.log("clic btn");
    // console.log(props.produit.id);
    props.addProdToPanierByid(props.produit.id)
}
    const {titre,prix,description} = props.produit
    return(
        <>
        <div className="prod_panier">
        <h3>Titre:{titre}</h3>
        <p>Prix:{prix}</p>
        <p>Description:{description}</p>
        </div>
        <button className="btn" onClick={clicBtn}>Ajouter ce Produit</button>
        </>
    )
}