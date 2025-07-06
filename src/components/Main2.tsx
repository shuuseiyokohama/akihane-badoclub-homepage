import "./style/main2.css";
import prescribedPractice from "./image/image1.jpg";
import freePractice from "./image/image2.jpg";
import jointPractice from "./image/image3.jpg";

export const Main2 = () =>{
  return(
    <div  id="main2" className="main2">
      <div className="main2-header">
        <h1>クラブの活動ついて</h1>
        <p>
          当クラブは社会人向けのバドミントンサークルで、初心者から上級者まで参加可能です。木曜日にはコーチ指導による練習を行い、月に数回練習会を実施しています。
        </p>
        <hr />
      </div>
      <div className="main2-body">
        <img src= { prescribedPractice } alt="通常練習風景"  />
        <div className="main2-body-child">
          <h2>通常練習</h2>
          <ul>
            <li>時間: 毎週木曜日9:00から12:00</li>
            <li>場所: 桜台体育館</li>
            <li>コーチ指導あり!</li>
          </ul>
        </div>
      </div>
      <div className="main2-body">
        <img src= { freePractice } alt="通常練習風景"  />
        <div className="main2-body-child">
          <h2>希望者練習</h2>
          <ul>
            <li>時間: 月1回 木曜日12:30から15:30</li>
            <li>場所: 桜台体育館</li>
            <li>ビジターさん大歓迎</li>
          </ul>
        </div>
      </div>
      <div className="main2-body">
        <img src= { jointPractice } alt="通常練習風景"  />
        <div className="main2-body-child">
          <h2>合同練習会</h2>
          <ul>
            <li>時間: 月2回(5週目まであるときは月３回) 12:30から15:30</li>
            <li>場所: 中村南スポーツ交流センター</li>
            <li>初級者から上級者まで、クラブ員やビジターさんたちとの練習会ビジターさん大歓迎‼️</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="main2-header">
        <h1>部員募集中!</h1>
        <p>
          新しい部員を募集しています。バドミントンを楽しみながら技術を向上させたい方を大歓迎です！
        </p>
        <h2>入部条件</h2>
        <ul>
          <li>練馬区在住・在勤の方</li>
          <li>初級者から上級者まで（初心者の方は、初心者教室を修了した方に限ります）</li>
        </ul>
        <p>
          ☆詳しくは見学、体験の際にお問い合わせください<br />
          ご興味のある方は、ぜひお気軽にご連絡ください。<br />
          お待ちしております！
        </p>
        <hr />
      </div>
    </div>
  );
}
