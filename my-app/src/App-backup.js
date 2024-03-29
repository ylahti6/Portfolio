// import React, { useEffect } from "react";
// import "./index.css";
// import "./styles/App.css";

// import { BsLinkedin, BsTwitter, BsGithub, BsInstagram } from "react-icons/bs";
// import { gsap } from "gsap";

// function App() {
//   const githubUrl = "https://github.com/ylahti6";
//   const instagramUrl = "https://www.instagram.com/ylahti6";
//   const codepenUrl = "https://codepen.io/Burgerwhip";

//   useEffect(() => {
//     // gsap
//     const tl = gsap.timeline({
//       default: { duration: 0.75, ease: "power1.out" },
//     });
//     tl.fromTo(
//       "h1",
//       { opacity: 0, x: -100 },
//       { opacity: 1, x: 0, duration: 0.4 }
//     );
//     tl.fromTo(
//       "h3",
//       { opacity: 0, x: -100 },
//       { opacity: 1, x: 0, duration: 0.4 }
//     );
//     tl.fromTo(
//       ".App-header p",
//       { opacity: 0, x: -100 },
//       { opacity: 1, x: 0, duration: 0.4 }
//     );
//     tl.fromTo(
//       ".content-wrap.about",
//       { opacity: 0, x: 100 },
//       { opacity: 1, x: 0, duration: 0.5 },
//       "<"
//     );
//     tl.fromTo(
//       ".work",y6
//       { opacity: 0, x: 100 },
//       { opacity: 1, x: 0, duration: 0.5 }
//     );
//     tl.fromTo(
//       ".writing",
//       { opacity: 0, x: 100 },
//       { opacity: 1, x: 0, duration: 0.5 }
//     );
//     tl.fromTo(
//       ".App-social .one",
//       { opacity: 0, x: -100 },
//       { opacity: 1, x: 0, duration: 0.5 },
//       "<"
//     );
//     tl.fromTo(
//       ".App-social .two",
//       { opacity: 0, x: -100 },
//       { opacity: 1, x: 0, duration: 0.5 }
//     );
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Yannick Lahti</h1>
//         <h3>Front-End developer</h3>
//         <p>Who loves building experiences, fixing issues both online and off, based in london (uk).</p>

//         <div className="App-social">
//           <span>
//             <a
//               href={githubUrl}
//               className="one"
//               target="_blank"
//               rel="noopener noreferrer">
//               <BsGithub className="icon one" />
//             </a>
//             <a
//               href={codepenUrl}
//               className="three"
//               target="_blank"
//               rel="noopener noreferrer">
//               <BsLinkedin className="icon two" />
//             </a>
//           </span>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
