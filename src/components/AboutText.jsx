import { useState } from "react";

function AboutText() {

const [language, setLanguage] = useState("english")

const bioEng = () => {
    return (
        <>
            <p>After an education as a linguist and language teacher, during which I taught languages for 2 years ; I
                learned web development in order to create applications in the educational field.</p>

            <p>I started learning code and development self-taught in 2021. Followed by joining an intensive code
                learning program where I learned the fundamental skills to create a web application from scratch.
                (HTML/CSS/JS/React/Express/Mongo DB). </p>

            <p>My final project called Web4All was a quiz application for coders wishing to test their knowledge of web
                language, as a Lead Dev Front-End I was in charge of the React rendering and CSS styling with Material
                UI.</p>
        </>
    )
}

const bioFra = () => {

	console.log("biofra")
    return (
        <>
            	<p> Après une formation de linguiste et de professeur de langues, durant laquelle j'ai enseigné pendant 2
				ans ; j'ai appris le développement web afin de créer des applications dans le domaine de l’éducation.

				J'ai commencé à apprendre le codoe et le développement en autodidacte en 2020. Suivi d’un programme
				intensif d'apprentissage du code de 4 mois où j'ai appris les compétences fondamentales pour créer une
				application web à partir de zéro. (HTML/CSS/JS/React/Express/Mongo DB). </p>

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
        </>
    )
}

    return ( 
<div  >
<button onClick={()=>{language === "english" ? setLanguage("french") :  setLanguage("english")}}>{language}</button>
     {language === "english" ? bioFra() : bioEng() }
</div>
     );
}

export default AboutText;