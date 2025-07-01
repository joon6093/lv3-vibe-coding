
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          배달비 대신 현금을 받아가세요! 💰
        </h2>
        <p className="text-lg md:text-xl mb-6 opacity-90">
          포장 주문하고 직접 픽업하면, 사장님이 배달비만큼 현금으로 돌려드려요
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🚶‍♂️</span>
            <span>직접 픽업하고</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">💵</span>
            <span>현금 받아가고</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl">😊</span>
            <span>사장님도 좋아하고</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
