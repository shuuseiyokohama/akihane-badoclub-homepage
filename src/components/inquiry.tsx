import "./style/inquiry.css";
//import irasuto from "./image/irasuto.png";


export const Inquiry = () =>{
  return(
    <div id="inquiry" className="inquiry">
      <h1>お問合せ</h1>
      <p>
        お問い合わせの際は、以下のフォームに項目を記載のうえ、送信してください。<br/>
        ＊メールアドレスの記載にミスがあると連絡が取れませんので、確認のうえ入力してください。
      </p>
      <div className="inquiry-contact">
        <form
          action="https://formspree.io/f/"
          method="POST"
          className="inquiry-contact-address"
        >
          <div className="form-group">
            <label htmlFor="name">お名前:</label>
            <input type="text" name="name" id="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">メッセージ:</label>
            <textarea name="message" id="message" required></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="email">メールアドレス:</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="age">年齢:</label>
            <select name="age" id="age" required>
              <option value="">選択してください</option>
              <option value="10s">10代</option>
              <option value="20s">20代</option>
              <option value="30s">30代</option>
              <option value="40s">40代</option>
              <option value="50s">50代</option>
              <option value="60s">60代</option>
              <option value="70s">70代</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="level">バドミントンのレベル:</label>
            <select name="level" id="level" required>
              <option value="">選択してください</option>
              <option value="未経験">未経験</option>
              <option value="初心者">初心者</option>
              <option value="中級者">中級者</option>
              <option value="上級者">上級者</option>
            </select>
          </div>
          <button type="submit">送信</button>
        </form>
        {/*<img src={irasuto} alt="ネズミ" />*/}
      </div>
      <p>秋羽クラブ代表 : 内田</p>
    </div>
  );
}
