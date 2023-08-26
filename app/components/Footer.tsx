import Image from "next/image"
import Logo from "../../public/Image/logo.png";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="site-footer">
					<div className="container">
						<div className="footer-content">
							
              <div className="footer-logo">
                <div className="logo">
								<Image src={Logo} alt="Motor Company Logo" />
                
							</div><b>SportNesia</b>
              </div>
							<div className="footer-links">
								<ul>
									<li>
										<b >Maps Site</b>
									</li>
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/about">About Us</Link>
									</li>
									<li>
										<Link href="/contact">Contact</Link>
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
						
						{/* <div className="footer-map">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32654820.88251222!2d117.88879999999999!3d-2.4456499999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2c4c07d7496404b7%3A0xe37b4de71badf485!2sIndonesia!5e0!3m2!1sid!2sid!4v1692888391736!5m2!1sid!2sid"
								width="600"
								height="450"
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div> */}
						<div className="footer-copy">
							&copy; 2023 Motor Company. All rights reserved.
						</div>
					</div>
				</footer>
  )
}
