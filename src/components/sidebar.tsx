import "./style/sidebar.css";
import { useState } from "react";

export const Header = () =>{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return(
    <header  id="header" className="header">
      <p>秋羽クラブ</p>
      <nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={isMenuOpen ? "open" : ""}>
          <li>
            <a href="#main1" onClick={toggleMenu} >
              TOP
            </a>
          </li>
          <li>
            <a href="#main2" onClick={toggleMenu}  >
              活動内容
            </a>
          </li>
          {/*<li><a href="/schedule">予定</a></li>*/}
          <li>
            <a href="#inquiry" onClick={toggleMenu}  >
              お問い合わせ
            </a>
          </li>
        </ul>
      </nav>
    </header>
    );
}
