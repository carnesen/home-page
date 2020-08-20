import React = require('react');

export const MainPage: React.FunctionComponent = () => (
	<div style={{ width: '100%' }}>
		<div className="card">
			<div className="space-wrap">
				<div style={{ padding: '30px' }}>
					<img src="/images/me.jpg" alt="head shot" className="head-shot" />
				</div>
				<div className="name-title">
					<a
						href="/documents/Chris_Arnesen.pdf"
						style={{ textDecoration: 'none;color:inherit' }}
					>
						<h1 className="full-name">Chris Arnesen</h1>
						<h3 className="current-title">Web Engineer</h3>
					</a>
				</div>
			</div>
			<div className="social-links">
				<a href="https://www.instagram.com/chrisarnesen">
					<img src="/images/instagram.svg" alt="icon for instagram" />
				</a>
				<a href="https://www.facebook.com/Mark.Christian.Arnesen">
					<img src="/images/facebook.svg" alt="icon for facebook" />
				</a>
				<a href="https://github.com/carnesen">
					<img src="/images/github.svg" alt="icon for github" />
				</a>
				<a href="https://www.linkedin.com/in/carnesen">
					<img src="/images/linkedin.svg" alt="icon for linkedin" />
				</a>
				<a href="https://www.twitter.com/chrisarnesen">
					<img src="/images/twitter.svg" alt="icon for twitter" />
				</a>
			</div>
		</div>
	</div>
);
