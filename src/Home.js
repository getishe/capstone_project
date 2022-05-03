 import React,{useState} from 'react';
 import  './Home.css';
 import logo from "./image/logo.svg";
 function Home() {

   //  fixed header
    window.addEventListener("scroll", function() {
         const header = document.querySelector(".header");
        header.classList.toggle("active",window.scrollY > 0)
   });
   // Toogle menu
  const [show, setShow] = useState(true);

   return (
     <div className="home" id="Home">
        <div className="home__bg">
            <div className="header d__flex align__items__center pxy__30"> {/* code for .d__flex on css style */}
                <div className="logo">
                    <img src={logo} alt="" />
                    </div> 
                    <div className="navigation px__30">      {/* make a padding padding_bottom is center strate to logo  */}  
                    <ul className="navbar d__flex">        {/* make a horizontal using d__flex  */}
                        <a href="#Home"> <li className="nav__items mx__15">Home</li> </a>  {/* make a space using px__15  */}
                        <a href="#About"> <li className="nav__items mx__15">About</li> </a>
                        <a href="#Product"> <li className="nav__items mx__15">Product</li> </a>
                        <a href="#Contact"> <li className="nav__items mx__15">Contact</li> </a>                      
                    </ul>
                 </div>
                 {/* Toogle menu */}
                 <div className="toggle__menu">
                  <svg onClick={() => setShow(!show)}
                   xmlns="http://www.w3.org/2000/svg" 
                   width="16"
                    height="16" 
                    fill="currentColor"
                     class="bi bi-justify white pointer"
                      viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg>

                 </div>
                 {show ?(
                 <div className="sidebarNavbar">
                    <ul className="sidebar d__flex">
                       <li className="sideNavbar">
                          <a href="#Home">Home</a>
                       </li>
                       <li className="sideNavbar">
                          <a href="#About">About</a>
                       </li>
                       <li className="sideNavbar">
                          <a href="#Product">Product</a>
                       </li>
                       <li className="sideNavbar">
                          <a href="#Contact">Contact</a>
                       </li>
                    </ul>

                 </div>
                  ) : null} 
            </div>         
            {/* HOME CONTENT */}
             <div className="container">
              <div className="home__content">
                 <div className="home__meta">
                    <h1 className="home__text pz__10">
                       WELLCOME TO XPRESS HOTEL  
                    </h1>
                    <h2 className="home__text pz__10">
                       Best 7Star Hotel 
                    </h2>
                    <h3 className="home__text sweet pz__10">
                       We Desirve you well!!
                    </h3>
                     <h4 className="home__text pz__10">
                        Join us

                     </h4>
                 </div>
                           
              </div>
              </div>
        </div>
     </div>
   )  ;
 }
 
 export default Home;

//  to create a functions