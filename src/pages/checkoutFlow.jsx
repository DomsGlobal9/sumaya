import React, { useState } from 'react';
import { ArrowLeft, Minus, Plus, CreditCard, Truck, RotateCcw, Mail, MessageSquare, MapPin } from 'lucide-react';

const CheckoutFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: '2x Grey Pink Kurti',
      price: 2898,
      quantity: 2,
      image: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: '1x Women Embroidery Kurti',
      price: 799,
      quantity: 1,
      image: '/api/placeholder/60/60'
    }
  ]);

  const [shippingInfo, setShippingInfo] = useState({
    firstName: 'Ramesh',
    lastName: 'Kumar',
    address: '16-1-23/A',
    landmark: 'Ramesh',
    state: 'Telangana',
    city: 'Hyderabad',
    postcode: '500059',
    country: 'India',
    phone: '+91 9000000000',
    email: 'hello@example.com'
  });

  const [orderDetails, setOrderDetails] = useState({
    orderNumber: '123456789',
    date: '04 July 2025',
    paymentMethod: 'Phonepe'
  });

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const updateQuantity = (id, change) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const StepIndicator = ({ step, label, isActive, isCompleted }) => (
    <div className="flex items-center">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
        isCompleted ? 'bg-green-500 text-white' : 
        isActive ? 'bg-orange-500 text-white' : 
        'bg-gray-300 text-gray-600'
      }`}>
        {isCompleted ? '✓' : step}
      </div>
      <span className={`ml-2 text-sm ${isActive ? 'text-orange-500 font-semibold' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  );

  const ShoppingCart = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <div className="flex items-center space-x-8">
            <StepIndicator step={1} label="Shopping Cart" isActive={true} />
            <div className="w-16 h-px bg-gray-300"></div>
            <StepIndicator step={2} label="Checkout" isActive={false} />
            <div className="w-16 h-px bg-gray-300"></div>
            <StepIndicator step={3} label="Order Complete" isActive={false} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <button className="text-gray-500 hover:text-gray-700">
                  Share 📤
                </button>
              </div>

              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-4 border-b">
                    <div className="flex items-center space-x-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500 text-sm">₹{item.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-50"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-50"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <span className="ml-4 font-semibold">₹{item.price * item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <Truck className="w-5 h-5 text-gray-600 mr-2" />
                  <h3 className="font-semibold">Delivery</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">Free next day delivery to stores.</p>
                <p className="text-xs text-gray-500">
                  Home delivery is ₹50 for orders under ₹799 and is FREE for all orders over ₹999.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-3">
                  <RotateCcw className="w-5 h-5 text-gray-600 mr-2" />
                  <h3 className="font-semibold">Free Returns</h3>
                </div>
                <p className="text-sm text-gray-600 mb-2">30 days to return it to us for a refund.</p>
                <p className="text-xs text-gray-500">
                  We have made returns SO EASY - you can now return your order to a store or send it with Delivery FOR FREE.
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Costs</span>
                <span>₹0</span>
              </div>
              <div className="pt-3 border-t">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
            <button className="text-orange-500 text-sm mt-3 hover:underline">
              Apply Coupon
            </button>
            <p className="text-sm text-gray-600 mt-4 mb-4">
              Get Free Shipping for orders over ₹799
            </p>
            <button className="text-blue-600 text-sm hover:underline mb-6">
              Continue Shopping
            </button>
            <button 
              onClick={() => setCurrentStep(2)}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600"
            >
              Checkout | ₹{total}
            </button>
            <div className="mt-4 text-xs text-gray-500">
              SECURE PAYMENTS PROVIDED BY
            </div>
            <div className="flex items-center mt-2 space-x-2">
              <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center">VISA</div>
              <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center">MC</div>
              <div className="w-8 h-5 bg-purple-500 rounded text-white text-xs flex items-center justify-center">PP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CheckoutForm = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setCurrentStep(1)} className="flex items-center text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <div className="flex items-center space-x-8">
            <StepIndicator step={1} label="Shopping Cart" isCompleted={true} />
            <div className="w-16 h-px bg-gray-300"></div>
            <StepIndicator step={2} label="Checkout" isActive={true} />
            <div className="w-16 h-px bg-gray-300"></div>
            <StepIndicator step={3} label="Order Complete" isActive={false} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Shipping Address</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    FIRST NAME *
                  </label>
                  <input 
                    type="text" 
                    value={shippingInfo.firstName}
                    onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LAST NAME *
                  </label>
                  <input 
                    type="text" 
                    value={shippingInfo.lastName}
                    onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ADDRESS *
                </label>
                <input 
                  type="text" 
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  LANDMARK (OPTIONAL)
                </label>
                <input 
                  type="text" 
                  value={shippingInfo.landmark}
                  onChange={(e) => setShippingInfo({...shippingInfo, landmark: e.target.value})}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    STATE *
                  </label>
                  <input 
                    type="text" 
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({...shippingInfo, state: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    POSTCODE / ZIP *
                  </label>
                  <input 
                    type="text" 
                    value={shippingInfo.postcode}
                    onChange={(e) => setShippingInfo({...shippingInfo, postcode: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CITY *
                  </label>
                  <select 
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    COUNTRY / REGION *
                  </label>
                  <select 
                    value={shippingInfo.country}
                    onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PHONE *
                  </label>
                  <input 
                    type="tel" 
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input 
                    type="email" 
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded" />
                  <label className="ml-2 text-sm text-gray-700">
                    I confirm that my address is 100% correct and understand it be issue if the shipment goes to the wrong address.
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded" />
                  <label className="ml-2 text-sm text-gray-700">
                    Sign me up to receive email updates and news (optional)
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">What would you like us to do if an item is out of Stock?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input type="radio" name="stockOption" className="w-4 h-4 text-orange-600" defaultChecked />
                    <label className="ml-2 text-sm text-gray-700">Email</label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="stockOption" className="w-4 h-4 text-orange-600" />
                    <label className="ml-2 text-sm text-gray-700">SMS</label>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Where did you hear About Us?</h3>
                <input 
                  type="text" 
                  placeholder="From a friend, Ad, Instagram, Google, YouTube etc."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Secunderabad, Hyderabad</span>
              </div>
              <div className="flex justify-between">
                <span>Coupon Discount</span>
                <span>₹100</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Costs</span>
                <span>₹0</span>
              </div>
              <div className="pt-3 border-t">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
            <button className="text-orange-500 text-sm mt-3 hover:underline">
              Apply Coupon
            </button>
            <button 
              onClick={() => setCurrentStep(3)}
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 mt-6"
            >
              Place Order | ₹{total - 100}
            </button>
            <div className="mt-4 text-xs text-gray-500">
              SECURE PAYMENTS PROVIDED BY
            </div>
            <div className="flex items-center mt-2 space-x-2">
              <div className="w-8 h-5 bg-red-500 rounded text-white text-xs flex items-center justify-center">VISA</div>
              <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center">MC</div>
              <div className="w-8 h-5 bg-purple-500 rounded text-white text-xs flex items-center justify-center">PP</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const OrderComplete = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setCurrentStep(2)} className="flex items-center text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <div className="flex items-center space-x-8">
            <StepIndicator step={1} label="Shopping Cart" isCompleted={true} />
            <div className="w-16 h-px bg-gray-300"></div>
            <StepIndicator step={2} label="Checkout" isCompleted={true} />
            <div className="w-16 h-px bg-gray-300"></div>
            <StepIndicator step={3} label="Order Complete" isActive={true} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Confirmation */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold mb-4">Thank you for your purchase!</h2>
              <p className="text-gray-600 mb-6">
                Your order will be processed within 24 hours during working days. We will notify you by email once your order has been shipped.
              </p>
              
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 mb-8">
                Track Order
              </button>

              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
                <div className="text-gray-600 space-y-1">
                  <p><strong>Name:</strong> {shippingInfo.firstName} {shippingInfo.lastName}</p>
                  <p><strong>Address:</strong> {shippingInfo.address}, {shippingInfo.landmark}</p>
                  <p><strong>City:</strong> {shippingInfo.city}</p>
                  <p><strong>State:</strong> {shippingInfo.state}</p>
                  <p><strong>Postcode/ZIP:</strong> {shippingInfo.postcode}</p>
                  <p><strong>Country:</strong> {shippingInfo.country}</p>
                  <p><strong>Phone:</strong> {shippingInfo.phone}</p>
                  <p><strong>Email:</strong> {shippingInfo.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            
            <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
              <div>
                <p className="font-medium">Date</p>
                <p className="text-gray-600">{orderDetails.date}</p>
              </div>
              <div>
                <p className="font-medium">Order Number</p>
                <p className="text-gray-600">{orderDetails.orderNumber}</p>
              </div>
              <div>
                <p className="font-medium">Payment Method</p>
                <p className="text-gray-600">{orderDetails.paymentMethod}</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-semibold">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Costs</span>
                <span>₹0</span>
              </div>
              <div className="pt-2 border-t">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Order Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <ShoppingCart />;
      case 2:
        return <CheckoutForm />;
      case 3:
        return <OrderComplete />;
      default:
        return <ShoppingCart />;
    }
  };

  return (
    <div className="font-sans">
      {renderCurrentStep()}
    </div>
  );
};

export default CheckoutFlow;