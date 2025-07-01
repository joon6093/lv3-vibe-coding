
import React from 'react';
import { Crown, Zap, Clock, Gift } from 'lucide-react';

const GameElements = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          🎮 특별한 혜택이 기다려요!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
            <Crown size={32} className="mx-auto mb-3 text-yellow-300" />
            <h3 className="font-semibold mb-2">첫 방문 왕관</h3>
            <p className="text-sm opacity-90">오늘 첫 포장 고객<br/>페이백 2배!</p>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
            <Zap size={32} className="mx-auto mb-3 text-yellow-300" />
            <h3 className="font-semibold mb-2">번개 타임</h3>
            <p className="text-sm opacity-90">랜덤 시간대<br/>추가 보너스!</p>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
            <Clock size={32} className="mx-auto mb-3 text-yellow-300" />
            <h3 className="font-semibold mb-2">시간 마법사</h3>
            <p className="text-sm opacity-90">5분 내 픽업<br/>페이백 +500원!</p>
          </div>
          
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
            <Gift size={32} className="mx-auto mb-3 text-yellow-300" />
            <h3 className="font-semibold mb-2">깜짝 선물</h3>
            <p className="text-sm opacity-90">특별한 날<br/>서프라이즈 혜택!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameElements;
