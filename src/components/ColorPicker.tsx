import React from "react";
import { motion } from "framer-motion";
import { Paper, Button } from "@mantine/core";
import "tailwindcss";

type Color = {
  name: string;
  color: string;
  code: string;
};

type ColorPickerProps = {
  onColorChange: (color: Color) => void;
  selectedColor: Color;
};

const ColorPicker: React.FC<ColorPickerProps> = ({ onColorChange, selectedColor }) => {
  const discordColors: Color[] = [
    { name: "Default", color: "#ffffff", code: "" },
    { name: "Gray", color: "#95a5a6", code: "fix" },
    { name: "Black", color: "#000000", code: "" },
    { name: "Red", color: "#dc3545", code: "diff\n- " },
    { name: "Orange", color: "#fd7e14", code: "css\n[" },
    { name: "Yellow", color: "#ffc107", code: "fix\n# " },
    { name: "Green", color: "#28a745", code: "diff\n+ " },
    { name: "Blue", color: "#007bff", code: "ini\n[" },
    { name: "Purple", color: "#6f42c1", code: "apache\n# " },
    { name: "Pink", color: "#e83e8c", code: "yaml\n" },
    { name: "Teal", color: "#20c997", code: "json\n" },
    { name: "Cyan", color: "#17a2b8", code: "bash\n" },
    { name: "Lime", color: "#a3e635", code: "scss\n" },
    { name: "Indigo", color: "#6610f2", code: "html\n" },
    { name: "Brown", color: "#795548", code: "xml\n" },
    { name: "Magenta", color: "#ff00ff", code: "ruby\n" },
    { name: "Olive", color: "#808000", code: "perl\n" },
    { name: "Navy", color: "#000080", code: "go\n" }
  ];

  const handleColorSelect = (color: Color) => {
    onColorChange(color);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <Paper shadow="xl" p="lg" radius="lg" withBorder className="mb-6 p-10 rounded-2xl bg-gray-100 dark:bg-gray-800 max-w-4xl mx-auto">
      <label className="block text-lg font-bold text-gray-900 dark:text-white mb-4 text-center uppercase tracking-wide">
        Select a Color Theme
      </label>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {discordColors.map((color) => (
          <motion.div key={color.name} variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              fullWidth
              variant={selectedColor.name === color.name ? "filled" : "outline"}
              color={color.color}
              onClick={() => handleColorSelect(color)}
              className={`w-12 h-12 text-xs font-semibold rounded-full transition-all duration-300 shadow-md hover:shadow-lg border flex items-center justify-center ${
                selectedColor.name === color.name ? "ring-2 ring-offset-1 ring-gray-900 dark:ring-gray-400" : "border-gray-300"
              }`}
              styles={{
                root: {
                  backgroundColor: color.color,
                  color: color.color === "#ffffff" ? "#000" : "#fff",
                  borderColor: color.color,
                },
              }}
            >
              {color.name}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </Paper>
  );
};

export default ColorPicker;