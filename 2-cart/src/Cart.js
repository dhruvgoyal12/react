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

    handleIncreaseQuantity = (product) => {
        const {products} = this.state;

        const index = products.indexOf(product);
        products[index].qty += 1;

        this.setState({
            products: products
        })
    }

    handleDecreaseQuantity = (product) =>{
        const {products} = this.state;

        const index = products.indexOf(product);
        if(products[index].qty > 0){
        products[index].qty -= 1;
        this.setState({
            products: products
        })
        }
    }

    handleDeleteProduct = (id) =>{
        const {products} = this.state;

        const items = products.filter((item) => item.id !== id); // [{}]
        this.setState({
            products: items
        })
    }


    render() {
        const {products} = this.state;
        return (
            <div className="cart">
               {products.map((product) => {
                   return <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    onDeleteProduct = {this.handleDeleteProduct}
                    />
               })}
            </div>
        );
    }
}
