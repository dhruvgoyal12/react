import React, { Component } from 'react'
import CartItem from './CartItem'

export default class Cart extends Component {

    constructor(){
        super();
        this.state={
            products: [
            {    
            price: 999,
            title: 'Phone',
            qty: 1,
            img: '',
            id: 1
            },
            {    
                price: 99,
                title: 'watch',
                qty: 1,
                img: '',
                id: 2
                },
            
                {    
                    price: 9,
                    title: 'Pencil',
                    qty: 1,
                    img: '',
                    id: 3
                    },    

            ]
        }
    }


    render() {
        const {products} = this.state;
        return (
            <div className="cart">
               {products.map((product) => {
                   return <CartItem 
                    product={product} 
                    key={product.id}
                    
                    />
               })}
            </div>
        );
    }
}
