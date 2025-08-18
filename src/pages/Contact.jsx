import React from 'react';
import '../styles/Contact.css';

function Contact() {
	return (
		<div className="contact-container">
			<div className="contact-card">
				<div className="contact-header">
					<h1>Kontakta Oss</h1>
					<p>Vi finns här för att hjälpa dig</p>
				</div>
				
				<div className="contact-info">
					<div className="contact-item">
						<div className="contact-icon">📞</div>
						<div className="contact-details">
							<h3>Telefon</h3>
							<p>+46 70 123 45 67</p>
						</div>
					</div>
					
					<div className="contact-item">
						<div className="contact-icon">✉️</div>
						<div className="contact-details">
							<h3>E-post</h3>
							<p>info@ppf-service.se</p>
						</div>
					</div>
					
					<div className="contact-item">
						<div className="contact-icon">📍</div>
						<div className="contact-details">
							<h3>Adress</h3>
							<p>Bilgatan 123<br />123 45 Stockholm</p>
						</div>
					</div>
					
					<div className="contact-item">
						<div className="contact-icon">🕒</div>
						<div className="contact-details">
							<h3>Öppettider</h3>
							<p>Måndag - Fredag: 08:00 - 18:00<br />Lördag: 09:00 - 15:00<br />Söndag: Stängt</p>
						</div>
					</div>
				</div>
				
				<div className="contact-footer">
					<p>Ring oss gärna direkt - vi älskar att prata med våra kunder!</p>
				</div>
			</div>
		</div>
	);
}

export default Contact;
