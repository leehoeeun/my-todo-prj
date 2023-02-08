import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { MdClear, MdMenu as MenuIcon } from "react-icons/md";
import Logo from './Logo';
import { Link } from 'react-router-dom';


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
  position: fixed;
  z-index: 99;
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
                <Link to="/category" className="etc_gnb__ldepth">카테고리</Link>
                <ul className="etc_gnb__2depth_wrap">
                  <li><Link to="/category/study">공부</Link></li>
                  <li><Link to="/category/church">교회일</Link></li>
                  <li><Link to="/category/etc">기타</Link></li>
                  <li><Link to="/category/buyList">구매목록</Link></li>
                </ul>
              </li>
              <li className="etc_gnb__wrap">
                <Link to="/todolist" className="etc_gnb__ldepth">할 일</Link>
                <ul className="etc_gnb__2depth_wrap">
                  <li><Link to="todolist/lastweek">지난주 할 일</Link></li>
                  <li><Link to="todolist/thisweek">이번주 할 일</Link></li>
                  <li><Link to="todolist/nextweek">다음주 할 일</Link></li>
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