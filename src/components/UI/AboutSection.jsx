import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="7" md="8">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to LUXARIDE</h2>
              <p className="section__description">
              The company itself is a very successful company.
              The pleasures of flattery are those who accuse them of being worthy of labor. Let me come, the suppleness of the body in the times, in truth seek the tender heart of the pain of repudiation, for it is spared from the pain! It does not prevent it from being at times like the pain of the present.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>  The customer is very happy.              
                </p>
               
              
                <p className="section__description d-flex align-items-center gap-2 ">
                  <i class="ri-checkbox-circle-line"></i>Experience the luxury of a ride.
                </p>
              </div>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Your satisfaction is our top priority
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Safe, reliable and always on time.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                <i class="ri-checkbox-circle-line"></i>Your taxi, your ride, your choice!
                </p>

                <p className="section__description d-flex align-items-center gap-3">
                <i class="ri-checkbox-circle-line"></i>From door to door – always with care
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
