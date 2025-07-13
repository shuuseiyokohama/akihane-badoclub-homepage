import poster from "./image/poster-1.png"
import "./style/poster.css"
export const Poster = () =>{
  return(
    <div className="poster" id="main1">
      <img src= {poster} alt="Poster内容" className="responsive-image" />
    </div>
  );
}
