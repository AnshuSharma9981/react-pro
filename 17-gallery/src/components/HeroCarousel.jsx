
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "JioHome Cricket Offer",
    desc: "Enjoy benefits worth ₹1457, including FREE subscription and cashback.",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e",
    cta: "Claim now",
  },
  {
    title: "Store your memories with FREE 5000 GB Cloud Storage",
    desc: "Get 18 months of Pro cloud storage with Jio plans.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    cta: "Know more",
  },
  {
    title: "Unlimited Entertainment",
    desc: "Access OTT apps, live TV & more with premium plans.",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
    cta: "Explore",
  },
];

export default function HeroCarousel() {

  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, 3000); // ⏱ change time here (3000ms = 3 sec)

  return () => clearInterval(interval); // cleanup
}, []);

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full bg-gray-100 py-10 flex justify-center">
      <div className="relative w-[90%] max-w-6xl h-[420px] overflow-hidden rounded-3xl">

        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 4, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <img
              src={slides[index].image}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-lg">
              <h1 className="text-4xl font-bold leading-tight">
                {slides[index].title}
              </h1>

              <p className="mt-4 text-sm opacity-90">
                {slides[index].desc}
              </p>

              <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full font-semibold transition">
                {slides[index].cta}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

      
        {/* Slide Indicator */}
        <div className="absolute bottom-4 right-6 bg-white/90 px-4 py-1 rounded-full text-sm shadow">
          {index + 1}/{slides.length}
        </div>
      </div>
    </div>
  );
}