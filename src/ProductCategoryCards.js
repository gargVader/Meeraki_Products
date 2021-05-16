import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container
} from 'reactstrap';
import { Link } from "react-router-dom"
import App from './App'

function ProductCategoryCards() {
    return (
        <div>
            {/* Product section start */}
            <section id="portfolio" class="portfolio">
                <div class="container" data-aos="fade-up">
                    <header class="section-header">
                        <h2>Products</h2>
                        <p>Check our latest products</p>
                    </header>
                    <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        <div class="col-lg-12 col-md-12 portfolio-item align-items-stretch">
                            <Container>
                                <Row>
                                    <Col md={3}> <Link to="/silicones"> <App id={0} /> </Link> </Col>
                                    <Col md={3}> <Link to="/paints"> <App id={1} /> </Link> </Col>
                                    <Col md={3}> <Link to="/silver_ion_technology"> <App id={2} /> </Link> </Col>
                                    <Col md={3}> <Link to="/leather_chemicals"> <App id={3} /> </Link> </Col>
                                </Row>

                                <Row className="justify-content-center">
                                    <Col md={3}> <Link to="/api"> <App id={4} /> </Link> </Col>
                                    <Col md={3}> <Link to="/renewable_energy_products"> <App id={5} /> </Link> </Col>
                                    <Col md={3}> <Link to="/water_treatment_chemicals"> <App id={6} /> </Link> </Col>
                                    <Col md={3}> <Link to="/construction_chemicals"> <App id={7} /> </Link> </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product section end */}

            {/* Team section start */}
            <section id="team" class="team">
                <div class="container" data-aos="fade-up">
                    <header class="section-header">
                        <p>Team</p>
                    </header>
                    <div class="row gy-4 justify-content-center">
                        <div class="col-lg-3 col-md-6 d-flex align-items" data-aos="fade-up" data-aos-delay="400">
                            <div class="member">
                                <div class="member-img">
                                    <img src="assets/img/team/nitin.jpg" class="img-fluid" alt="" />
                                    <div class="social">
                                        <a href=""><i class="bi bi-twitter"></i></a>
                                        <a href=""><i class="bi bi-facebook"></i></a>
                                        <a href=""><i class="bi bi-instagram"></i></a>
                                        <a href=""><i class="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h4>Nitin Salarpuria</h4>
                                    <span>Proprieter</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Team section end */}

            {/* Contact section start */}
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">
                    <header className="section-header">
                        <h2>Contact</h2>
                        <p>Contact Us</p>
                    </header>
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="row gy-4">
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-geo-alt" />
                                        <h3>Address</h3>
                                        <p>19 Mohini Mohan Road <br />Kolkata, India 700020</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-telephone" />
                                        <h3>Call Us</h3>
                                        <p>+91 98303 77242 <br />+91 79802 86087 <br /> </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-envelope" />
                                        <h3>Email Us</h3>
                                        <p>meeraki.chem@gmail.com <br /> <br /> </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="info-box">
                                        <i className="bi bi-clock" />
                                        <h3>Open Hours</h3>
                                        <p>Monday - Friday<br />9:00AM - 05:00PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form action="POST" data-netlify="true">
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 ">
                                        <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea className="form-control" name="message" rows={6} placeholder="Message" required defaultValue={""} />
                                    </div>
                                    <div className="col-md-12">
                                        <input type="file" name="myfile" id="myfile" placeholder="Upload File" rows={6} />
                                    </div>
                                    <div className="col-md-12">
                                        <div data-netlify-recaptcha="true" rows={6} />
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <button type="submit" name="submit" className="btn btn-success">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact section end */}
        </div>
    )
}

export default ProductCategoryCards;
