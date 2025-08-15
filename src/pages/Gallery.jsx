import React from 'react';
import '../styles/ServicesAndGallery.css';

function Gallery() {
	return (
		<div className="services-container">
			<div className="services-hero">
				<h1 className="services-title">Bildgalleri</h1>
				<p className="services-subtitle">Se våra senaste PPF-projekt och resultat</p>
			</div>
			
			<div className="services-content">
				<div className="service-item">
					<div className="service-text">
						<h2>PPF Installation</h2>
						<p>
							Professionell installation av Paint Protection Film på olika 
							biltyper. Vi använder endast bästa materialen för optimalt 
							skydd av din bils lack.
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
						<h2>Före & Efter</h2>
						<p>
							Dramatisk förbättring av bils utseende med våra 
							professionella tjänster. Se skillnaden med egna ögon 
							och upplev transformationen.
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
							Perfekt rengöring och polering av både interiör och 
							exteriör. Vi använder professionella produkter för 
							bästa möjliga resultat.
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

export default Gallery;
