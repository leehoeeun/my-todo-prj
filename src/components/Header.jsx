import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { MdMenu as MenuIcon } from "react-icons/md";
import Logo from './Logo';


const HeaderWrapper = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  box-sizing: border-box;
  padding: 20px 40px;
  background-color: #000;

  .hamburger_menu {
    color: #fff;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

const Navigator = styled.nav`
  position: absolute;
  top: 0px;
  width: 300px;
  height: 300px;
  background-color: lightcoral;
  .show-menu {
    right: 0px;
  }
  .hide-menu {
    right: -100%;
  }
`;


function Header(props) {

  // navigation : state 상태에 담아서 showMenu가 true면 nav가 보이고,false면 nav가 안보이고
  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => {
    if(showMenu) {
      setShowMenu(false);
    }else {
      setShowMenu(true);
    }
  }

  return (
    <>
      <HeaderWrapper>
        <Logo />
        <MenuIcon 
          className='hamburger_menu'
          onClick={handleShow}
        />
        <Navigator className={showMenu ? "show-menu" : "hide-menu"} />
      </HeaderWrapper>
    </>
  );
}

export default Header;