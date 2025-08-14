import '../styles/About.css';

function About() {
	return (
		<div className="about-container">
			<div className="about-hero">
				<h1 className="about-title">Om Oss</h1>
				<p className="about-subtitle">Vi är ditt förtroendeval för professionella tjänster</p>
			</div>
			
			<div className="about-content">
				<div className="about-section">
					<div className="about-text">
						<h2>Vår Historia</h2>
						<p>
							Vi startade vår resa med en enkel vision: att leverera högkvalitativa 
							tjänster på ett personligt och professionellt sätt. Sedan dess har vi 
							vuxit och utvecklats, men våra kärnvärden förblir desamma.
						</p>
					</div>
					<div className="about-image">
						<div className="image-placeholder">
							<span>Bild här</span>
						</div>
					</div>
				</div>
				
				<div className="about-section reverse">
					<div className="about-text">
						<h2>Våra Värderingar</h2>
						<ul className="values-list">
							<li>Kvalitet i allt vi gör</li>
							<li>Kundfokus och tillförlitlighet</li>
							<li>Innovation och kontinuerlig förbättring</li>
							<li>Hållbarhet och ansvar</li>
						</ul>
					</div>
					<div className="about-image">
						<div className="image-placeholder">
							<span>Bild här</span>
						</div>
					</div>
				</div>
				
				<div className="about-section">
					<div className="about-text">
						<h2>Vårt Team</h2>
						<p>
							Vårt team består av erfarna och passionerade professionella som 
							är dedikerade till att leverera bästa möjliga resultat för våra kunder. 
							Vi tror på samarbete, kreativitet och kontinuerlig utveckling.
						</p>
					</div>
					<div className="about-image">
						<div className="image-placeholder">
							<span>Bild här</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
