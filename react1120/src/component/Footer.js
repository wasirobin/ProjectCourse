import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div className="footerIcons">
          <img src="http://localhost:3001/IMG/Footer/footerIcon01.svg" alt="" />
          <img src="http://localhost:3001/IMG/Footer/footerIcon02.svg" alt="" />
          <img src="http://localhost:3001/IMG/Footer/footerIcon03.svg" alt="" />
          <img src="http://localhost:3001/IMG/Footer/footerIcon04.svg" alt="" />
          <img src="http://localhost:3001/IMG/Footer/footerIcon05.svg" alt="" />
        </div>
        <div className="footerInfo">
          <ul>
            <li>
              <a href="#">品牌故事</a>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <a href="#">商品列表</a>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <a href="#">課程活動</a>
            </li>
            <li>
              <div></div>
            </li>
            <li>
              <a href="#">文章專欄</a>
            </li>
          </ul>
        </div>
        <div className="backGroundColor"></div>
      </footer>
    </>
  )
}

export default Footer
