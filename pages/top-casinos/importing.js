const fetchHeader = async () => {
	if (document.getElementById('header')) {
		try {
			const response = await fetch('components/header/header.html');
			const data = await response.text();
			document.getElementById('header').innerHTML = data;
		} catch (error) {
			console.error('Error fetching header:', error);
		}
	}
};

const fetchFooter = async () => {
	if (document.getElementById('footer')) {
		try {
			const response = await fetch('../../components/footer.html')
			const data = await response.text();
			document.getElementById('footer').innerHTML = data
		} catch (err) {
			console.log('Error fetch happend', err);
		}
	}
}

// document.addEventListener('DOMContentLoaded', fetchHeader);
document.addEventListener('DOMContentLoaded', fetchFooter);