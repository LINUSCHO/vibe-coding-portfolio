document.addEventListener('DOMContentLoaded', function() {
	const navToggle = document.querySelector('.nav-toggle');
	const siteNav = document.querySelector('#site-nav');

	if (navToggle && siteNav) {
		navToggle.addEventListener('click', function() {
			const expanded = navToggle.getAttribute('aria-expanded') === 'true';
			navToggle.setAttribute('aria-expanded', String(!expanded));
			siteNav.classList.toggle('open');
		});

		// Close menu on link click (mobile)
		siteNav.addEventListener('click', function(e) {
			const target = e.target;
			if (target && target.tagName === 'A') {
				navToggle.setAttribute('aria-expanded', 'false');
				siteNav.classList.remove('open');
			}
		});
	}

	// Smooth scroll for in-page anchors
	document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
		anchor.addEventListener('click', function(e) {
			const href = anchor.getAttribute('href');
			if (!href || href.length <= 1) return;
			const target = document.querySelector(href);
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});
});
