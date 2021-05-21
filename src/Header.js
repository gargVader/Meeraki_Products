import React from 'react'

function Header() {
    return (
        <div>
            {/* Hero Section start*/}
            <section id="hero" class="hero d-flex align-items-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 d-flex flex-column justify-content-center">

                            <h1 data-aos="fade-up">WE ARE HERE FOR YOU</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">With innumerable products, an in-house logistics team, and
                            distribution locations across the India we are the preferred source for raw material solutions. We
            seamlessly connect our customers and suppliers in winning relationships - globally and domestically.</h2>
                            <div data-aos="fade-up" data-aos-delay="600">
                                <div class="text-center text-lg-start">
                                    <a href="#about"
                                        class="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Know More</span>
                                        <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                            <img src="assets/img/hero-img-2.png" class="img-fluid-custom" alt="" />


                        </div>
                    </div>
                </div>
            </section>
            {/* Hero section end */}

            {/* About section start */}
            <section id="about" class="about">

                <div class="container" data-aos="fade-up">
                    <div class="row gx-0">

                        <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <h3>HOW WE STAND OUT</h3>
                                <h2>Customer Service Oriented Company</h2>
                                <p>
                                    Meeraki is an industry leading chemical distributor with capabilities that ensure you are always stocked
                                    with the chemicals and
                                    API’s(Active Pharmaceutical Ingredients) you need. We understand the importance of timely shipping and
                                    have built our business
                                    around reliable services. From start to finish, our customers know that they can trust our team to
                                    deliver only the highest quality
                                    customer service— and always on time.
                                </p>

                                <p>
                                    M/s Meeraki was established to fill the gap that existed in customer service in the chemical
                                    distribution industry, and
                                    to help the manufacturers. By being able to have a robust customer service team so that they can also
                                    make the most of
                                    this opportunity. M/s Meeraki is redefining the distributor experience by serving customers across the
                                    globe, using a
                                    sophisticated supply chain and distribution model that helps manufacturers increase both their profit
                                    margins and market
                                    share.
                                </p>

                                <div class="text-center text-lg-start">
                                    <a href="#values"
                                        class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                        <span>Read More</span>
                                        <i class="bi bi-arrow-right"></i>
                                    </a>

                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                            <img src="assets/img/about.jpg" class="img-fluid" alt="" />
                        </div>

                    </div>
                </div>

            </section>
            {/* About section end */}

            {/* Values section start */}

            <section id="values" class="values">

                <div class="container" data-aos="fade-up">
                    <header class="section-header">
                        <p>Our Values</p>
                    </header>

                    <div class="row">

                        <div class="col-lg-4">
                            <div class="box" data-aos="fade-up" data-aos-delay="200">
                                <img src="assets/img/Honesty-03.png" class="img-fluid" alt="" />
                                <h3>Transparency & Honesty</h3>
                                <p>We firmly believe that the success of our company is built on a foundation
                                of transparency, trust, and integrity. The strength and diversity of our team
                                is the most important reason for our success.We currently serve customers in
                                India and offer overseas manufacturers an entry point to the Indian. We’re
                                not just a distributor; we are your ideal supply chain partner, helping you
                                capture new markets and maximize your profits.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 mt-4 mt-lg-0">
                            <div class="box" data-aos="fade-up" data-aos-delay="600">
                                <img src="assets/img/fastest_time_response-02.png" class="img-fluid" alt="" />
                                <h3>Fastest Response Time</h3>
                                <p>We pride ourselves on our commitment to help consumer supply chain
                                augmentation with the fastest turnaround time in the Industry. We
                                tailor our business to meet your supply side goals and ultimate success.
                                It is our goal to eliminate all of customers supply chain inefficiencies and downtime.</p>
                            </div>
                        </div>

                        <div class="col-lg-4 mt-4 mt-lg-0">
                            <div class="box" data-aos="fade-up" data-aos-delay="400">
                                <img src="assets/img/Logistic_Excellence-01.jpg" class="img-fluid" alt="" />
                                <h3>Logistical Excellence</h3>
                                <p>Whether in rail, truck, or ship, our experienced logistics
                                team is dedicated to get your product to your door safely and on time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Values section end */}
        </div>
    )
}

export default Header;
