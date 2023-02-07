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
  
  const { menus } = props;
  console.log(menus);

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
                <a href="/" className="etc_gnb__ldepth">회사소개</a>
                <ul className="etc_gnb__2depth_wrap">
                  <li><a href="#">인사말</a></li>
                  <li><a href="#">후원사/협력사</a></li>
                  <li><a href="#">연혁</a></li>
                </ul>
              </li>
              <li className="etc_gnb__wrap">
                <a href="/" className="etc_gnb__ldepth">행사소개</a>
                <ul className="etc_gnb__2depth_wrap">
                  <li><a href="#">전시회</a></li>
                  <li><a href="#">포럼</a></li>
                </ul>
              </li>
              <li className="etc_gnb__wrap">
                <a href="/" className="etc_gnb__ldepth">NEW소식</a>
                <ul className="etc_gnb__2depth_wrap">
                  <li><a href="#">뉴스</a></li>
                  <li><a href="#">공지사항</a></li>
                </ul>
              </li>
              <li className="etc_gnb__wrap">
                <a href="/" className="etc_gnb__ldepth">오시는 길</a>
                <ul className="etc_gnb__2depth_wrap">
                  <li><a href="#">찾아오시는 길</a></li>
                  <li><a href="#">제휴문의</a></li>
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