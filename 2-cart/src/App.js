import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase';


class App extends React.Component {
  constructor(){
    super();
    this.state={
        products: [],
        loading: true
    }
    
    this.db = firebase.firestore();
}

componentDidMount(){
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //       console.log(snapshot);
  //       snapshot.docs.map((doc) => {
  //         console.log(doc.data());
  //       });

  //       const products = snapshot.docs.map((doc) =>{
  //         const data = doc.data();
  //         data['id'] = doc.id;
  //         return data;
  //       })
  //       this.setState({
  //         products: products,
  //         loading: false
  //       })
  //   })



    this.db
    .collection('products')
    //.where('price', '==', 99).orderBy('price', 'desc')
    .onSnapshot((snapshot) => {
      console.log(snapshot);
      snapshot.docs.map((doc) => {
        console.log(doc.data());
      });

      const products = snapshot.docs.map((doc) =>{
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      })
      this.setState({
        products: products,
        loading: false
      })
  })
}

handleIncreaseQuantity = (product) => {
    const {products} = this.state;

    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({
    //     products: products
    // })

    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty + 1
    }).then(() =>{
      console.log('updated successfully');
    })
    .catch((error)=>{
      console.log('Error: ', error);
    })

}

handleDecreaseQuantity = (product) =>{
    const {products} = this.state;

    const index = products.indexOf(product);
    if(products[index].qty > 0){
    // products[index].qty -= 1;
    // this.setState({
    //     products: products,
       
    // })


    const docRef = this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty: products[index].qty - 1
    }).then(() =>{
      console.log('updated successfully');
          // if deleted product quantity is 0
    if (products[index].qty == 1 ) this.handleDeleteProduct(products[index].id);
    })
    .catch((error)=>{
      console.log('Error: ', error);
    })

    }
}

handleDeleteProduct = (id) =>{
    const {products} = this.state;
  
    // const items = products.filter((item) => item.id !== id); // [{}]
    // this.setState({
    //     products: items
    // })

    const docRef = this.db.collection('products').doc(id);

    docRef.delete()
    .then(() =>{
      console.log('deleted successfully');
    })
    .catch((error)=>{
      console.log('Error: ', error);
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

addProduct = () =>{
  this.db
    .collection('products')
    .add({
      img: '',
      price: 900,
      qty: 4,
      title: 'washing machine'
    })
    .then((docRef) =>{
      console.log('Product has been added',docRef)
    })
    .catch((error) =>{
      console.log('Error: ', error)
    })
}



render(){
  const {products, loading} = this.state;
  console.log(loading);
  return (
    <div className="App">
        <Navbar count={this.getCartCount()}/>
        <button onClick={this.addProduct} style={{padding: 20}}>Add Product</button>
        <Cart
        products={products} 
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}

        ></Cart>
        {loading && <h1>Loading products ...</h1>}
        <div style={{padding: 10, fontSize: 20}}>Total: {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
