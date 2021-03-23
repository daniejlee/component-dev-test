import React, {useState, useEffect} from 'react';
import HeaderMenu from './HeaderMenu'

const Header = (props) => {

  const handleMenuClick = () => {

  }

  // const productList = titles.map(title => {
  //   return
  // })
  const abcLogo = "https://f.v1.n0.cdn.getcloudapp.com/items/0C3l1E2v1k3b1a2C0C26/abc_logo.svg"

  return (
    <div className="">
      <img src={abcLogo} alt="abc logo" />
      <HeaderMenu changePage={props.changePage} changeBackground={props.changeBackground}/>
      {/* <ul style={{listStyleType: 'none'}}>
        {titles.map((element)=>{
          return <li key={element.slug} className="menu">{element.title}</li>
        })}
      </ul> */}

    </div>

  )

}

export default Header;
