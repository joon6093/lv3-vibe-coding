
import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StoreCard from '../components/StoreCard';
import OrderModal from '../components/OrderModal';

const Index = () => {
  const [selectedStore, setSelectedStore] = useState<{name: string, cashback: number} | null>(null);
  
  const stores = [
    {
      name: '맛있는 분식',
      category: '분식 • 한식',
      rating: 4.8,
      distance: '120m',
      cashback: 3000,
      pickupTime: '15~20분',
      image: '🍜',
      isOpen: true
    },
    {
      name: '치킨마을',
      category: '치킨 • 야식',
      rating: 4.6,
      distance: '200m',
      cashback: 4000,
      pickupTime: '20~25분',
      image: '🍗',
      isOpen: true
    },
    {
      name: '피자스쿨',
      category: '피자 • 양식',
      rating: 4.5,
      distance: '300m',
      cashback: 3500,
      pickupTime: '25~30분',
      image: '🍕',
      isOpen: true
    },
    {
      name: '버거킹',
      category: '햄버거 • 패스트푸드',
      rating: 4.3,
      distance: '150m',
      cashback: 2500,
      pickupTime: '10~15분',
      image: '🍔',
      isOpen: false
    },
    {
      name: '중국집',
      category: '중식 • 탕수육',
      rating: 4.7,
      distance: '250m',
      cashback: 3000,
      pickupTime: '20~25분',
      image: '🥡',
      isOpen: true
    },
    {
      name: '카페모닝',
      category: '카페 • 디저트',
      rating: 4.4,
      distance: '100m',
      cashback: 1500,
      pickupTime: '5~10분',
      image: '☕',
      isOpen: true
    }
  ];

  const handleOrderClick = (store: typeof stores[0]) => {
    setSelectedStore({ name: store.name, cashback: store.cashback });
  };

  const handleCloseModal = () => {
    setSelectedStore(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">근처 포장 가능한 맛집</h2>
          <p className="text-gray-600">직접 가서 픽업하고 현금 캐시백을 받아보세요!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <StoreCard
              key={index}
              {...store}
              onOrderClick={() => handleOrderClick(store)}
            />
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-center">💡 이용 방법</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                📱
              </div>
              <p className="font-medium">1. 앱에서 주문</p>
              <p className="text-sm text-gray-500">메뉴 선택하고 결제</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                🚶‍♂️
              </div>
              <p className="font-medium">2. 매장 방문</p>
              <p className="text-sm text-gray-500">예약 시간에 맞춰 방문</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                🥡
              </div>
              <p className="font-medium">3. 음식 수령</p>
              <p className="text-sm text-gray-500">주문번호로 음식 받기</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                💰
              </div>
              <p className="font-medium">4. 현금 환급</p>
              <p className="text-sm text-gray-500">배달비만큼 현금 받기</p>
            </div>
          </div>
        </div>
      </div>
      
      <OrderModal
        isOpen={selectedStore !== null}
        onClose={handleCloseModal}
        storeName={selectedStore?.name || ''}
        cashback={selectedStore?.cashback || 0}
      />
    </div>
  );
};

export default Index;
