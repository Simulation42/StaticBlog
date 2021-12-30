import React from 'react';
import './App.css';
import fb from './facebook.png'
import lk from './linkedin.png'
import gh from './github.png'
import val from './valhalla.jpg';
import nar from './naruto.png'
import dog from './doge.jpg'
import gpu from './gpu.jpg'

function App() {
  return (
    <div className="outerBox">
      <div className="navBar">
        <div className="navBrand">
          <span>ALEXANDER</span><span style={{ color: "rgb(70,80,130)", fontWeight: "600", fontFamily: "Arial" }}>C++</span>
        </div>
        <div className="linkBox">
          <a rel="noreferrer" title="Facebook" href="https://www.facebook.com/alex.cho.90/" target="_blank">
            <img className="linkImg" src={fb} alt="none"></img>
          </a>
          <a rel="noreferrer" title="Linkedin" href="https://www.linkedin.com/in/alex-cho-301508134/" target="_blank">
            <img className="linkImg" src={lk} alt="none"></img>
          </a>
          <a rel="noreferrer" title="Github" href="https://github.com/Simulation42" target="_blank">
            <img className="linkImg" src={gh} alt="none"></img>
          </a>
        </div>
      </div>
      <div className="innerBox">
        <div className="firstBox">
          <div className="head">
            Enter The ++ Domain
            <br />
            <span style={{fontSize: '24px', fontWeight: "400"}}>The Mind of Alexander</span>
          </div>
          <div className="topBox">
            <div className="topHead">Most Popular Blogs</div>
            <div className="top">
              <img className="topImg" src={val} alt="none"></img>
              <div className="topFoot">
                REVIEW
                <div className="topText">
                  Game Review++: Assassin's Creed Valhalla
                </div>
              </div>
            </div>
            <div className="top">
              <img className="topImg" src={val} alt="none"></img>
              <div className="topFoot">
                REVIEW
                <div className="topText">
                  Game Review++: Assassin's Creed Valhalla
                </div>
              </div>
            </div>
            <div className="top">
              <img className="topImg" src={val} alt="none"></img>
              <div className="topFoot">
                REVIEW
                <div className="topText">
                  Game Review++: Assassin's Creed Valhalla
                </div>
              </div>
            </div>
            <div className="top">
            <img className="topImg" src={val} alt="none"></img>
            <div className="topFoot">
                REVIEW
                <div className="topText">
                  Game Review++: Assassin's Creed Valhalla
                </div>
              </div>
            </div>
          </div>
          <div className="box1">
            <img className="box1Img" src={val} alt="none"></img>
            <div className="boxHead">
              Game Review++: Assassin's Creed Valhalla
            </div>
            <div className="boxText">
              An indepth review of the latest Assassin's Creed game with a ++ take
            </div>
            <div className="boxFoot">
              <span style={{textDecoration: "underline"}}>REVIEW</span> | Click to Read
            </div>
          </div>
        </div>
        <div className="box">
        <img className="boxImg" src={nar} alt="none"></img>
            <div className="boxHead">
              Anime Review++: Naruto
            </div>
            <div className="boxText">
              Is this an overhyped anime that just came at the right time or a timeless++ classic?  
            </div>
            <div className="boxFoot">
              <span style={{textDecoration: "underline"}}>REVIEW</span> | Click to Read
            </div>
        </div>
        <div className="box">
        <img className="boxImg" src={gpu} alt="none"></img>
            <div className="boxHead">
              Top 10 GPUs That You Can't Buy
            </div>
            <div className="boxText">
              These are the best++ GPUs currently avaiable that is not currently available
            </div>
            <div className="boxFoot">
              <span style={{textDecoration: "underline"}}>PRODUCT</span> | Click to Read
            </div>
        </div>
        <div className="box">
        <img className="boxImg" src={dog} alt="none"></img>
            <div className="boxHead">
              Thoughts++: DogeCoin
            </div>
            <div className="boxText">
              Is Dogecoin a scam or a brilliant creation that will take mankind to the future?
            </div>
            <div className="boxFoot">
              <span style={{textDecoration: "underline"}}>THOUGHTS</span> | Click to Read
            </div>
        </div>
        <div className="box">
        <img className="boxImg" src={val} alt="none"></img>
            <div className="boxHead">
              Game Review++: Assassin's Creed Valhalla
            </div>
            <div className="boxText">
              An indepth review of the latest Assassin's Creed game with a ++ take
            </div>
            <div className="boxFoot">
              <span style={{textDecoration: "underline"}}>REVIEW</span> | Click to Read
            </div>
        </div>
        <div className="box">
        <img className="boxImg" src={val} alt="none"></img>
            <div className="boxHead">
              Game Review++: Assassin's Creed Valhalla
            </div>
            <div className="boxText">
              An indepth review of the latest Assassin's Creed game with a ++ take
            </div>
            <div className="boxFoot">
              <span style={{textDecoration: "underline"}}>REVIEW</span> | Click to Read
            </div>
        </div>
        <div className="box">
        <img className="boxImg" src={val} alt="none"></img>
            <div className="boxHead">
              Game Review++: Assassin's Creed Valhalla
            </div>
            <div className="boxText">
              An indepth review of the latest Assassin's Creed game with a ++ take
            </div>
            <div className="boxFoot">
              <span style={{textDecoration: "underline"}}>REVIEW</span> | Click to Read
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
