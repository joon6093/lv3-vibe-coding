
import React, { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  storeName: string;
  cashback: number;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, storeName, cashback }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedItems, setSelectedItems] = useState<Array<{name: string, price: number, quantity: number}>>([]);
  
  const menuItems = [
    { name: '불고기버거', price: 5000, emoji: '🍔' },
    { name: '치킨버거', price: 4500, emoji: '🍗' },
    { name: '감자튀김', price: 2500, emoji: '🍟' },
    { name: '콜라', price: 1500, emoji: '🥤' }
  ];

  const handleAddItem = (item: typeof menuItems[0]) => {
    const existingItem = selectedItems.find(selected => selected.name === item.name);
    if (existingItem) {
      setSelectedItems(selectedItems.map(selected => 
        selected.name === item.name 
          ? { ...selected, quantity: selected.quantity + 1 }
          : selected
      ));
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const totalAmount = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const finalAmount = totalAmount;

  const handleOrder = () => {
    alert(`주문 완료! ${storeName}에서 픽업 후 ${cashback.toLocaleString()}원을 현금으로 돌려받으세요!`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">{storeName}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="mb-4 p-3 bg-orange-50 rounded-lg">
            <p className="text-sm text-orange-700">
              💰 포장 픽업 시 <strong>{cashback.toLocaleString()}원</strong>을 현금으로 돌려드립니다!
            </p>
          </div>
          
          <h3 className="font-semibold mb-3">메뉴 선택</h3>
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.price.toLocaleString()}원</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleAddItem(item)}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-sm transition-colors"
                >
                  추가
                </button>
              </div>
            ))}
          </div>
          
          {selectedItems.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold mb-2">선택한 메뉴</h4>
              <div className="space-y-2 mb-4">
                {selectedItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span>{item.name} x {item.quantity}</span>
                    <span>{(item.price * item.quantity).toLocaleString()}원</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">총 주문금액</span>
                  <span className="font-semibold">{totalAmount.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between items-center text-orange-600 font-semibold">
                  <span>픽업 후 현금환급</span>
                  <span>- {cashback.toLocaleString()}원</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold mt-2 pt-2 border-t">
                  <span>실제 결제금액</span>
                  <span>{finalAmount.toLocaleString()}원</span>
                </div>
              </div>
              
              <button 
                onClick={handleOrder}
                className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                {finalAmount.toLocaleString()}원 결제하고 주문하기
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
