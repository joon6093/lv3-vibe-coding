
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
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-t-lg flex items-center justify-center">
          <div className="text-4xl">{image}</div>
        </div>
        {cashback > 0 && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            💰 {cashback.toLocaleString()}원 환급
          </div>
        )}
        {!isOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-t-lg flex items-center justify-center">
            <span className="text-white font-semibold">영업종료</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-gray-500 text-sm">{category}</p>
          </div>
          <div className="flex items-center space-x-1">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <MapPin size={14} />
            <span>{distance}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>픽업 {pickupTime}</span>
          </div>
        </div>
        
        <button
          onClick={onOrderClick}
          disabled={!isOpen}
          className={`w-full py-2 rounded-lg font-medium transition-colors ${
            isOpen
              ? 'bg-orange-500 hover:bg-orange-600 text-white'
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
