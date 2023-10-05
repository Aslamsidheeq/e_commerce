import './footer.styles.scss'


const Footer =()=>{
	return(
		<div className="footer-container">
			<div className="about">
				<h2>CROWN CLOTHING PVT LTD.</h2>
				<p> Fully responsive Kids collections e-commerce website with kids clothing for boys and girls,toys in different category and all using React Js library. Firebase for authentication and firestore for storing data.
					Implemented sign in , sign up and cart functionalities.</p>
			</div>
			<div className="customer-care">
				<ul>
				<h3>Contact us</h3>
					<li> Customer care : 9988776655</li>
					<li> Email : abc@gmail.com</li>
					<li> HQ : 221 SOUTH 20TH STREET,
						SUITE 721 NEW YORK NY 19016</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer;