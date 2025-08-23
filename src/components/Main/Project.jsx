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
                    <SwiperSlide className='caja'>
                        <img src={proyectImg(`./proyecto-app-18.png`)} alt='proyectos' />
                        <div className="content">
                            <h3>CoinPlus</h3>
                            <p>Trading platform for cryptocurrencies</p>
                            <p className="tecnologias">
                                React <span> -</span> CSS <span> -</span> Redux <span> -</span> Bootstrap <span> -</span> TypeScript <span> -</span> Solidity <span> -</span> NodeJS <span> -</span> MongoDB
                            </p>
                            <a href="https://coin-plus.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/CoinPlus" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='caja'>
                        <img src={proyectImg(`./proyecto-14.jpg`)} alt='proyectos' />
                        <div className="content">
                            <h3>Justice</h3>
                            <p>Lawyers website</p>
                            <p className="tecnologias">
                                HTML5 <span> -</span> CSS <span> -</span> JavaScript <span> -</span> jQuery <span> -</span> Bootstrap
                            </p>
                            <a href="https://nahuel61920.github.io/Justice/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/Justice" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
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
