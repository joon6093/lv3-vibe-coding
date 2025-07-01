
import React from 'react';
import { MapPin, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-40 backdrop-blur-sm bg-white/90">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">🥡</div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                포장의 민족
              </h1>
              <div className="text-xs text-gray-500 font-medium bg-orange-50 px-3 py-1 rounded-full inline-block">
                그냥 와서 가져가면 배달비 드려요
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
              <MapPin size={18} className="text-orange-500" />
              <span className="font-medium">강남구 역삼동</span>
            </div>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg">
              <User size={18} />
              <span>로그인</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
