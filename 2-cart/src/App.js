import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";



class App extends React.Component {
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

getCartCount(){
  const {products} = this.state;
  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })
  return count;
}

getCartTotal = () =>{
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product) =>{
    cartTotal += product.qty*product.price;
  })
  return cartTotal;
}



render(){
  const {products} = this.state;
  return (
    <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
        products={products} 
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}

        ></Cart>
        <div style={{padding: 10, fontSize: 20}}>Total: {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
