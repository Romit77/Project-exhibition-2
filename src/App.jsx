// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <div className="relative overflow-hidden">
//       <ExampleContent />
//       <FuzzyOverlay />
//     </div>
//   );
// };

// const FuzzyOverlay = () => {
//   return (
//     <motion.div
//       initial={{ transform: "translateX(-10%) translateY(-10%)" }}
//       animate={{
//         transform: "translateX(10%) translateY(10%)",
//       }}
//       transition={{
//         repeat: Infinity,
//         duration: 0.2,
//         ease: "linear",
//         repeatType: "mirror",
//       }}
//       style={{
//         backgroundImage: 'url("/black-noise.png")',
//       }}
//       className="pointer-events-none absolute -inset-[100%] opacity-[15%]"
//     />
//   );
// };

// const ExampleContent = () => {
//   return (
//     <div className="relative grid h-screen place-content-center space-y-6 bg-neutral-950 p-8">
//       <motion.p
//         className="text-center text-6xl font-black text-neutral-50"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//       >
//         Welcome to Plagiarism Detector<span className="text-[#00df9a]">.</span>
//       </motion.p>
//       <motion.p
//         className="text-center text-neutral-400 font-semibold"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1 }}
//       >
//         Made in <span className="text-[#00df9a]">Python</span> and{" "}
//         <span className="text-[#00df9a]">TensorFlow</span> 🚀
//       </motion.p>
//       <div className="flex items-center justify-center gap-3">
//         <motion.button
//           className="text-neutral-20 w-fit px-4 py-2 font-semibold text-neutral-200 transition-colors hover:bg-neutral-800 rounded-md"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.5 }}
//         >
//           <a href="/" target="_blank">
//             About
//           </a>
//         </motion.button>
//         <motion.button
//           className="w-fit bg-neutral-200 px-4 py-2 font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 rounded-md"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2 }}
//         >
//           <a href="/" target="_blank">
//             Check it out
//           </a>
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;
