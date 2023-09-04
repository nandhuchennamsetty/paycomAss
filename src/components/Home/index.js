import "./index.css"
import Header from "../Header"
import Sliderel from "../Sliderel"
const Home=()=>(
    <div className="home-container">
        <Header/>
        <div className="fst-con">
            <div className="signup-con">
                <div className="sign-min">
                <p className="para-dis">Discover the beauty of the tropics</p>
                <h1 className="head-trop">Tropical<br/> Destinations<br/>
                <span className="head-student">For Student</span></h1>
                <p className="para-lorem">Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae </p>
                <button className="btn-sign">SIGN UP</button>
                </div>
            </div>
            <div className="fst-img-con">
                <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693651827/hgla4md8drpgqdk1rzzp.png" alt="logo" className="boy-logo"/>
            </div>
        </div> 

         <div className="fst-con">
            <div className="signup-con pg1">
                <div className="sign-min pg1-min">
                <div className="profile-con">
                <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693674453/smmqxijvv5s7fkwvoplr.png" className="img-g1" alt="img-g1"/>
                <div className="img-content">
                  <h1 className="g1-head">Jenny Wilson</h1> 
                  <p className="g2-para">Lorem ipsum dolor sit amet, consectetur adipiscing...</p> 
                </div>
                </div>
                <div className="profile-con">
                <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693674453/smmqxijvv5s7fkwvoplr.png" className="img-g1" alt="img-g1"/>
                <div className="img-content">
                  <h1 className="g1-head">Jenny Wilson</h1> 
                  <p className="g2-para">Lorem ipsum dolor sit amet, consectetur adipiscing...</p> 
                </div>
                </div>
                <div className="profile-con">
                <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693674453/smmqxijvv5s7fkwvoplr.png" className="img-g1" alt="img-g1"/>
                <div className="img-content">
                  <h1 className="g1-head">Jenny Wilson</h1> 
                  <p className="g2-para">Lorem ipsum dolor sit amet, consectetur adipiscing...</p> 
                </div>
                </div>
            
                </div>
            </div>
            <div className="fst-img-con pg2-ex-main">
                <div className="pag-2-explore-con">
                  <h1 className="p2-head">Tropical Adventure<br/>
                    <span className="span-el">for Students.</span></h1>  
                    <p className="para-tro">Student Tropical Vacation: Relax and Recharge</p>
                    <ul>
                        <li className="li-el">Lorem ipsum dolor sit amet</li>
                        <li className="li-el">Massa quis natoque sit quam</li>
                        <li className="li-el">Eros non pellentesque elit</li>     
                        <li className="li-el">tortor id euismod habitant</li>    
                        <li className="li-el">Sed suspendisse id in ultrices</li>
                    </ul>
                    <btn className="btn-explore">Explore More</btn>
                </div>
            </div>
        </div>  
            <Sliderel/>
            <div className="fst-con">
            <div className="fst-img-con pg2-ex-main">
                <div className="pag-2-explore-con pg3-i">
                  <h1 className="p2-head">Student Discount<br/>
                    <span className="span-el">for Students.</span></h1>  
                    <p className="para-tro">Student Tropical Vacation: Relax and Recharge</p>
                    <ul>
                        <li className="li-el">Lorem ipsum dolor sit amet</li>
                        <li className="li-el">Massa quis natoque sit quam</li>
                        <li className="li-el">Eros non pellentesque elit</li>     
                        <li className="li-el">tortor id euismod habitant</li>    
                        <li className="li-el">Sed suspendisse id in ultrices</li>
                    </ul>
                    <btn className="btn-explore">Explore More</btn>
                </div>
            </div>
            <div className="fst-img-con">
                <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693733445/rksllf9d5tns7yi5qwdq.png" alt="logo" className="boy-logo"/>
            </div>
        </div>
        
        <div className="fst-con">
            <div className="fst-img-con">
                <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693733994/oixygl8i2rkryvhjzd6q.png" alt="logo" className="boy-logo"/>
            </div>
            <div className="fst-img-con pg2-ex-main">
                <div className="pag-2-explore-con pg3-i">
                  <h1 className="p2-head">Book Now</h1>
                    <p className="para-tro">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    <form>
                        <label className="labelel">CITY</label>
                        <input type="text" placeholder="Placeholder" className="input1"/>
                        <div className="inner-input-con">
                         <div> 
                        <label className="labelel">ARRIVAL</label>
                        <input type="text" placeholder="10 October" className="input2"/>
                        </div> 
                        <div> 
                        <label className="labelel">DEPARTURE</label>
                        <input type="text" placeholder="10 October" className="input2"/>
                        </div>  
                        </div>
                        <button className="btn-form">Book NOW</button>
                    </form>
                    
                </div>
            </div>
        </div>

        <div className="profile-conp">
            <h1 className="head-test">Testimonial</h1>
            <div className="mini-3con">
            <div className="prof-3con">
                <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693739203/mr2wwc3tvy18zsnvgq4p.png" alt="profile-1" className="profile-1"/>
                <h1 className="profile-1-head">Corey Korsgaars</h1>
                <hr className="hr-line"/>
                <p className="pa-profile">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="prof-3con">
                <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693742140/l0dho3j4hqaitztx4tqn.png" alt="profile-1" className="profile-1"/>
                <h1 className="profile-1-head">Corey Korsgaars</h1>
                <hr className="hr-line"/>
                <p className="pa-profile">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className="prof-3con">
                <img src="https://res.cloudinary.com/dly8bneey/image/upload/v1693742259/xpjfjwkfmscya5nfcei6.png" alt="profile-1" className="profile-1"/>
                <h1 className="profile-1-head">Corey Korsgaars</h1>
                <hr className="hr-line"/>
                <p className="pa-profile">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            </div>
        </div>

        <div className="footer-con">
            <h1 className="head-foo">Student Special: Discounted rates on tropical getaways!</h1>
            <p className="para-foo">Let’s embody your beautiful ideas together, simplify the way you visualize your next big things.</p>
                <ul className="ul-foo">
                    <li className="li-foo">Privacy Policy</li>
                    <li className="li-foo">Terms of Use</li>
                    <li className="li-foo">Sales and Refunds</li>
                    <li className="li-foo">Legal</li>
                    <li className="li-foo">About</li>
                    <li className="li-foo">Schedules</li>
                    <li className="li-foo">Pricing</li>
                    <li className="li-foo">Membership</li>
                    <li className="li-foo">Joins</li>
                </ul>
            
        </div>
    </div>
)
export default Home
