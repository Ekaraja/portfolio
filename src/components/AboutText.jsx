import "./styles/aboutText.css"
import { useState } from "react";

function AboutText() {

	const [language, setLanguage] = useState("english")

	const bioEng = () => {
		return (
			<article className="--fade-in-left" key={language}>
				<p>After an education as a linguist and language teacher, during which I taught for 2 years; I learned web development to create applications in the field of education. I started learning codoe and development as a self-taught in 2020. Followed by a 4 month intensive code learning program where I learned the fundamental skills to create a web application from scratch (HTML/CSS/JS/React/Express/Mongo DB).</p>

				<p>
					To date after 1 year and a half of freelancing, I have satisfied about thirty customers through various front-end missions ranging from :
				</p>
				<li>The resolution of CSS and Javascript bugs</li>
				<li>The creation of a single or multiple components for a large web project</li>
				<li>The convertion of HTML/CSS/JS & React models</li>
				<li>The reproduction of an identical site</li>



				<p>
					Voluntary person, always looking for improvement and solution; rather creative and rarely short of ideas!
					During my university education, I learned mostly to learn, therefore I welcome very willingly the technologies that are unknown to me. In general I am passionate about the things I study. That's what allowed me to get into coding quickly. Moreover I regularly do technology watch to keep up with the fast evolution in the world of web development.

				</p>

				<p>
					I am actively looking for a company to start a work-study program in December 2022. It's a 16 months internship, where I'll study the following technologies :
				</p>
				<li>PHP & Laravel</li>
				<li>VueJS</li>
				<li>Flutter</li>
				<li>API REST & GraphQL</li>
				<li>NoSQL</li>


			</article>
		)
	}

	const bioFra = () => {

		console.log("biofra")
		return (
			<article className="--fade-in-right about-paragraph" key={language}>
				<p> Après une formation de linguiste et de professeur de langues, durant laquelle j'ai enseigné pendant 2
					ans ; j'ai appris le développement web afin de créer des applications dans le domaine de l’éducation.

					J'ai commencé à apprendre le code et le développement en autodidacte en 2020. Suivi d’un programme
					intensif d'apprentissage du code de 4 mois où j'ai appris les compétences fondamentales pour créer une
					application web à partir de zéro. (HTML/CSS/JS/React/Express/Mongo DB). </p>

					<figure className="fiver-figure"><div className="fiver-reviews"><img src="/public/assets/fiver-reviews-full.jpeg" alt="Fiver reviews" /></div><figcaption>Feedbacks de clients récents</figcaption></figure>

				<p>A ce jour après 1 an et demi de freelance, j'ai satisfait une trentaine de client à travers des missions
					front-end variée allant de : </p>

				<ul>
					<li>La résolution de bugs CSS et Javascript</li>
					<li>La création d'un seul ou plusieurs composant pour un gros projet web</li>
					<li>L'intégration de maquettes en HTML/CSS/JS & React</li>
					<li>La reproduction à l'identique d'un site</li>
				</ul>

				Personne volontaire, toujours dans la recherche d’amélioration et l'apport de solution ; plutôt créative et
				rarement à court d’idée !
				<p>
					Lors de ma formation universitaire, j'ai surtout appris à apprendre, par conséquent j'accueil très
					volontiers les technologies qui me sont inconnus. De manière général je suis passionné par les choses
					que j'étudie. C'est ce qui m'a permis de me reconvertir dans le code rapidement. En outre je fais
					régulièrement de la veille technologique pour me tenir au courant de l'évolution rapide dans le monde du
					développement web.</p>

				<p>
					Je cherche activement une entreprise pour débuter une alternance en décembre 2022. C'est une alternance de 16 mois, où j'approfondirai les technologies suivantes :

					<ul>
						<li>PHP & Laravel</li>
						<li>Vue JS</li>
						<li>Flutter</li>
						<li>API REST & GraphQL</li>
						<li>NoSQL</li>
					</ul>
				</p>

				<figure className="github-stats">
					<img src="https://camo.githubusercontent.com/f0f3f78c8e78f0a896bad4cb98656e7e218850fcdf5cb81a6092adaca61ed9bd/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d456b6172616a61267468656d653d6e696768746f776c26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365" alt="" data-canonical-src="https://github-readme-stats.vercel.app/api?username=Ekaraja&amp;theme=nightowl&amp;hide_border=false&amp;include_all_commits=false&amp;count_private=false"></img>
					<img src="https://camo.githubusercontent.com/fef242b0f868c64ad2b5df73a8ad6dcb60d6f9bd5c94664c3eadb90032dbb76b/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d456b6172616a61267468656d653d6e696768746f776c26686964655f626f726465723d66616c736526696e636c7564655f616c6c5f636f6d6d6974733d66616c736526636f756e745f707269766174653d66616c7365266c61796f75743d636f6d70616374" alt="" data-canonical-src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ekaraja&amp;theme=nightowl&amp;hide_border=false&amp;include_all_commits=false&amp;count_private=false&amp;layout=compact"></img>
				</figure>
			</article>
		)
	}

	return (
		<>
			<button className="change-lang-button" onClick={() => { language === "english" ? setLanguage("french") : setLanguage("english") }}>{language}</button>
			{language === "english" ? bioFra() : bioEng()}
		</>
	);
}

export default AboutText;