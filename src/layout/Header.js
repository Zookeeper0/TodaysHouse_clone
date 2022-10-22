import React from 'react'
 import logo from '../images/mainlogo.jpg'
const Header = () => {
  return (
    <header>
      <div className="inner">
        <div className="main">
          <div className='main__logo'>
            <a className="logo" href="/">
              <img src={logo} alt="mainlogo" height="65px"/>
            </a>
          </div>
          {/* 드롭다운 메인메뉴 */}
          <ul className="main__menu">
            <li className="item">
              <div className="item__name">커뮤니티</div>
              <div className="item__contents">
                <div className="content__menu">
                  <ul className="inner">
                    <li>홈</li>
                    <li>팔로잉</li>
                    <li>사진</li>
                    <li>집들이</li>
                    <li>노하우</li>
                    <li>전문가집들이</li>
                    <li>셀프가이드</li>
                    <li>질문과답변</li>
                    <li>3D인테리어</li>
                    <li>이벤트</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="item">
              <div className="item__name">스토어</div>
              <div className="item__contents">
                <div className="content__menu">
                  {/* <ul className='inner'>
                    <li>홈</li>
                    <li>팔로잉</li>
                    <li>사진</li>
                    <li>집들이</li>
                    <li>노하우</li>
                    <li>전문가집들이</li>
                    <li>셀프가이드</li>
                    <li>질문과답변</li>
                    <li>3D인테리어</li>
                    <li>이벤트</li>
                  </ul> */}
                </div>
              </div>
            </li>
            <li className="item">
              <div className="item__name">이사/시공/수리</div>
              <div className="item__contents">
                <div className="content__menu">
                  {/* <ul className='inner'>
                    <li>홈</li>
                    <li>팔로잉</li>
                    <li>사진</li>
                    <li>집들이</li>
                    <li>노하우</li>
                    <li>전문가집들이</li>
                    <li>셀프가이드</li>
                    <li>질문과답변</li>
                    <li>3D인테리어</li>
                    <li>이벤트</li>
                  </ul> */}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;