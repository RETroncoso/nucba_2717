import Typewriter from "typewriter-effect/dist/core";

const typewriterSpan = document.querySelector(".typewriter");

const typewriter = new Typewriter(typewriterSpan, {
	delay: 100,
	loop: true,
});

export const typewriterInit = () => {
	typewriter
		.pauseFor(1000)
		.typeString("Crypto")
		.pauseFor(500)
		.deleteChars(6)
		.typeString("Tecnología")
		.pauseFor(500)
		.deleteChars(10)
		.typeString("Nucba")
		.pauseFor(500)
		.start();
};
