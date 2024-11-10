import React from 'react';
import { TbExternalLink } from "react-icons/tb";
const Home = () => {
  return (
    <div className='bg-black'>
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Hi, I'm M.Hamza
        </h1>
        <p className="text-xl text-slate-200">Graphic Designer & Digital Marketer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <h3 className="text-3xl font-semibold mb-2 text-white">Featured Project 1</h3>
          <p className="text-slate-200 mb-4 text-2xl">Design Sample</p>
          <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
            View Project <TbExternalLink size={16} className="ml-1" />
          </a>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-2 text-white">Featured Project 2</h3>
          <p className="text-slate-200 mb-4 text-2xl">Marketing Sample</p>
          <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
            View Project <TbExternalLink size={16} className="ml-1" />
          </a>
        </div>
        <div>
          <h3 className="text-3xl font-semibold mb-2 text-white">Featured Project 3</h3>
          <p className="text-slate-200 mb-4 text-2xl">Statisfied Client</p>
          <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
            View Project <TbExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
