import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { MdClear, MdMenu as MenuIcon } from "react-icons/md";
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
    z-index: 100;
    color: #fff;
    width: 40px;
    height: 40px;
    cursor: pointer;
    
  }
  .close_menu {
    z-index: 100;
    color: #fff;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

const Navigator = styled.nav`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 300px;
  height: 700px;  // TODO: nav 내용 채우면 삭제
  background-color: lightcoral;

  right: ${props => props.showMenu ? '0px' : '-100%'};
  transition: 0.5s;
  /* .show-menu {
    display: block;
  }
  .hide-menu {
    display: none;
  } */
`;


function Header(props) {
  
  // TODO : menus로 내려오는 정보대로 메뉴에 뿌려주기(map 써서)
  const { menus } = props;
  // console.log(menus);

  // navigation : state 상태에 담아서 showMenu가 true면 nav가 보이고,false면 nav가 안보이고
  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => {
    // if(showMenu) {
    //   setShowMenu(false);
    // }else {
    //   setShowMenu(true);
    // }

    setShowMenu(!showMenu);
  }

  return (
    <>
      <HeaderWrapper>
        <Logo />
        {showMenu 
        ? <MdClear className='close_menu' onClick={handleShow}/> 
        : <MenuIcon className='hamburger_menu' onClick={handleShow}/>}
        
        {/* {showMenu && <Navigator />} */}
        <Navigator showMenu={showMenu}>
          <ul>
              <li className="etc_gnb__wrap">
                <a href="/" className="etc_gnb__ldepth">카테고리</a>
                <ul className="etc_gnb__2depth_wrap">
                  <li><a href="#">공부</a></li>
                  <li><a href="#">교회일</a></li>
                  <li><a href="#">기타</a></li>
                  <li><a href="#">구매목록</a></li>
                </ul>
              </li>
              <li className="etc_gnb__wrap">
                <a href="/" className="etc_gnb__ldepth">할 일</a>
                <ul className="etc_gnb__2depth_wrap">
                  <li><a href="#">지난주 할 일</a></li>
                  <li><a href="#">이번주 할 일</a></li>
                  <li><a href="#">다음주 할 일</a></li>
                </ul>
              </li>
            </ul>
            <div className="etc_gnb_bg"></div>
        </Navigator>
      </HeaderWrapper>
    </>
  );
}

export default Header;