import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "../../context/ModeContext";
import { ModeType } from "../../types";

interface Props {
  onSelect: () => void;
}

const ModeSelector = ({ onSelect }: Props) => {
  const { setMode } = useMode();

  const handleSelect = (mode: ModeType) => {
    setMode(mode);
    onSelect();
  };

  const cards: {
    mode: ModeType;
    title: string;
    subtitle: string;
    color: string;
    borderColor: string;
  }[] = [
    {
      mode: "tech",
      title: "AI & Tech",
      subtitle: "CS Student, AI Builder, Developer",
      color: "from-tech-accent/20 to-transparent",
      borderColor: "border-tech-accent/40",
    },
    {
      mode: "marketing",
      title: "Marketing",
      subtitle: "Growth Marketer, Strategist, Trainer",
      color: "from-mkt-accent/20 to-transparent",
      borderColor: "border-mkt-accent/40",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center px-6"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-white text-3xl sm:text-4xl font-bold font-spaceGrotesk mb-3">
          Choose Your View
        </h1>
        <p className="text-secondary text-sm">
          Select a portfolio mode or explore everything.
        </p>
      </motion.div>

      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        {cards.map((card, i) => (
          <motion.button
            key={card.mode}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.15, type: "spring", duration: 0.8 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleSelect(card.mode)}
            className={`glass-card bg-gradient-to-br ${card.color} border ${card.borderColor} rounded-2xl p-8 sm:p-10 w-64 sm:w-72 text-center cursor-pointer transition-all hover:shadow-xl`}
          >
            <h2
              className={`text-xl font-bold font-spaceGrotesk mb-2 ${
                card.mode === "tech" ? "text-tech-accent" : "text-mkt-accent"
              }`}
            >
              {card.title}
            </h2>
            <p className="text-secondary text-sm">{card.subtitle}</p>
          </motion.button>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        onClick={() => handleSelect("all")}
        className="text-secondary hover:text-white text-sm font-medium underline underline-offset-4 transition-colors"
      >
        Skip - Show Everything
      </motion.button>
    </motion.div>
  );
};

export default ModeSelector;
