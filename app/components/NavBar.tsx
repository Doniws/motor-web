import Image from "next/image";
import Logo from "../../public/Image/logo.png";
import Link from "next/link";

export default function NavBar() {
	return (
		<>
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
							<p>SportNesia@gmail.com</p>
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
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/about">About</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
