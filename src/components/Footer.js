import React from 'react';

function Footer() {
    return ( 
        <>
          {/* <div class="hero-portion4">
          <div class="footer-panel">
            <span class="follow-us">Follow us on</span>
            <a href="https://www.facebook.com/TeamRakshak/" ><img class="social-image facee" src="./images/facebook copy.png" alt="Instagram" /></a>
            <a href="https://www.instagram.com/rakshakiitb/" ><img class="social-image instaa" src="./images/insta copy.svg" alt="Instagram" /></a>
            <a href="https://www.youtube.com/@teamrakshakiitb2540" ><img class="social-image utube" src="./images/yt copy.png" alt="Instagram" /></a>
            <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A18257289&keywords=rakshak%20iit%20bombay&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=7c1e9497-0153-43cb-9a87-d93f0817495f&sid=vc%40&spellCorrectionEnabled=true" ><img class="social-image linked" src="./images/in copy.png" alt="Instagram" /></a>
          </div>
          <div class="footer-panel">
            <span class="join-network">Join out network and contribute to society!</span>
          </div>
          </div>

    
        <footer>
          <div class="footer-panel1">
            <div class="footer-components">
                <h3>Contact Us</h3>
            </div>
            <div class="footer-components">
                <h3>Quick Links</h3>
            </div>
            <div class="footer-components">
                <h3>Follow Us</h3>
            </div>
          </div>
          <div class="footer-panel3">
            <p class="copywrite">&copy; 2024 rakshak iitb. All Rights Reserved</p>
          </div>
        </footer> */}


<div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-3 mb-3">
        <h5>Quick Links</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Planes</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Competitions</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Subsystems</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Team</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Support</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-3 mb-3">
        <h5>Competitions</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Air Cargo Challenge</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">AUVSI SUAS</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Smart India Hackathon</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">UAS Challenge</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Youth Conclave</a></li>
        </ul>
      </div>

      {/* <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div> */}

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address" />
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
</div>




<div class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
      <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (light)">
        <svg class="bi my-1 theme-icon-active" width="1em" height="1em"><use href="#sun-fill"></use></svg>
        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
      </button>
      <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center active" data-bs-theme-value="light" aria-pressed="true">
            <svg class="bi me-2 opacity-50" width="1em" height="1em"><use href="images/sun-fill.svg"></use></svg>
            Light
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
            <svg class="bi me-2 opacity-50" width="1em" height="1em"><use href="#moon-stars-fill"></use></svg>
            Dark
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
        <li>
          <button type="button" class="dropdown-item d-flex align-items-center" data-bs-theme-value="auto" aria-pressed="false">
            <svg class="bi me-2 opacity-50" width="1em" height="1em"><use href="#circle-half"></use></svg>
            Auto
            <svg class="bi ms-auto d-none" width="1em" height="1em"><use href="#check2"></use></svg>
          </button>
        </li>
      </ul>
    </div>




        </>
     );
}

export default Footer;