import React, { Component } from 'react'

class CartItem extends Component {

    constructor(){
        super();
        this.state={
            price: 999,
            title: 'M Phone',
            qty: 1,
            img: ''
        }
    }


    render() {
        // Object destructuring
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}></img>
                </div>
                <div className="right-block">
                <div style={{fontSize:25}}>{this.state.title}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    <img alt="increase" className="action-icons" src="https://www.flaticon.com/premium-icon/icons/svg/3303/3303893.svg"/>
                    <img alt="decrease" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1618224573~hmac=1278343fdd553b92019ef78f4b814b1f"/>
                    <img alt="delete" className="action-icons" src="https://www.flaticon.com/svg/vstatic/svg/1345/1345823.svg?token=exp=1618224673~hmac=d264c11092b363f49300b401ba462ffa"/>
                </div>
                
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;