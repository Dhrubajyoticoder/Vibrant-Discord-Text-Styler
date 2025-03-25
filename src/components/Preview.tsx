import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import "tailwindcss";

interface Color {
  name: string;
  color: string;
  code: string;
}

interface TextPreviewProps {
  text: string;
  color: Color;
}

const TextPreview: React.FC<TextPreviewProps> = ({ text, color }) => {
  const [formattedText, setFormattedText] = useState("");
  const [copied, setCopied] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!text) {
      setFormattedText("");
      setDisplayText("");
      return;
    }

    const formatted = color.code
      ? `\`\`\`${color.code}${text}${color.code.includes("\n") ? "" : " ]"}\`\`\``
      : text;

    setFormattedText(formatted);
    setDisplayText(text);
  }, [text, color]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!text) {
    return (
      <motion.div
        className="border border-dashed border-gray-300 rounded-xl p-6 text-center text-gray-500 bg-white shadow-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Enter some text above to see the preview
      </motion.div>
    );
  }

  return (
    <motion.div
      className="space-y-6 bg-white p-6 rounded-xl shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">Preview</h3>
        <motion.button
          className={`
            flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium shadow-sm
            transition-all duration-200
            ${copied ? "bg-green-600 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-700"}
          `}
          onClick={copyToClipboard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? (
            <>
              <Check size={16} />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copy Code</span>
            </>
          )}
        </motion.button>
      </div>

      <div className="bg-gray-900 text-white rounded-xl p-5 font-mono shadow-inner border border-gray-800">
        <p
          className="whitespace-pre-wrap break-words text-sm"
          style={{ color: color.color !== "#ffffff" ? color.color : "#ffffff" }}
        >
          {displayText}
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-300 rounded-xl p-5 font-mono shadow-sm">
        <pre className="whitespace-pre-wrap break-words text-sm text-gray-700">{formattedText}</pre>
      </div>
    </motion.div>
  );
};

export default TextPreview;