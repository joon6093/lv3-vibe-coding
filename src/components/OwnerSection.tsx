
import React from 'react';
import { Store, Calculator, Gift, Trophy, Star, Target } from 'lucide-react';

const OwnerSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            🏪 사장님, 이제 직접 관리하세요!
          </h2>
          <p className="text-xl text-blue-700 mb-8">
            가게 등록부터 페이백 설정, 특별 이벤트까지 모두 사장님이 결정!<br/>
            손님이 직접 방문하니 더 정성껏 요리하게 되고, 열심히 하는 손님은 재주문도 늘어납니다!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Store className="text-blue-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">간편 가게 등록</h3>
            <p className="text-gray-600 text-center">
              5분만에 가게 정보 입력하고 바로 서비스 시작! 
              메뉴, 운영시간, 위치 정보를 쉽게 등록하세요.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Calculator className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">수익성 자동 계산</h3>
            <p className="text-gray-600 text-center">
              배달 수수료 vs 페이백 비용을 실시간 비교! 
              최적의 페이백 금액을 AI가 추천해드려요.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <Gift className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-center mb-3">이벤트 자유 설정</h3>
            <p className="text-gray-600 text-center">
              첫 방문 보너스, 시간대별 특가, 날씨 이벤트 등
              창의적인 마케팅을 직접 기획하세요!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            🎮 게이미피케이션으로 더 재미있게!
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">🥇 첫 방문 골든타임</h4>
                  <p className="text-gray-600">
                    "오늘 첫 포장 고객에게 페이백 2배!" 
                    매일 첫 고객을 위한 특별 보상 설정 가능
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="text-pink-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">⭐ 단골 등급 시스템</h4>
                  <p className="text-gray-600">
                    방문 횟수별로 브론즈→실버→골드 등급!
                    높은 등급일수록 더 많은 페이백 제공
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Target className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">🎯 미션 달성 보너스</h4>
                  <p className="text-gray-600">
                    "5번 방문하면 다음엔 5천원 페이백!"
                    고객 재방문을 유도하는 미션 시스템
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift className="text-orange-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">🎁 깜짝 이벤트</h4>
                  <p className="text-gray-600">
                    비 오는 날, 추운 날, 특별한 날에 
                    임의로 페이백 금액 증가 이벤트!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors shadow-lg">
            📋 사장님 가게 등록하기
          </button>
          <p className="text-blue-600 mt-4">
            * 등록비 무료, 월 수수료 없음! 성공한 포장 주문에서만 작은 수수료 *
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnerSection;
