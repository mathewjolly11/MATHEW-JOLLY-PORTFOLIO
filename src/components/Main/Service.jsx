import React from 'react';
import '../../pages/Service/ServicesPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi-language */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage id='services' defaultMessage='Services' />
        </h2>
        <div className="row">
            {/* Design UX/UI */}
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-drafting-compass"></i>
                <h3>
                    <FormattedMessage id='design' defaultMessage='Design UX/UI' />
                </h3>
                <p>
                    <FormattedMessage 
                        id='design-info' 
                        defaultMessage='Design of attractive interfaces for web and mobile, enhancing the brand or product.'
                    />
                </p>
            </div>

            {/* Web Development */}
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage id='development' defaultMessage='Web Development' />
                </h3>
                <p>
                    <FormattedMessage 
                        id='development-info' 
                        defaultMessage='Well-structured responsive web pages with interactive and user-friendly design.'
                    />
                </p>
            </div>

            {/* Digital Marketing */}
            {/* <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-chart-line"></i>
                <h3>
                    <FormattedMessage id='marketing' defaultMessage='Digital Marketing' />
                </h3>
                <p>
                    <FormattedMessage 
                        id='marketing-info' 
                        defaultMessage='SEO and digital marketing strategies to increase your online visibility.'
                    />
                </p>
            </div> */}

            {/* Web Maintenance */}
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-wrench"></i>
                <h3>
                    <FormattedMessage id='maintenance' defaultMessage='Web Maintenance' />
                </h3>
                <p>
                    <FormattedMessage 
                        id='maintenance-info' 
                        defaultMessage='Complete maintenance, updates, bug fixes, and new functionality implementation.'
                    />
                </p>
            </div>

            {/* Mobile App Development */}
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i className="fas fa-mobile-alt"></i>
                <h3>
                    <FormattedMessage id='mobile-app' defaultMessage='Mobile WebApp Development' />
                </h3>
                <p>
                    <FormattedMessage 
                        id='mobile-app-info' 
                        defaultMessage='Design and develop native and cross-platform mobile applications with modern UI/UX.'
                    />
                </p>
            </div>

            {/* Cloud Solutions */}
            {/* <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fas fa-cloud"></i>
                <h3>
                    <FormattedMessage id='cloud-solutions' defaultMessage='Cloud Solutions' />
                </h3>
                <p>
                    <FormattedMessage 
                        id='cloud-solutions-info' 
                        defaultMessage='Deploy and manage your applications on cloud platforms like AWS, Azure, or Google Cloud for scalability and security.'
                    />
                </p>
            </div> */}
        </div>

        <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet/>
            </Link>
        </div>
    </section>
);

export default React.memo(Service);
