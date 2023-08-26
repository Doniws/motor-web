import NavBar from "../components/NavBar";
import Quot from "../../public/Image/kutip.svg";

import Image from "next/image";
import NewsImg from "../../public/Image/b1.jpg";

import Footer from "../components/Footer";

export default function contact() {
	return (
		<main className="container">
			<NavBar />
			<section className="container-contact">
				<div className="wrapper-bg">
					<h1>CONTACT US</h1>
				</div>
				<div className="content">
					<div className="text-wrap">
						<b>HOW FIND US</b>
						<div className="line-wrap">
							<span className="line"></span>
							<span className="line"></span>
						</div>
						<p className="">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
							minima accusantium, exercitationem ab fugiat recusandae sunt
							eligendi blanditiis laboriosam doloremque reprehenderit, nihil
							adipisci iste maxime maiores perspiciatis est cum architecto.
						</p>
					</div>
					<div className="wrap-card">
						<div className="card-img">
							<div className="wrap-icon">
              <iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32654820.88251222!2d117.88879999999999!3d-2.4456499999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1692888391736!5m2!1sid!2sid"
								width="600"
								height="450"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
							</div>
							<div className="wrap-text"> 
								<h3>
									BIKER<p>Location</p>
								</h3>
							</div>
						</div>
						<div className="card-form">
							<form action="">

								<input type="text" placeholder="Full Name "/>
								<input type="text" placeholder="Email "/>
								<input type="text" placeholder="Message "/>
								<button>Send</button>
							</form>
						</div>
						
					</div>
				</div>
			</section>
			
				<Footer />
		</main>
	);
}
