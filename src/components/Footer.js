import React from 'react'
import './Footer.css'
import './PreFooter.css'
const Footer = ({footer}) => {
  return (
    <>
    <div className='PreFooter'>
    <div>
   <img src="https://cdn-icons-png.flaticon.com/128/1594/1594900.png" alt="a"/>
    <p><b>Hassle-free replacement</b>
    <br/>
    10-day easy return on mi.com</p>
    </div>
    <div><img src="https://cdn-icons-png.flaticon.com/128/2563/2563814.png"  alt="c"/> <p> <b>100% secure payments</b> <br/> We support Cards, Wallets, EMI and COD</p></div>
    <div> <img src="https://cdn-icons-gif.flaticon.com/6172/6172532.gif"  alt="e"/> <p> <b>Vast service network</b> <br/> 1000 Mi service-centers across 600 cities</p></div>
        </div>
        <div className="PreFooter2">
             <div> <p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>

             <div>
                 <div>
                     <input type="email" name="email" placeholder="Enter Email Address" />
                     <button>›</button>
                 </div>
                 <span>Thanks. You're on our email list for special offers.</span>
             </div>

             <div>
                    <p>FOLLOW MI</p>
                    <span>We want to hear from you!</span>
             </div>

             <div className='images'>
                {/* {facebookIcon} {youtubeIcon} {instagramIcon} {twitterIcon}  */}
                <img src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" alt="b"/>
                <img src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="1"/>
                <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png"  alt="2"/>
                <img src="https://cdn-icons-png.flaticon.com/128/2504/2504957.png"  alt="3"/>
             </div>
        </div>

        <div className="footer">
                  <div> 
                     <p> SUPPORT</p>
                      {footer.support.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                 <p> SHOP AND LEARN</p>
                  {footer.shopAndLearn.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name} </a>

                      ))}

                  </div>
                  <div>
                   <p> RETAIL STORE</p>
                    {footer.retailStore.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                           <p>  ABOUT</p>
                             {footer.aboutUS.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                 <p> CONTACT US</p>
                  {footer.contactUs.map((item,index)=>(
                         <a key={item.url} href={item.url}>{item.name}</a>

                      ))}
                  </div>

                  <div>
                      <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div><button>CHAT NOW</button>
                  </div>



        </div>
        <div className="footerBorder">
       <div> Copyright © 2010 - 2023 Xiaomi. All Rights Reserved</div>
        </div>

    </>
  )
}

export default Footer
