import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.action';

import './cart-icon.styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden }) => (
    <div onClick={toggleCartHidden} className='cart-icon'>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'> 0 </span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);