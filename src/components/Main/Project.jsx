import React from 'react';
import '../../pages/Project/ProjectPage.css';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage id='projects' defaultMessage='Projects' />
            </h2>
            <div
                className="proyect-site"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            >
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="proyectos-slider mySwiper"
                >
                    {/* RushRide */}
                    <SwiperSlide className='caja'>
                        <img src={proyectImg(`./rushride.png`)} alt='RushRide' />
                        <div className="content">
                            <h3>RushRide</h3>
                            <p>Local taxi pooling and transport management web application</p>
                            <p className="tecnologias">
                                HTML5 <span> -</span> CSS3 <span> -</span> JavaScript <span> -</span> PHP <span> -</span> MySQL
                            </p>
                            <a href="https://rushridetaxipooling.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer">
                                <span>Demo</span>
                            </a>
                            <a href="https://rushridetaxipooling.vercel.app/" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">
                                Repository
                            </a>
                        </div>
                    </SwiperSlide>

                    {/* AVJ Farm */}
                    <SwiperSlide className='caja'>
                        <img src={proyectImg(`./avjfarm.png`)} alt='AVJ Farm' />
                        <div className="content">
                            <h3>AVJ Farm</h3>
                            <p>Marketplace connecting farmers directly to consumers</p>
                            <p className="tecnologias">
                                HTML5 <span> -</span> CSS3 <span> -</span> JavaScript <span> -</span> PHP <span> -</span> MySQL
                            </p>
                            <a href="https://avjfarm.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer">
                                <span>Demo</span>
                            </a>
                            <a href="YOUR_AVJFARM_REPO_LINK" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">
                                Repository
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>
    );
};

export default React.memo(Project);
