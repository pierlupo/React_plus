import React, { Component } from 'react' 
import Produit from "./Produit";
import Panier from './Paniers';




export default class Magasin extends Component{

    constructor(props) {
        super(props)
        this.state = {
            produits : [
                {
                    id: 1,
                    titre: "Pommes",
                    prix: 2.99,
                    description : "Golden",
        
                },{
                    id: 2,
                    titre: "Bananes",
                    prix: 1.99,
                    description : "Antilles",
                },{
                    id: 3,
                    titre: "Fraises",
                    prix: 3.50,
                    description : "Phalempin"
                    },
                {
                    id: 4,
                    titre: "Clémentines",
                    prix: 3.99,
                    description : "Corse"
                    },
                {
                    id: 5,
                    titre: "Poires",
                    prix: 2.99,
                    description : "Williams"
                    }
            ],
            panier : []
        }
    }

    addProdToPanierByid = (id) => {
        console.log("j'ajoute le produit: "+id);
       
        // const ListetmpProduits = [...this.state.produits]
        // const tmpPanier = [...this.state.panier]
        // ListetmpProduits.forEach(p => {
        // if(p.id == id){
        //    tmpPanier.push(p)
        // }
        // })
        // console.log(tmpPanier);
        // this.setState({panier : [...tmpPanier]})
        //la même chose qu'au dessus avec une seule copie: 
        const tmpState = {...this.state}
        tmpState.produits.forEach(p => {
            if(p.id == id){
               //tmpState.panier.push(p)
               //tmpState.panier.forEach(pro => {
                if(tmpState.panier.find(prod => prod.id == p.id ) == null){
                    tmpState.panier.push(p)
                    }else{
                        //gerer la quantité ici plus tard
                        alert("vous avez déjà ajouté ce produit")
                    }
               // })
            }
        })
        console.log(tmpState.panier);
        this.setState({...tmpState})
        
}

    render() {
        
        
        
        return (
            <>
            <div className="conteneur">
            <div className="conteneur_mag">
            <h1>Bienvenue dans le magasin:</h1>
                <h3>Produits:</h3>
                        
                        {/* <p>titre</p>
                        <p>prix</p>
                        <p>description</p> */}
                    
                    {this.state.produits.map((produit) => (<Produit produit={produit} key={produit.id} addProdToPanierByid={this.addProdToPanierByid}></Produit>))}
                    {/* <button onClick={clicBtn}>Ajout Produit</button> */}
            </div>    
<hr></hr>
            <div className="conteneur_panier">
            <h1>Votre panier:</h1>
               <h3>Panier:</h3>
                        
                        {/* <p>titre</p>
                        <p>prix</p>
                        <p>description</p> */}
                
                        {this.state.panier.map((produit) => (<Panier panier={produit} key={produit.id} ></Panier>))}
                        {/* {this.state.panier.map((produit,i) => (<Panier panier={produit} key={i}></Panier>))} */}
                        {/* <Produit></Produit> */}
            </div>
            </div>
            </>
        )
    }
}
