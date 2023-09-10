import './footer.styles.scss'


const Footer =()=>{
	return(
		<div className="footer-container">
			<div className="about">
				<h2>CROWN CLOTHING PVT LTD.</h2>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Cumque porro blanditiis laboriosam quos totam quas deleniti 
					cupiditate soluta aut, id ab doloremque consectetur inventore 
					exercitationem accusantium fuga dolore aliquam quis.</p>
			</div>
			<div className="customer-care">
				<ul>
				<h3>Contact us</h3>
					<li> Customer care : 9988776655</li>
					<li> Email : aslamsidhik22@gmail.com</li>
					<li> HQ : 221 SOUTH 20TH STREET,
						SUITE 721 NEW YORK NY 19016</li>
				</ul>
			</div>
			<div className="news">
				<p>Blog</p>
				<p>Press</p>
				<p>Exhibitions</p>
			</div>
		</div>
	)
}

export default Footer;