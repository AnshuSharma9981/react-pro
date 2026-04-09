// Slide.jsx
import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    type: "MONTHLY PLAN",
    title: "Super celebration plan",
    price: "₹500",
    subtext: "Unlimited 5G | 2 GB/Day | 28 Days",
    colorClass: "from-blue-700 to-blue-400",
  },
  {
    type: "ANNUAL PLAN",
    title: "Hero Recharge",
    price: "₹3599",
    subtext: "Unlimited 5G | 2.5 GB/Day | 365 Days",
    colorClass: "from-pink-600 to-pink-400",
  },
  {
    type: "DATA ADD-ON",
    title: "Flexi pack",
    price: "₹103",
    subtext: "5 GB | 28 Days",
    colorClass: "from-teal-600 to-teal-400",
  },
  {
    type: "MONTHLY PLAN",
    title: "Super celebration plan",
    price: "₹500",
    subtext: "Unlimited 5G | 2 GB/Day | 28 Days",
    colorClass: "from-blue-700 to-blue-400",
  },
  {
    type: "DATA ADD-ON",
    title: "Flexi pack",
    price: "₹103",
    subtext: "5 GB | 28 Days",
    colorClass: "from-teal-600 to-teal-400",
  },
];

export default function Slide() {
  const [activeIndex, setActiveIndex] = useState(1);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % plans.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  return (
    <div className="w-full h-[80vh] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 overflow-hidden relative">
      {/* Left */}
      <button
        onClick={prev}
        className="absolute left-6 z-30 bg-white/90 backdrop-blur rounded-full p-3 shadow-xl hover:scale-110 transition"
      >
        ◀
      </button>

      {/* Carousel */}
      <div className="relative flex items-center justify-center w-full max-w-6xl h-[400px]">
        {plans.map((plan, index) => {
          const offset = index - activeIndex;
          const isActive = index === activeIndex;

          return (
            <motion.div
              key={index}
              animate={{
                scale: isActive ? 1.15 : 0.92,
                opacity: isActive ? 1 : 0.75,
                filter: isActive ? "blur(0px)" : "blur(2px)",
                x: offset * 280,
                zIndex: isActive ? 20 : 10,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="absolute"
            >
              <SlideCard {...plan} active={isActive} />
            </motion.div>
          );
        })}
      </div>

      {/* Right */}
      <button
        onClick={next}
        className="absolute right-6 z-30 bg-white/90 backdrop-blur rounded-full p-3 shadow-xl hover:scale-110 transition"
      >
        ▶
      </button>
    </div>
  );
}

// SlideCard Component (same file to avoid duplicate imports)
function SlideCard({ type, title, price, subtext, colorClass, active }) {
  return (
    <motion.div
      className={`w-[260px] h-[340px] rounded-2xl p-5 text-white shadow-xl bg-gradient-to-br ${colorClass} relative overflow-hidden`}
      animate={{
        boxShadow: active
          ? "0px 25px 60px rgba(0,0,0,0.4)"
          : "0px 10px 25px rgba(0,0,0,0.2)",
      }}
    >
      {/* Badge */}
      <div className="absolute top-4 left-4 text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur">
        {type}
      </div>

      {/* Content */}
      <div className="mt-12 space-y-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="text-4xl font-bold">{price}</div>
        <p className="text-sm opacity-90">{subtext}</p>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-4 left-5 right-5 text-xs opacity-80">
        Enjoy seamless connectivity with premium benefits.
      </div>

      {/* Glow */}
      {active && (
        <div className="absolute inset-0 bg-white/10 blur-2xl opacity-20" />
      )}
    </motion.div>
  );
}
