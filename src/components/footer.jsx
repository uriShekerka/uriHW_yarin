import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div><footer class="footer w-100 ">
    <div class="container-footer">
        <div class="row-footer">
        <div class="footer-col d-flex flex-column justify-content-start align-items-end">
                <h4> מידע נוסף </h4>
                <ul className='footerLi col-lg-12 col-md-12 col-sm-6 d-flex flex-column justify-content-start align-items-end p-2'>
                    <li><a href="#"> דרכי ביטול עסקה </a></li>
                    <li><a href="#">תקנון ותנאי שימוש באתר </a></li>
                    <li><a href="#">shopping IL תקנון מבצע </a></li>
                    <li><a href="#">    הנחיות להחלפה והחזרת פריטים</a></li>
                    <li><a href="#">שאלות ותשובות</a></li>
                    <li><a href="#">נגישות</a></li>
                </ul>
            </div>
            <div class="footer-col d-flex flex-column justify-content-start align-items-end">
                <h4> פעולות מהירות </h4>
                <ul className='footerLi d-flex flex-column justify-content-start align-items-end p-2'>
                    <li><a href="#">החשבון שלי </a></li>
                    <li><a href="#">סל קניות </a></li>
                    <li><a href="#">GIFT CARD</a></li>
                    <li><a href="#">מגזר מוסדי  </a></li>

                </ul>
            </div>
            <div class="footer-col col-lg-12 col-md-12 col-sm-12 d-flex flex-column justify-content-start align-items-end ">
                <h4 > מפת אתר  </h4>
                <ul className='footerLi d-flex flex-column justify-content-start align-items-center'>
                    <li><a href="#">דף הבית</a></li>
                    <li><a href="#">חנות</a></li>
                    <li><a href="#">אודותינו</a></li>
                    <li><a href="#">סניפים</a></li>
                    <li><a href="#">שירות לקוחות</a></li>
                </ul>
            </div>
            <div class="footer-col col-lg-12 col-md-12 col-sm-12 d-flex flex-column justify-content-start align-items-end">
                <div class="social-links">
                <h4 className='h5 text-light'> שירות לקחות ומכירות  </h4>
                <h2>073-7970579</h2>
                <h4>service@bagir-il.co.il</h4>
                <a href="https://web.whatsapp.com/"><i class="fab fa-whatsapp"></i></a>
                <a href="https://www.instagram.com/bagir.il/" target="_blank"><i
                            class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/bagirilcom/" target="_blank"><i
                            class="fab fa-facebook-f"></i></a>
                   
                </div>
            </div>
            <div class="footer-col  d-flex flex-column justify-content-start align-items-end p-4">
                <div class="social-linksa d-flex flex-column justify-content-start align-items-end p-1 mt-1.5 ">
                <h2 id='h2Right' className='h5 text-light p-2 d-flex flex-column justify-content-start align-items-end'> Let's Be Friends    </h2>
               <h4 id='h4Right'>הירשמו לאתר וקבלו מאיתנו 10% הנחה לקנייה הראשונה באתר</h4>
                <h4 id='h4Righta'>service@bagir-il.co.il</h4>
                <button type="button" class="btn btn-light btn-md rounded-pill d-flex justify-content-end">להצטרפות לחצו כאן</button>
                   
                </div>
            </div>
        </div>
    </div>
</footer>
</div>
  )
}

export default Footer