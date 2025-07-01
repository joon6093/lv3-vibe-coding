
import React from 'react';
import { Clock, Star, MapPin } from 'lucide-react';

interface StoreCardProps {
  name: string;
  category: string;
  rating: number;
  distance: string;
  cashback: number;
  pickupTime: string;
  image: string;
  isOpen: boolean;
  onOrderClick: () => void;
}

const StoreCard: React.FC<StoreCardProps> = ({
  name,
  category,
  rating,
  distance,
  cashback,
  pickupTime,
  image,
  isOpen,
  onOrderClick
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden">
      <div className="relative">
        <div className="h-52 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center relative">
          <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{image}</div>
          {cashback > 0 && (
            <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
              💰 {cashback.toLocaleString()}원 환급
            </div>
          )}
          {!isOpen && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-bold text-lg">영업종료</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-1">{name}</h3>
            <p className="text-gray-500">{category}</p>
          </div>
          <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
            <Star size={16} className="text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-yellow-700">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-6">
          <div className="flex items-center space-x-1">
            <MapPin size={16} className="text-blue-500" />
            <span className="font-medium">{distance}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={16} className="text-green-500" />
            <span className="font-medium">픽업 {pickupTime}</span>
          </div>
        </div>
        
        <button
          onClick={onOrderClick}
          disabled={!isOpen}
          className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
            isOpen
              ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isOpen ? '포장 주문하기' : '영업종료'}
        </button>
      </div>
    </div>
  );
};

export default StoreCard;
