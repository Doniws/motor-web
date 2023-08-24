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
								<p>ewdwjiosajdio@gmail.com</p>
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
							<h1>OUTSTANDING RIDES</h1>
							<div className="line-wrap">
								<span className="line"></span>
								<span className="line"></span>
							</div>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
								tempore ducimus praesentium neque nihil? Saepe accusamus fugit
								consequatur iste tenetur voluptates assumenda corporis eligendi
								quidem ea, blanditiis unde nostrum reprehenderit.
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
								BIKER<p>Shop</p>
							</h3>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
						</div>
						<div className="card-img">
							<div className="wrap-icon">
								<Image src={NewsImg} alt="helmet"></Image>
							</div>
							<div className="wrap-text">
								<h3>
									BIKER<p>News</p>
								</h3>
								<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
							</div>
						</div>
						<div className="card">
							<div className="wrap-icon">
								<Image src={MotorSvg} alt="helmet"></Image>
							</div>
							<h3>
								BIKER<p>Shop</p>
							</h3>
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
						</div>
					</div>
				</section>
				<section className="service-cycle">
					<h2>
						BIKER<p>ClubService</p>
					</h2>
					<div className="line-wrap">
						<span className="line"></span>
						<span className="line"></span>
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
						quibusdam modi saepe similique eius culpa enim. Totam, velit soluta
						suscipit laboriosam mollitia pariatur deleniti facere numquam
						obcaecati id eius accusantium?
					</p>
					<div className="service-flex">
						<div className="first-flex">
							<div className="img-wrap">
								<Image src={bg3} alt="club"></Image>
							</div>
							<div className="text-wrap">
								<h3>
									BUILDING <p>Bldsss</p>
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Mollitia consequuntur, laboriosam reprehenderit enim facere
									animi voluptas laborum tempora molestias tenetur cumque,
									impedit quasi odit repellat nihil error architecto perferendis
									in.
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
									BUILDING <p>Bldsss</p>
								</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									Mollitia consequuntur, laboriosam reprehenderit enim facere
									animi voluptas laborum tempora molestias tenetur cumque,
									impedit quasi odit repellat nihil error architecto perferendis
									in.
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
						BIKER<p>ClubService</p>
					</h2>
					<div className="line-wrap">
						<span className="line"></span>
						<span className="line"></span>
					</div>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
						quibusdam modi saepe similique eius culpa enim. Totam, velit soluta
						suscipit laboriosam mollitia pariatur deleniti facere numquam
						obcaecati id eius accusantium?
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
								temporibus voluptatibus ut doloribus voluptatem consequuntur
								aliquam maxime modi deserunt ipsa dicta unde, fugit numquam
								eveniet. Quaerat accusamus blanditiis dolor mollitia?
							</i>

							<span className="user">
								<div className="line-wrap">
									<span className="line"></span>
									<span className="line"></span>
								</div>
								<b>
									DDonidw wasap<p>Owner BUGATI MOTOR SPORT</p>{" "}
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
										<b >Maps Site</b>
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
