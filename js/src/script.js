/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
// JavaScript can be used for interactivity like toggling sections

document.addEventListener("DOMContentLoaded", () => {
	const sections = document.querySelectorAll("section");

	sections.forEach((section) => {
		section.addEventListener("click", () => {
			section.classList.toggle("expanded");
		});
	});
});
const content = {
	en: {
		bannerText:
			"I am an AWS developer including having skills in web development tools like Angular, Node.js, and TypeScript.",
		name: "Ravindra Pralhad Murthy (RPM)",
		position: "Senior Software Developer FRANCE",
		summaryTitle: "Summary",
		summaryContent:
			"Highly motivated software developer with 5 years of experience in building web applications. Proficient in JavaScript, HTML, CSS, and various frameworks such as React and Node.js. Strong problem-solving skills and ability to work in a team environment.",
		experienceTitle: "Experience",
		experienceItems: [
			{
				title: "Senior Systems Engineer ",
				company: "INFOSYS LTD",
				date: "July 2020 - Present",
				responsibilities: [
					"Developed and maintained web applications using React.js and Node.js.",
					"Collaborated with cross-functional teams to deliver high-quality software products.",
					"Participated in code reviews and provided constructive feedback to team members.",
				],
			},
			{
				title: "Software Engineer",
				company: "ABC Solutions",
				date: "January 2018 - June 2020",
				responsibilities: [
					"Designed and implemented RESTful APIs using Express.js.",
					"Worked closely with UX designers to create user-friendly interfaces.",
					"Optimized application performance and scalability.",
				],
			},
		],
		educationTitle: "Education",
		educationItems: [
			{
				degree: "Bachelor of Science in Computer Science",
				university: "University of Example",
				date: "2014 - 2018",
			},
		],
	},
	fr: {
		bannerText:
			"Je suis un développeur AWS avec des compétences en développement web telles que Angular, Node.js et TypeScript.",
		name: "Ravindra Pralhad Murthy (RPM)",
		position: "Développeur Principal FRANCE",
		summaryTitle: "Résumé",
		summaryContent:
			"Développeur de logiciels hautement motivé avec 5 ans d'expérience dans la construction d'applications web. Maîtrise de JavaScript, HTML, CSS et divers frameworks tels que React et Node.js. Solides compétences en résolution de problèmes et capacité à travailler en équipe.",
		experienceTitle: "Expérience",
		experienceItems: [
			{
				title: "Développeur Principal",
				company: "XYZ Tech Inc.",
				date: "Juillet 2020 - Présent",
				responsibilities: [
					"Développé et maintenu des applications web en utilisant React.js et Node.js.",
					"Collaboré avec des équipes pluridisciplinaires pour fournir des produits logiciels de haute qualité.",
					"Participé aux revues de code et fourni des retours constructifs aux membres de l'équipe.",
				],
			},
			{
				title: "Ingénieur Logiciel",
				company: "Solutions ABC",
				date: "Janvier 2018 - Juin 2020",
				responsibilities: [
					"Conçu et implémenté des APIs RESTful en utilisant Express.js.",
					"Travaillé en étroite collaboration avec des concepteurs UX pour créer des interfaces conviviales.",
					"Optimisé les performances et la scalabilité de l'application.",
				],
			},
		],
		educationTitle: "Éducation",
		educationItems: [
			{
				degree: "Licence en informatique",
				university: "Université d'Exemple",
				date: "2014 - 2018",
			},
		],
	},
};

let currentLanguage = "en";

function toggleLanguage() {
	currentLanguage = currentLanguage === "en" ? "fr" : "en";
	updateContent();
}

function updateContent() {
	document
		.getElementById("banner")
		.querySelector(".running-line p").textContent =
		content[currentLanguage].bannerText;
	document.getElementById("name").textContent = content[currentLanguage].name;
	document.getElementById("position").textContent =
		content[currentLanguage].position;
	document.getElementById("summary-title").textContent =
		content[currentLanguage].summaryTitle;
	document.getElementById("summary-content").textContent =
		content[currentLanguage].summaryContent;

	const experienceSection = document.getElementById("experience");
	experienceSection.querySelector("h2").textContent =
		content[currentLanguage].experienceTitle;
	const { experienceItems } = content[currentLanguage];
	let experienceHTML = "";
	experienceItems.forEach((item) => {
		experienceHTML += `
		<li>
		  <h3>${item.title}</h3>
		  <p>${item.company}</p>
		  <p>${item.date}</p>
		  <ul>
			${item.responsibilities
				.map((responsibility) => `<li>${responsibility}</li>`)
				.join("")}
		  </ul>
		</li>
	  `;
	});
	experienceSection.querySelector("ul").innerHTML = experienceHTML;

	const educationSection = document.getElementById("education");
	educationSection.querySelector("h2").textContent =
		content[currentLanguage].educationTitle;
	const { educationItems } = content[currentLanguage];
	let educationHTML = "";
	educationItems.forEach((item) => {
		educationHTML += `
		<li>
		  <h3>${item.degree}</h3>
		  <p>${item.university}</p>
		  <p>${item.date}</p>
		</li>
	  `;
	});
	educationSection.querySelector("ul").innerHTML = educationHTML;
}

// Initial language setting
updateContent();
