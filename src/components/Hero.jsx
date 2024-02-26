import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto mt-10">
      <motion.div>
        <motion.span
          className="block mb-4  md:text-sm text-indigo-500 font-bold text-[40px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Project Exhibition-2
        </motion.span>
        <motion.h3
          className="text-5xl md:text-5xl font-semibold text-white font-bold "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Plagiarism Detector
        </motion.h3>
        <motion.p
          className="text-base md:text-lg my-4 md:my-6 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          alias.
        </motion.p>
        <motion.button
          className="bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-all hover:bg-indigo-600 active:scale-95  "
          // className="rounded-2xl border-2  border-black bg-indigo-500 px-1 py-3 font-semibold  text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none w-[150px] my-2 md:mx-[0px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          Check it out
        </motion.button>
      </motion.div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/ai2.png",
  },
  {
    id: 2,
    src: "/b2.png",
  },
  {
    id: 3,
    src: "/ml.jpeg",
  },
  {
    id: 4,
    src: "/tensorflow.png",
  },
  {
    id: 5,
    src: "/py.png",
  },
  {
    id: 6,
    src: "/nlp.png",
  },
  {
    id: 7,
    src: "/pla.png",
  },
  {
    id: 8,
    src: "/pla2.png",
  },
  {
    id: 9,
    src: "/nlpp.png",
  },
  {
    id: 10,
    src: "/dlp.png",
  },
  {
    id: 11,
    src: "/github.png",
  },
  {
    id: 12,
    src: "/colab.png",
  },
  {
    id: 13,
    src: "/vpl.png",
  },
  {
    id: 14,
    src: "/nltk.png",
  },
  {
    id: 15,
    src: "/py2.png",
  },
  {
    id: 16,
    src: "/laptop.png",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
