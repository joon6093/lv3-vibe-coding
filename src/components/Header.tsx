
import React from 'react';
import { MapPin, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🥡</div>
            <h1 className="text-2xl font-bold text-orange-500">포장의 민족</h1>
            <span className="text-sm text-gray-500 font-medium bg-orange-50 px-2 py-1 rounded-full">
              그냥 와서 가져가면 배달비 드려요
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-gray-600">
              <MapPin size={16} />
              <span className="text-sm">강남구 역삼동</span>
            </div>
            <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-2 rounded-lg">
              <User size={16} />
              <span className="text-sm">로그인</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
