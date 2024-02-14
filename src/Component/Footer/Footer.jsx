import React from "react";

function Footer() {
  return (
    // <footer className="footer mt-auto py-3 bg-light">
    //   <div className="container text-center">
    //     <span className="text-muted">&copy; 2024 Apsara Dry Cleaners & Laundry Services Pvt.Ltd</span>
    //   </div>
    // </footer>
    <>
      <div class="footer bg-dark text-light py-3">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Washmart
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Company
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div class="jumbotron text-center">
          <h1 class="display-4">Washmart</h1>
          <p class="lead">
            Your expert laundry and dry cleaning service. Affordable,
            high-quality care with convenience and efficiency. Trust us for all
            your laundry needs.
          </p>
        </div>

        <section id="services" class="container-fluid py-5">
  <div class="row">
    <div class="col-lg-3 col-md-6 mb-4">
      <h3>Laundry Service</h3>
      <p>Professional laundry service for your clothes.</p>
    </div>
    <div class="col-lg-3 col-md-6 mb-4">
      <h3>Dry Cleaning</h3>
      <p>Premium dry cleaning service for your delicate garments.</p>
    </div>
  </div>
</section>


        <div class="container-fluid py-5">
          <div class="row">
            {/* <!-- Company Section --> */}
            <div class="col-lg-6">
              <section id="company">
                <div class="mx-auto text-center">
                  <h2>Company</h2>
                  <p>About | Contact us | Blogs | Franchise | FAQs</p>
                </div>
              </section>
            </div>
            {/* 
    <!-- Contact Section --> */}
            <div class="col-lg-6">
              <section id="contact" class="py-5">
                <div class="mx-auto text-center">
                  <h2>Contact us</h2>
                  <p>Email: Apsaraahanumannagar@gmail.com</p>
                  <p>Phone: 9503007527</p>
                  <p>
                    Registered Office: Hanuman Nagar , Near Krida Square Nagpur
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* <!-- Footer --> */}
        <footer class="footer bg-dark text-light py-3">
          <div class="container text-center">
            <p>&copy; 2024 Apsaraa. All rights reserved.</p>
            <p>
              Follow us on:
              <a href="#">Facebook</a> |<a href="#">Linkedin</a> |
              <a href="#">Instagram</a> |<a href="#">Youtube</a> |
              <a href="#">Twitter</a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
