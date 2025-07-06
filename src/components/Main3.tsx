import "./style/main3.css";
import irasuto from "./image/irasuto.png";


export const Main3 = () =>{
  return(
    <div id="main3" className="main3">
      <h1>お問合せ</h1>
      <p>お問合せの際は、表題に「バドミントン練習問合せ：お名前」を記名の上、上記メールアドレスまで連絡をお願いいたします。<br />表題が上記のとおりでない場合には、迷惑メールフォルダに入る場合もあり、その際にはお返事ができなくなってしまいます。<br />大変お手数ですがよろしくお願いいたします。
      </p>
      <div className="main3-contact">
        <ul className="main3-contact-address">
          <li>
            <p>メールアドレス:</p>
            <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
              example@example.com
            </a>
          </li>
          <li>
            <p>電話番号(代表者):</p>
            <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
              電話番号サンプル
            </a>
          </li>
          <li>
            <p>インスタグラム:</p>
            <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
        <img src = {irasuto} alt="ネズミ" />
      </div>
      <hr />
    </div>
  );
}
