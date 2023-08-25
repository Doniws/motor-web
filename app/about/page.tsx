import NavBar from "../components/NavBar";
import Quot from "../../public/Image/kutip.svg";

import Image from "next/image";
import NewsImg from "../../public/Image/b1.jpg";

import Footer from "../components/Footer";

export default function about() {
	return (
		<main className="container">
			<NavBar />
			<section className="container-about">
				<div className="wrapper-bg">
					<h1>ABOUT US</h1>
				</div>
				<div className="content">
					<div className="text-wrap">
						<h3 className="service">
							We are a team of passoniate people who love to make, enjoy and
							drive motorcycles!
						</h3>
						<div className="img-wrap">
							<Image src={Quot} alt="quot" />
						</div>
						<b>OUR MISSION</b>
						<div className="line-wrap">
							<span className="line"></span>
							<span className="line"></span>
						</div>
						<i className="">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
							minima accusantium, exercitationem ab fugiat recusandae sunt
							eligendi blanditiis laboriosam doloremque reprehenderit, nihil
							adipisci iste maxime maiores perspiciatis est cum architecto.
						</i>
					</div>
					<div className="wrap-card">
						<div className="card-img">
							<div className="wrap-icon">
								<Image src={NewsImg} alt="helmet"></Image>
							</div>
							<div className="wrap-text">
								<h3>
									BIKER<p>News</p>
								</h3>
							</div>
						</div>
						<div className="card-img">
							<div className="wrap-icon">
								<Image src={NewsImg} alt="helmet"></Image>
							</div>
							<div className="wrap-text">
								<h3>
									BIKER<p>News</p>
								</h3>
							</div>
						</div>
						<div className="card-img">
							<div className="wrap-icon">
								<Image src={NewsImg} alt="helmet"></Image>
							</div>
							<div className="wrap-text">
								<h3>
									BIKER<p>News</p>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="nesia-team">
					<h2>
						BIKER<p>ClubTeam</p>
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

					<div className="wrap-card">
						<div className="card-img">
							<div className="wrap-icon">
								<Image src={NewsImg} alt="helmet"></Image>
							</div>
							<div className="wrap-text">
								<h3>
									Bill gates
								</h3>
								<p>CEO</p>
								<p>Phone : 08585858</p>
							</div>
						</div>
						<div className="card-img">
							<div className="wrap-icon">
								<Image src={NewsImg} alt="helmet"></Image>
							</div>
							<div className="wrap-text">
								<h3>
									Bill gates
								</h3>
								<p>CEO</p>
								<p>Phone : 08585858</p>
							</div>
						</div>
						<div className="card-img">
							<div className="wrap-icon">
								<Image src={NewsImg} alt="helmet"></Image>
							</div>
							<div className="wrap-text">
								<h3>
									Bill gates
								</h3>
								<p>CEO</p>
								<p>Phone : 08585858</p>
							</div>
						</div>
					</div>
				</section>
				<Footer />
		</main>
	);
}
