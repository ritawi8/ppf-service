import React from 'react';
import '../styles/OurServices.css';

function OurServices() {
	return (
		<div className="services-container">
			<div className="services-hero">
				<h1 className="services-title">Våra Tjänster</h1>
				<p className="services-subtitle">Professionella PPF-lösningar för din bil</p>
			</div>
			
			<div className="services-content">
				<div className="service-item">
					<div className="service-text">
						<h2>PPF (Paint Protection Film)</h2>
						<p>
							Skydda din bils lack mot repor, stenar och andra skador med vårt 
							högkvalitativa PPF-material. Vi använder endast bästa materialen 
							för optimalt skydd.
						</p>
					</div>
					<div className="service-image">
						<div className="image-placeholder">
							<span>Bild här</span>
						</div>
					</div>
				</div>
				
				<div className="service-item">
					<div className="service-text">
						<h2>Keramisk Beläggning</h2>
						<p>
							Ge din bil långvarigt skydd med vår keramiska beläggning. 
							Detta skyddar inte bara lacken utan ger också en fantastisk glans 
							och enkel rengöring.
						</p>
					</div>
					<div className="service-image">
						<div className="image-placeholder">
							<span>Bild här</span>
						</div>
					</div>
				</div>
				
				<div className="service-item">
					<div className="service-text">
						<h2>Detaljering</h2>
						<p>
							Professionell båtinteriör- och exteriörrengöring för att få din 
							bil att se ut som ny. Vi använder endast bästa produkterna för 
							optimalt resultat.
						</p>
					</div>
					<div className="service-image">
						<div className="image-placeholder">
							<span>Bild här</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default OurServices;
