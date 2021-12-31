import React from 'react';
import './App.css';
import fb from './facebook.png'
import lk from './linkedin.png'
import gh from './github.png'
import val from './valhalla.jpg';
import nar from './naruto.png'
import dog from './doge.jpg'
import gpu from './gpu.jpg'
import em from './em.jpeg'
import ft from './fruit.jpg'
import fk from './faker.jpg'
import sq from './square.png'


function App() {
  return (
    <>
    <div className="navBar" id="navBar">
      <div className="navCon">
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
        <div className="linkBurg">
          <img className="burgImg" src={sq} alt="none">
          </img>
          <div className="burgItems">
              <a className="burgItem" rel="noreferrer" title="Facebook" href="https://www.facebook.com/alex.cho.90/" target="_blank">
                <img className="itemImg" src={fb} alt="none"></img>
                Facebook
              </a>
              <a className="burgItem" rel="noreferrer" title="Linkedin" href="https://www.linkedin.com/in/alex-cho-301508134/" target="_blank">
                <img className="itemImg" src={lk} alt="none"></img>
                Linkedin
              </a>
              <a className="burgItem" rel="noreferrer" title="Github" href="https://github.com/Simulation42" target="_blank">
                <img className="itemImg" src={gh} alt="none"></img>
                Github
              </a>
          </div>
        </div>
        </div>
      </div>
    <div className="outerBox">
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
              <img className="topImg" src={em} alt="none"></img>
              <div className="topFoot">
                THOUGHTS
                <div className="topText">
                Thoughts++: Emacs VS VI
                </div>
              </div>
            </div>
            <div className="top">
              <img className="topImg" src={gpu} alt="none"></img>
              <div className="topFoot">
                PRODUCT
                <div className="topText">
                  Top 10 GPUs That You Can't Buy
                </div>
              </div>
            </div>
            <div className="top">
              <img className="topImg" src={nar} alt="none"></img>
              <div className="topFoot">
                REVIEW
                <div className="topText">
                  Anime Review++: Naruto
                </div>
              </div>
            </div>
            <div className="top">
            <img className="topImg" src={fk} alt="none"></img>
            <div className="topFoot">
                GOSSIP
                <div className="topText">
                Gossip++: Hottest New E-Sports Couple?
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
        <img className="boxImg" src={em} alt="none"></img>
            <div className="boxHead">
              Thoughts++: Emacs VS VI
            </div>
            <div className="boxText">
              Hot++ take on which editor is best and asking the question "why do you hate yourself?"
            </div>
            <div className="boxFoot">
              <span style={{textDecoration: "underline"}}>THOUGHTS</span> | Click to Read
            </div>
        </div>
        <div className="box">
        <img className="boxImg" src={ft} alt="none"></img>
            <div className="boxHead">
              Top 10 Fruits That Are Tasty
            </div>
            <div className="boxText">
              Which fruit is tastiest and why is tomato a fruit? I answer the hard questions on this top 10 list
            </div>
            <div className="boxFoot">
              <span style={{textDecoration: "underline"}}>PRODUCT</span> | Click to Read
            </div>
        </div>
        <div className="box">
        <img className="boxImg" src={fk} alt="none"></img>
            <div className="boxHead">
              Gossip++: Hottest New E-Sports Couple?
            </div>
            <div className="boxText">
              In the world of e-sports the two titans Faker and Tyler1 dating? Get the hottest updates here
            </div>
            <div className="boxFoot">
              <span style={{textDecoration: "underline"}}>GOSSIP</span> | Click to Read
            </div>
        </div>
      </div>
    </div>
    <div className="footer">
      <div className="footerCon">
      Alexander<span style={{ color: "rgb(70,80,130)", fontWeight: "600", fontFamily: "Arial" }}>C++   </span> 
      <span style={{ fontSize: "14px" }}>|    ©2021</span>
    </div>
    </div>
    </>
  );
}

export default App;
