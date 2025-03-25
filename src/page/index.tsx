import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import ColorPicker from '../components/ColorPicker';
import TextPreview from '../components/Preview';
import "tailwindcss";

interface Color {
  name: string;
  color: string;
  code: string;
}

const Index: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<Color>({ 
    name: 'Default', 
    color: '#ffffff',
    code: ''
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleColorChange = (color: Color) => {
    setSelectedColor(color);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-100">
      <Header />
      
      <main className="flex-1 flex justify-center items-center py-12 px-4">
        <div className="container px-6 md:px-12 max-w-5xl mx-auto">
          <motion.div 
            className="bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 p-10 md:p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-gray-900 p-8 rounded-3xl shadow-lg border border-gray-700">
              <h2 className="text-4xl font-bold mb-6 text-gray-100">Create Stunning Discord Messages</h2>
              <p className="text-lg text-gray-400 mb-8">Use markdown syntax to generate colorful and engaging Discord messages effortlessly.</p>
              <div className="mb-8">
                <label htmlFor="message" className="block text-xl font-semibold mb-3">Your Message</label>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-5 py-4 border border-gray-600 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500 bg-gray-900 text-lg text-gray-100 shadow-lg"
                    placeholder="Type your message here..."
                    value={text}
                    onChange={handleTextChange}
                  />
                </motion.div>
              </div>
              
              <ColorPicker 
                onColorChange={handleColorChange}
                selectedColor={selectedColor}
              />
              
              <TextPreview 
                text={text}
                color={selectedColor}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-100 text-center">Enhance Your Messages with Colors</h2>
            <p className="text-lg text-gray-400 text-center mb-6">Choose from a variety of colors to style your Discord text using simple syntax.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[ 
                { title: 'Bold Red', color: '#dc3545', syntax: '- Warning: Critical Error!' },
                { title: 'Vibrant Green', color: '#28a745', syntax: '+ Success: Operation Completed!' },
                { title: 'Cool Blue', color: '#007bff', syntax: '[ Information: System Update ]' },
                { title: 'Bright Yellow', color: '#ffc107', syntax: '# Alert: Check Your Inbox' },
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 * index }}
                >
                  <h3 className="font-bold text-2xl mb-3 text-gray-100">{item.title}</h3>
                  <div className="bg-gray-800 text-center p-4 rounded-lg w-full font-mono text-lg shadow-md border border-gray-700" style={{ color: item.color }}>
                    {item.syntax}
                  </div>
                  <p className="text-md text-gray-400 mt-2">Use: <span className="font-mono text-gray-300">{item.syntax}</span></p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Index;
