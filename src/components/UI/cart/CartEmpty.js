import React from 'react'
// import cart from '../../../store/cart'

const CartEmpty = () => {
  return (
    <div className={StyleSheet.cart_empty}>
      <h2>Your cart is empty</h2>
      <p>Add some item to the cart</p>
      <button>Continue shopping</button>
    </div>
  )
}

export default CartEmpty