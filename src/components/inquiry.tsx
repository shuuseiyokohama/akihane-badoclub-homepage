import "./style/inquiry.css";
//import irasuto from "./image/irasuto.png";


export const Inquiry = () =>{
  return(
    <div id="inquiry" className="inquiry">
      <h1>お問合せ</h1>
      <p>
        お問い合わせの際は、以下のフォームに「お名前」と「バドミントン練習問合せ」の旨、返信用のメールアドレスをご記入のうえ、送信してください。
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
          <button type="submit">送信</button>
        </form>
        {/*<img src={irasuto} alt="ネズミ" />*/}
      </div>
      <p>秋羽クラブ代表 : 内田</p>
    </div>
  );
}
