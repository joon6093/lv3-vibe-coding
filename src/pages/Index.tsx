import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StoreCard from '../components/StoreCard';
import OrderModal from '../components/OrderModal';
import OwnerSection from '../components/OwnerSection';
import GameElements from '../components/GameElements';

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
      <GameElements />
      
      {/* Main Content - 매장 리스트 */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">근처 포장 가능한 맛집</h2>
            <p className="text-gray-600 text-lg">직접 가서 픽업하고 현금 캐시백을 받아보세요!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <StoreCard
                key={index}
                {...store}
                onOrderClick={() => handleOrderClick(store)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">💡 이용 방법</h3>
            <p className="text-gray-600 text-lg">간단한 4단계로 현금을 받아가세요</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                📱
              </div>
              <h4 className="text-xl font-bold mb-3">1. 앱에서 주문</h4>
              <p className="text-gray-600">메뉴 선택하고 미리 결제</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                🚶‍♂️
              </div>
              <h4 className="text-xl font-bold mb-3">2. 매장 방문</h4>
              <p className="text-gray-600">예약 시간에 맞춰 방문</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                🥡
              </div>
              <h4 className="text-xl font-bold mb-3">3. 음식 수령</h4>
              <p className="text-gray-600">주문번호로 음식 받기</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                💰
              </div>
              <h4 className="text-xl font-bold mb-3">4. 현금 환급</h4>
              <p className="text-gray-600">배달비만큼 현금 받기</p>
            </div>
          </div>
        </div>
      </section>

      <OwnerSection />
      
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
