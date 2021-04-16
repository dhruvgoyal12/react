import React from 'react';

const Navbar = (props) => {
    
        return (
            <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://www.flaticon.com/svg/vstatic/svg/1170/1170576.svg?token=exp=1618384813~hmac=f0f518a6e2c0dd37d901e0cab312e400" alt="cart-icon"/>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
                
            </div>
        )
    
}
export default Navbar;

const styles = {
    cartIcon : {
        height: 32,
        marginRight: 20
    },
    nav : {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    cartIconContainer : {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '2px 8px',
        position: 'absolute',
        right: 8,
        top: -9
    }

}