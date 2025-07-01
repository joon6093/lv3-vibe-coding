
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 text-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            배달비 대신<br />
            <span className="text-yellow-300">현금을 받아가세요!</span> 💰
          </h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            포장 주문하고 직접 픽업하면, 사장님이 배달비만큼 현금으로 돌려드려요
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            <div className="flex items-center space-x-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-3xl">🚶‍♂️</span>
              <span className="text-lg font-medium">직접 픽업하고</span>
            </div>
            <div className="flex items-center space-x-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-3xl">💵</span>
              <span className="text-lg font-medium">현금 받아가고</span>
            </div>
            <div className="flex items-center space-x-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="text-3xl">😊</span>
              <span className="text-lg font-medium">모두가 행복</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
