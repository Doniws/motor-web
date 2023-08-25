"use client";

import Image from "next/image";
import "./styles/all.scss";
import Logo from "../public/Image/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import bg1 from "../public/Image/b1.jpg";
import bg2 from "../public/Image/b2.jpg";
import bg3 from "../public/Image/b3.jpg";

import { Navigation, Autoplay, Pagination } from "swiper/modules";

import HelmetSvg from "../public/Image/helmet.svg";
import MotorSvg from "../public/Image/motor.svg";
import NewsImg from "../public/Image/motorcyclist-biking-road.jpg";
import MotorModel from "../public/Image/motor-model.png";

// patners
import pt1 from "../public/Image/sp1.png";
import pt2 from "../public/Image/sp2.png";
import pt3 from "../public/Image/sp3.png";

interface BackgroundItem {
  id: number;
  bg: any;
}

export default function Home() {
  const Background: BackgroundItem[] = [
    {
      id: 1,
      bg: bg1,
    },
    {
      id: 2,
      bg: bg2,
    },
    {
      id: 3,
      bg: bg3,
    },
  ];
  return (
    <>
      <div className="container">
        <nav>
          <div className="top-nav">
            <div className="social-media">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-google"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div className="contact">
              <span className="wrap-contact">
                <i className="fa-solid fa-envelope"></i>
                <p>Youremailhere@gmail.com</p>
              </span>
              <span className="wrap-contact">
                <i className="fa-solid fa-phone"></i>
                <p>0658308603</p>
              </span>
            </div>
          </div>
          <div className="bottom-nav">
            <span className="logo">
              <div className="logo-img">
                <Image src={Logo} alt="logo"></Image>
              </div>
              <p>SportNesia</p>
            </span>
            <ul>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">home</a>
              </li>
              <li>
                <a href="">home</a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="intro-main">
          <div className="background">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={1}
            >
              {Background.map((bg) => (
                <SwiperSlide key={bg.id}>
                  <Image src={bg.bg} alt={`Background ${bg.id}`}></Image>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="main-text">
            <div className="wrap-text">
              <b>EXPLORE ROAD CITY</b>
              <h1>DRIVING EXPERIENCE</h1>
              <div className="line-wrap">
                <span className="line"></span>
                <span className="line"></span>
              </div>
              <p>
                Adrenaline is felt in every turn of the wheel, selling more than
                just a sports motocycle, but an undeniable speed and lifestyle
                experience
                <br />
                Let's find out
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </section>
        <section className="container-card-menu">
          <div className="wrapper-card-menu">
            <div className="card">
              <div className="wrap-icon">
                <Image src={HelmetSvg} alt="helmet"></Image>
              </div>
              <h3>
                QUALITY<p> Helmet</p>
              </h3>
              <p>
                When protection is not just an obligation, but a reflection of
                caring for your life, that's when a helmet of unparalleled
                quality becomes a loyal partner on every journey
              </p>
            </div>
            <div className="card-img">
              <div className="wrap-icon">
                <Image src={NewsImg} alt="helmet"></Image>
              </div>
              <div className="wrap-text">
                <h3>
                  OUR<p>Quality</p>
                </h3>
                <p>
                  Our quality is guaranteeed and has been trusted throughout the
                  world with the best quality
                </p>
              </div>
            </div>
            <div className="card">
              <div className="wrap-icon">
                <Image src={MotorSvg} alt="helmet"></Image>
              </div>
              <h3>
                QUALITY<p>Engine</p>
              </h3>
              <p>
                Behind every stunning acceleration lies a marvel of precision
                engineering. The motocycle's high-quality engine is a symbol of
                uncompromosing performance that turns every ride into an
                extraordinary adventure
              </p>
            </div>
          </div>
        </section>
        <section className="service-cycle">
          <h2>
            SPORT<p>Service</p>
          </h2>
          <div className="line-wrap">
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <p>
            Motorcycle sport services provide technical assistance, maintenance,
            and support for enthusiasts. Professionals understand engines,
            components, and offer solutions, maintenance, and gear information.
            Services aim to build lasting customer relationships by
            understanding needs, ensuring comfort, safety, and satisfaction.{" "}
          </p>
          <div className="service-flex">
            <div className="first-flex">
              <div className="img-wrap">
                <Image src={bg3} alt="club"></Image>
              </div>
              <div className="text-wrap">
                <h3>
                  ZX 25R<p></p>
                </h3>
                <p>
                  The Kawasaki Ninja ZX-25R is a masterpiece that combines power
                  and elegance in the realm of sport motorcycles. Powered by a
                  250cc four-cylinder engine, this motorcycle delivers
                  exceptional performance in a compact form. Its aerodynamic
                  design and sharp lines create a futuristic silhouette that
                  reflects its high capabilities. The ZX-25R offers an
                  exhilarating riding experience with instant throttle response
                  and swift acceleration. The four-cylinder engine produces a
                  distinctive roaring sound, adding an extra allure to every
                  twist of the throttle.
                </p>
                <button>Read More</button>
              </div>
            </div>
            <div className="second-flex reverse-flex">
              <div className="img-wrap">
                <Image src={bg3} alt="club"></Image>
              </div>
              <div className="text-wrap">
                <h3>
                  H2R<p></p>
                </h3>
                <p>
                  The Kawasaki Ninja H2R stands as a pinnacle of engineering and
                  performance in the motorcycle world. Powered by a supercharged
                  998cc engine, it unleashes an awe-inspiring amount of power.
                  The aerodynamic design, complete with carbon fiber fairings,
                  aids in maximizing speed. The H2R is a track-focused machine,
                  built for pure speed and adrenaline. With its unparalleled
                  acceleration and top-notch suspension, it offers an
                  unparalleled experience on the racetrack. The advanced
                  electronics package ensures safety and control at high speeds.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </section>

        <section className="offer-product">
          <div className="text-wrap">
            <h2>
              BIKER<p>Offer</p>
            </h2>
            <div className="line-wrap">
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
          <Swiper
            className="wrap-card"
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={2}
            spaceBetween={20}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="card-offer">
              <div className="wrap-img">
                <Image src={bg1} alt="offer"></Image>
              </div>
              <div className="wrap-text">
                <h2>
                  Egine<p>Boster</p>
                </h2>
                <p>price</p>
                <button>Get Offer</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card-offer">
              <div className="wrap-img">
                <Image src={bg1} alt="offer"></Image>
              </div>
              <div className="wrap-text">
                <h2>
                  Egine<p>Boster</p>
                </h2>
                <p>price</p>
                <button>Get Offer</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card-offer">
              <div className="wrap-img">
                <Image src={bg1} alt="offer"></Image>
              </div>
              <div className="wrap-text">
                <h2>
                  Egine<p>Boster</p>
                </h2>
                <p>price</p>
                <button>Get Offer</button>
              </div>
            </SwiperSlide>
            <SwiperSlide className="card-offer">
              <div className="wrap-img">
                <Image src={bg1} alt="offer"></Image>
              </div>
              <div className="wrap-text">
                <h2>
                  Egine<p>Boster</p>
                </h2>
                <p>price</p>
                <button>Get Offer</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="service-cycle">
          <h2>
            About<p>motocycle</p>
          </h2>
          <div className="line-wrap">
            <span className="line"></span>
            <span className="line"></span>
          </div>
          <p>
            The "ZX-25R" refers to a sports motorcycle produced by Japanese
            motorcycle manufacturer Kawasaki. It is a model released to provide
            high performance in the small engine category, with the uniqueness
            of having a four-cylinder engine in a capacity of 250cc.
          </p>
          <div className="service-content">
            <div className="img-wrapper">
              <Image src={MotorModel} alt="motor model"></Image>
            </div>
            <span className="selection">
              <ul className="list">
                <li>
                  <p>Content</p>
                  <i className="fa-solid fa-plus"></i>
                </li>
                <li>
                  <p>Content</p>
                  <i className="fa-solid fa-plus"></i>
                </li>
                <li>
                  <p>Content</p>
                  <i className="fa-solid fa-plus"></i>
                </li>
                <li>
                  <p>Content</p>
                  <i className="fa-solid fa-plus"></i>
                </li>
                <li>
                  <p>Content</p>
                  <i className="fa-solid fa-plus"></i>
                </li>
                <li>
                  <p>Content</p>
                  <i className="fa-solid fa-plus"></i>
                </li>
              </ul>
            </span>
          </div>
        </section>
        {/* ulasan pelangan  */}
        <section className="comment">
          <div className="wrap-comment">
            <div className="img-wrap">
              <Image src={bg1} alt="customer"></Image>
            </div>
            <div className="content">
              <i>
                "Kawasaki motorcycles have long dominated with advanced
                technology and robust performance. Its iconic design not only
                creates an appealing look but also comfortable ergonomics. The
                reliability of the engine and high-quality components ensures a
                smooth and durable riding experience. Kawasaki continues to
                innovate, introducing cutting-edge features that enhance rider
                safety and comfort. From sport models to adventure ones, the
                Kawasaki product lineup offers a variety of choices that cater
                to motorcycle enthusiasts' preferences. Responsive after-sales
                support and a strong community of fans make every Kawasaki
                motorcycle owner feel valued and connected to a community that
                shares the same passion."
              </i>

              <span className="user">
                <div className="line-wrap">
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
                <b>
                  Yasuhiko Hashimoto<p>-CEO Kawasaki motorcycle sport</p>{" "}
                </b>
              </span>
            </div>
          </div>
        </section>
        <section className="patners">
          <div className="text-wrap">
            <h2>
              BIKER<p>Offer</p>
            </h2>
            <div className="line-wrap">
              <span className="line"></span>
              <span className="line"></span>
            </div>
            <p>
              dsajdkasjd Lorem ipsum dolor sit amet consectetur adipisicing
              elit. At saepe facere nam esse. Harum voluptatibus doloremque
              voluptate numquam veniam totam ratione nemo alias enim debitis
              laudantium in vero, aperiam dolorem!
            </p>
          </div>
          <div className="pantners-sportnesia">
            <div className="img-wrap">
              <Image src={pt1} alt="sponsor"></Image>
            </div>
            <div className="img-wrap">
              <Image src={pt2} alt="sponsor"></Image>
            </div>
            <div className="img-wrap">
              <Image src={pt3} alt="sponsor"></Image>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-logo">
                <div className="logo">
                  <Image src={Logo} alt="Motor Company Logo" />
                  <b>SportNesia</b>
                </div>
              </div>
              <div className="footer-links">
                <ul>
                  <li>
                    <b>Maps Site</b>
                  </li>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Products</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="footer-contact">
                <h3>Contact Us</h3>
                <p>123 Motor Street, City</p>
                <p>Email: info@motorcompany.com</p>
                <p>Phone: +123 456 7890</p>
              </div>
            </div>

            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32654820.88251222!2d117.88879999999999!3d-2.4456499999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1692888391736!5m2!1sid!2sid"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="footer-copy">
              &copy; 2023 Motor Company. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
