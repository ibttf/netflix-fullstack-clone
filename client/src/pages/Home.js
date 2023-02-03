import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../styles/logo.png";
import background from "../styles/login-bg.jpg";
import homepage1 from "../styles/homepage1.JPG"
import homepage2 from "../styles/homepage2.JPG"
import homepage3 from "../styles/homepage3.JPG"
import homepage4 from "../styles/homepage4.JPG"
import "../styles/Home.css";
const Home = () => {
  const [isOne,setIsOne]=useState(false);
  const [isTwo,setIsTwo]=useState(false);
  const [isThree,setIsThree]=useState(false);
  const [isFour,setIsFour]=useState(false);
  const [isFive,setIsFive]=useState(false);
  const [isSix,setIsSix]=useState(false);
  const [isSeven,setIsSeven]=useState(false);
    return (
      <div className="home">
        <div className="home-banner">
          <button className="new-btn">NEW!</button>
          <p1>Plans now start at <span>$6.99</span></p1>
          <Link to="/login"><p1 className="home-banner-learn-more">Learn More <span>></span></p1></Link>
        </div>
        <div className="home-hero">
           <img src={background} className="home-hero-bg"></img>
            <img src={logo} className=" home-hero-logo"></img>
            <div className="home-hero-text">
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
              <form classname="email-form">
                <input className="email-form-text" type="text" id="username" placeholder="Email address">
                </input>
                <Link to="/login">
                  <input type="submit" className="email-form-submit" value="Get Started >"></input>
                </Link>
              </form>
            </div>

            
        </div>
        <div className="row-break"></div>
        <div className="home-rows">

          <div className="home-row home-row-1">
            <div className="home-row-text">
              <h1>Enjoy on your TV.</h1>
              <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
            </div>
            <div className="home-row-image">
              <img src={homepage1}></img>
            </div>
          </div>
          <div className="row-break"></div>
          <div className="home-row home-row-2">

            <div className="home-row-image">
              <img src={homepage2}></img>
            </div>
            <div className="home-row-text">
              <h1>Watch everywhere.</h1>
              <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
            </div>
          </div>
          <div className="row-break"></div>
          <div className="home-row home-row-3">
            <div className="home-row-text">
              <h1>Create profiles for kids.</h1>
              <h2>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
</h2>
            </div>
            <div className="home-row-image">
              <img src={homepage3}></img>
            </div>
          </div>
          <div className="row-break"></div>
          <div className="home-row home-row-4">

            <div className="home-row-image">
              <img src={homepage4}></img>
            </div>
            <div className="home-row-text">
              <h1>Download your shows to watch offline.</h1>
              <h2>Available on all plans except Basic with ads.</h2>
            </div>
          </div>
          <div className="row-break"></div>
          <div className="home-row home-faq">
            <h1>Frequently Asked Questions</h1>

              <div className="home-faq-container">
                <h2 className="home-faq-question"  onClick={()=>setIsOne(!isOne)}>What is Netflix? </h2>
                <h3 onClick={()=>setIsOne(!isOne)}>{isOne ? "x" : "+"}</h3>
                <p className={`home-faq-text ${isOne ? "" : "hidden"}`}>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. <br></br><br></br>

                You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
            </div>          
            <div className="home-faq-container">
              <h2 className="home-faq-question"  onClick={()=>setIsTwo(!isTwo)}>How much does Netflix cost? </h2>
              <h3 onClick={()=>setIsTwo(!isTwo)}>{isTwo ? "x" : "+"}</h3>
              <p className={`home-faq-text ${isTwo ? "" : "hidden"}`}>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.</p>
          </div>          
            <div className="home-faq-container">
              <h2 className="home-faq-question"  onClick={()=>setIsThree(!isThree)}>What's different on Basic with ads? </h2>
              <h3 onClick={()=>setIsThree(!isThree)}>{isThree ? "x" : "+"}</h3>
              <p className={`home-faq-text ${isThree ? "" : "hidden"}`}>Basic with ads is a great way to enjoy movies and TV shows at a lower price. You can stream your favorites on any device with limited ad breaks. This plan does not allow downloads and a limited number of movies and TV shows are not available due to licensing restrictions. Some location and device restrictions also apply.</p>
          </div>          
            <div className="home-faq-container">
              <h2 className="home-faq-question"  onClick={()=>setIsFour(!isFour)}>Where can I watch? </h2>
              <h3 onClick={()=>setIsFour(!isFour)}>{isFour ? "x" : "+"}</h3>
              <p className={`home-faq-text ${isFour ? "" : "hidden"}`}>

              Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
<br></br><br></br>
You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
          </div>          
            <div className="home-faq-container">
              <h2 className="home-faq-question"  onClick={()=>setIsFive(!isFive)}>How do I cancel? </h2>
              <h3 onClick={()=>setIsFive(!isFive)}>{isFive ? "x" : "+"}</h3>
              <p className={`home-faq-text ${isFive ? "" : "hidden"}`}>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
          </div>          
            <div className="home-faq-container">
              <h2 className="home-faq-question"  onClick={()=>setIsSix(!isSix)}>What can I watch on Netflix? </h2>
              <h3 onClick={()=>setIsSix(!isSix)}>{isSix ? "x" : "+"}</h3>
              <p className={`home-faq-text ${isSix ? "" : "hidden"}`}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
          </div>          
            <div className="home-faq-container">
              <h2 className="home-faq-question"  onClick={()=>setIsSeven(!isSeven)}>Is Netflix good for kids? </h2>
              <h3 onClick={()=>setIsSeven(!isSeven)}>{isSeven ? "x" : "+"}</h3>
              <p className={`home-faq-text ${isSeven ? "" : "hidden"}`}>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
<br></br><br></br>
Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
          </div>    
              <h2 className="bottom-form-label">Ready to watch? Enter your email to create or restart your membership</h2>      
              <form classname="email-form">
                <input className="email-form-text" type="text" id="username" placeholder="Email address">
                </input>
                <Link to="/login">
                  <input type="submit" className="email-form-submit" value="Get Started >"></input>
                </Link>
              </form>



        </div>
          <div className="row-break"></div>
      </div>
      </div>
    );
  }


export default Home;
