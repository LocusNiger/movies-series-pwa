import MoviesOfTheMonth from "../components/MoviesOfTheMonth/index";
import SeriesOfTheMonth from "../components/SeriesOfTheMonth/index";
import Search from "../components/Search/index";
import { motion, useTransform, useMotionValue, AnimatePresence } from "framer-motion";

const HomeWithLogin = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-85, 0, 85], [1.3, 1, 0.7]);
  return (
    <>
      <AnimatePresence>
        <motion.section>
          <div
            className="max-w-screen-xl h-full px-4 pt-12 mx-auto lg:items-center lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
          >
            <motion.div
              className="max-w-3xl mx-auto text-center h-auto"
              style={{ scale, x }}
              drag="x"
              dragConstraints={{ left: -85, right: 85 }}
            >
              <h1 className="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-20">
                Trending M&S
              </h1>
            </motion.div>
          </div>
        </motion.section>
      </AnimatePresence>
      <Search />
      <MoviesOfTheMonth />
      <SeriesOfTheMonth />
    </>
  );
};

export default HomeWithLogin;
