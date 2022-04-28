 import React from 'react';
 import './About.css';
 import aboutimg from './image/about2.jpg';
 function About() {
    //  Up to Top Btn
   window.addEventListener("scroll", function() {
         const uptoTop = document.querySelector("a.bottom__to__top");
        uptoTop.classList.toggle("active",window.scrollY > 0)
   });
  return (
    <div className="about component_space" id="About">
    <div className ="container">
        <div className="row">
            <div className="col__2">
            <img src={aboutimg}
            alt=""  className="about__img"></img>
            </div>
            <div className="col__2">
                <h1 className="about_heading">Going the Extra Mile for Our Clients </h1>
                <div className="about__meta">
                    <p className="about__text p__color">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima totam quis cupiditate sapiente ex dolor exercitationem. Tempora alias saepe doloremque cupiditate dolore natus commodi magni, sunt eius harum molestias?
                    </p>
                    <p className="about__text p__color">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima totam quis cupiditate sapiente ex dolor exercitationem. Tempora alias saepe doloremque cupiditate dolore natus commodi magni, sunt eius harum molestias?
                    </p>
                    <p className="about__text p__color">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima totam quis cupiditate sapiente ex dolor exercitationem. Tempora alias saepe doloremque cupiditate dolore natus commodi magni, sunt eius harum molestias?
                    </p>
                    <div className="about_button d__flex align_items_center">
                            <a href="#"><button className="about btn pointer"> Contact </button></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* UP TO TOP BTN */  }
        <div className="up_to_top_btn">
          <a href="#" className="bottom__to__top">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up white" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg>
</a>
        </div>
        
         </div>
   );
 }
 
 export default About;