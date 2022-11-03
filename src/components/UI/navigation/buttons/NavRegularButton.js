import React from 'react'

const NavRegularButton = (props) => {
  return (

      <button className={props.className} onClick={props.onClick}>{props.children}</button>

  );
}

export default NavRegularButton