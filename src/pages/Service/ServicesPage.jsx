import React from 'react';
import './ServicesPage.css'

/* Components */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Accordion from './Accordion';

/* Multi-language */
import { FormattedMessage } from 'react-intl';

const Services = () => {
  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main className="service-page">

        {/* Services Section */}
        <section className="servicios" id="servicios">
          <h2 className="heading">
            <FormattedMessage id='services' defaultMessage='Services' />
          </h2>

          <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <i className="fas fa-drafting-compass"></i>
              <h3>
                <FormattedMessage id='design' defaultMessage='Design UX/UI' />
              </h3>
              <p>
                <FormattedMessage id='design-info' defaultMessage='Design of attractive interfaces for web and mobile, enhancing the brand or product.' />
              </p>
            </div>

            <div className="columns" data-aos="fade-up" data-aos-delay="300">
              <i className="fas fa-laptop"></i>
              <h3>
                <FormattedMessage id='development' defaultMessage='Web Development' />
              </h3>
              <p>
                <FormattedMessage id='development-info' defaultMessage='Well-structured responsive web pages with interactive and user-friendly design.' />
              </p>
            </div>

            {/* <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <i className="fas fa-chart-line"></i>
              <h3>
                <FormattedMessage id='marketing' defaultMessage='Digital Marketing' />
              </h3>
              <p>
                <FormattedMessage id='marketing-info' defaultMessage='SEO and digital marketing strategies to increase your online visibility.' />
              </p>
            </div> */}

            <div className="columns" data-aos="fade-up" data-aos-delay="500">
              <i className="fas fa-wrench"></i>
              <h3>
                <FormattedMessage id='maintenance' defaultMessage='Web Maintenance' />
              </h3>
              <p>
                <FormattedMessage id='maintenance-info' defaultMessage='Complete maintenance, updates, bug fixes, and new functionality implementation.' />
              </p>
            </div>

             <div className="columns" data-aos="fade-up" data-aos-delay="800">
    <i className="fas fa-mobile-alt"></i>
    <h3>
      <FormattedMessage id='mobile-app' defaultMessage='Mobile App Development' />
    </h3>
    <p>
      <FormattedMessage id='mobile-app-info' defaultMessage='Design and develop native and cross-platform mobile applications with modern UI/UX.' />
    </p>
  </div>

  {/* New Service 2
  <div className="columns" data-aos="fade-up" data-aos-delay="900">
    <i className="fas fa-cloud"></i>
    <h3>
      <FormattedMessage id='cloud-solutions' defaultMessage='Cloud Solutions' />
    </h3>
    <p>
      <FormattedMessage id='cloud-solutions-info' defaultMessage='Deploy and manage your applications on cloud platforms like AWS, Azure, or Google Cloud for scalability and security.' />
    </p>
  </div> */}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="site-services">
          <h2 className="heading">
            {/* <FormattedMessage id='services-price' defaultMessage='Pricing' /> */}
          </h2>

          <div className="row">

            {/* Essential Plan */}
            {/* <div className="columns" data-aos="fade-up" data-aos-delay="200">
              <h3>Essential</h3>
              <h4 className="sub-title">Perfect for new businesses</h4>
              <p className="numero"><span>₹</span>13,100</p>
              <ul className="ul-cards-services">
                <li><i className="fas fa-check"></i> 1 responsive page</li>
                <li><i className="fas fa-check"></i> +3 sections per page</li>
                <li><i className="fas fa-check"></i> Contact form</li>
                <li><i className="fas fa-check"></i> Domain for 1 year</li>
                <li><i className="fas fa-check"></i> Hosting for 1 year</li>
                <li><i className="fas fa-check"></i> Delivered in 5 business days</li>
              </ul>
            </div> */}

            {/* Professional Plan */}
            {/* <div className="columns recomendado" data-aos="fade-up" data-aos-delay="300">
              <h3>Professional</h3>
              <h4 className="sub-title">Designed for medium businesses</h4>
              <p className="numero"><span>₹</span>34,700</p>
              <ul className="ul-cards-services">
                <li><i className="fas fa-check"></i> 5 responsive pages</li>
                <li><i className="fas fa-check"></i> +3 sections per page</li>
                <li><i className="fas fa-check"></i> Contact form</li>
                <li><i className="fas fa-check"></i> Domain for 1 year</li>
                <li><i className="fas fa-check"></i> Hosting for 1 year</li>
                <li><i className="fas fa-check"></i> Animations included</li>
                <li><i className="fas fa-check"></i> Free maintenance for 6 months</li>
                <li><i className="fas fa-check"></i> Delivered in 7 business days</li>
              </ul>
            </div> */}

            {/* Premium Plan */}
            {/* <div className="columns" data-aos="fade-up" data-aos-delay="400">
              <h3>Premium</h3>
              <h4 className="sub-title">Ideal for large websites</h4>
              <p className="numero"><span>₹</span>61,200</p>
              <ul className="ul-cards-services">
                <li><i className="fas fa-check"></i> +10 responsive pages</li>
                <li><i className="fas fa-check"></i> +3 sections per page</li>
                <li><i className="fas fa-check"></i> Contact form</li>
                <li><i className="fas fa-check"></i> Domain for 1 year</li>
                <li><i className="fas fa-check"></i> Hosting for 1 year</li>
                <li><i className="fas fa-check"></i> Animations included</li>
                <li><i className="fas fa-check"></i> Free maintenance for 1 year</li>
                <li><i className="fas fa-check"></i> Delivered in 14 business days</li>
              </ul>
            </div> */}

          </div>
        </section>

        {/* FAQ Section */}
        <section className="preguntas">
          <h2 className="heading">
            <FormattedMessage id='services-questions' defaultMessage='Frequently Asked Questions' />
          </h2>
          <div className="accordion-container">
            <Accordion
              title="What is a responsive web page?"
              content="A responsive web page adapts to any device such as smartphones, tablets, or laptops without losing functionality or aesthetics."
              dataAos="fade-right"
              dataAosDelay="300"
            />
            <Accordion
              title="What is a Domain and Hosting?"
              content="Domain is the website address, while hosting provides space and resources to launch your website."
              dataAos="fade-left"
              dataAosDelay="300"
            />
            <Accordion
              title="Is monthly maintenance necessary?"
              content="Regular maintenance helps attract and retain users, updates content, and improves SEO ranking."
              dataAos="fade-right"
              dataAosDelay="300"
            />
            {/* <Accordion
              title="How to pay?"
              content="Payments can be made online via credit/debit card or bank transfer."
              dataAos="fade-left"
              dataAosDelay="300"
            /> */}
          </div>
        </section>

      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Services;
