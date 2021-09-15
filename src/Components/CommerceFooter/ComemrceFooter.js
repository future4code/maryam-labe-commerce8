import React from 'react'
import './ComemrceFooter.css'
import  logo1 from './Footer_icone/google-plus-brands.svg'
import  logo2 from './Footer_icone/facebook-brands.svg'
import  logo3 from './Footer_icone/instagram-brands.svg'
export  default class footer extends React.Component{
 render (){ 
     return(
         <div className="footer">
             
                 <h3>Aqui temos o preço que cabe no seu bolso.</h3>
                 <div className="div_footer">
                 <ul className='icone'>
                     <li><a href="#"><img src={logo1} /></a></li>
                     <li><a href="#"><img src={logo2} /></a></li>
                     <li><a href="#"><img src={logo3} /></a></li>
                 </ul>
                 </div>
             
         </div>
     )
 }
}



