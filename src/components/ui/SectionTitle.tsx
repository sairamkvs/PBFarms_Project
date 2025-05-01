import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-xl text-gray-600">{subtitle}</p>
      <div className="flex items-center justify-center mt-4">
        <div className="h-1 w-10 bg-gray-200 rounded-full"></div>
        <div className="h-1 w-20 mx-2 bg-green-600 rounded-full"></div>
        <div className="h-1 w-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionTitle;