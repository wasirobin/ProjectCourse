function Navbar() {
  return (
    <>
      <header>
        <img
          src="http://localhost:3001/IMG/Navbar/navbarLogo.svg"
          alt="圖片遺失"
        />
        <ul>
          <li>
            <a href="#">品牌故事</a>
          </li>
          <li>
            <a href="#">商品列表</a>
          </li>
          <li>
            <a href="#">課程列表</a>
          </li>
          <li>
            <a href="#">文章專欄</a>
          </li>
          <li>
            <a href="#">
              <img
                src="http://localhost:3001/IMG/Navbar/member.svg"
                alt="圖片遺失"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="http://localhost:3001/IMG/Navbar/購物車.svg"
                alt="圖片遺失"
              />
            </a>
          </li>
        </ul>
      </header>
    </>
  )
}

export default Navbar
