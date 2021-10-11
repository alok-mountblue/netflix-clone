/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import './Footer.css';

class Footer extends React.Component {
    render() {
      return (
        <div class="forcenter">
       <div class="footer">
             <div class="footer-section-question">
               <p style={{textAlign:"left"}}>Question? Call <a href="#"> <span style={{color:"gray"}}>000-800-040-1843</span></a></p>
             </div>
             <br/>
             <div class="footer-section">
               <div class="footer-section-2-column">
                 <p><a href="#">FAQ</a></p>
                 <p><a href="#">Investor Relations</a></p>
                 <p><a href="#">Privacy</a></p>
                 <p><a href="#">Speed Test</a></p>
               </div>
               <div class="footer-section-2-column">
                 <p><a href="#">Help Centre</a></p>
                 <p><a href="#">Jobs</a></p>
                 <p><a href="#">Cookie Preferences</a></p>
                 <p><a href="#">Legal Notices</a></p>
               </div>
               <div class="footer-section-2-column">
                 <p><a href="#">Account</a></p>
                 <p><a href="#">Ways to Watch</a></p>
                 <p><a href="#">Corporate Information</a></p>
                 <p><a href="#">Only on Netflix</a></p>
               </div>
               <div class="footer-section-2-column">
                 <p><a href="#">Media Centre</a></p>
                 <p><a href="#">Terms of Use</a></p>
                 <p><a href="#">Contact Us</a></p>
               </div>
             </div>
             <div class="footer-section">
               <div class="signinandlanguage">
                 <div class="languagesection">
                   <select name="languagesection" id="enghindi">
                     <option value="English">English</option>
                     <option value="Hindi">Hindi</option>
                   </select>
                 </div>
               </div>
             </div>
             <div class="footer-section">
             <div class="footer-section-2-column">
                 <p style={{textAlign:"left"}}><a href="#">Netflix India</a></p>
                 </div>
             </div>
           </div>  
           </div>
      );
  }
}

export default Footer;

