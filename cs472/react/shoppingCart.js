import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedFlavor, setSelectedFlavor] = useState('Pike Place');
  const [showImage, setShowImage] = useState(false);
  const [quantity, setQuantity] = useState('24 Count (pack of 4)');
  const [orderedQuantity, setOrderedQuantity] = useState('');

  const handleFlavorChange = (flavor) => {
    setSelectedFlavor(flavor);
  };

  const handleCheckout = () => {
    setOrderedQuantity(`Ordered <b>${selectedFlavor}</b> of <b>${quantity}</b>`);
  };

  const handleImageHover = (isHovered) => {
    setShowImage(isHovered);
  };

  const imageSrc = selectedFlavor === 'Pike Place'
    ? 'https://m.media-amazon.com/images/I/814-cZVGojL._SX679_PIbundle-4,TopRight,0,0_AA679SH20_.jpg'
    : 'https://m.media-amazon.com/images/I/81C7ZQHz+4L._SX679_.jpg';

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: orderedQuantity }}></div>
      <img
        src={imageSrc}
        style={{ width: '100px' }}
        onMouseOver={() => handleImageHover(true)}
        onMouseLeave={() => handleImageHover(false)}
        alt="Product"
      />
      <img
        src={imageSrc}
        style={{ width: '200px', display: showImage ? 'block' : 'none', position: 'absolute' }}
        alt="Product Large"
      />
      <div>Pick Flavors</div>
      <div
        onClick={() => handleFlavorChange('Pike Place')}
        style={{ display: 'inline-block', width: '100px', padding: '10px', borderRadius: '10px', border: '1px solid goldenrod' }}
      >
        <input
          type="radio"
          name="flavor"
          value="Pike Place"
          checked={selectedFlavor === 'Pike Place'}
          onChange={() => handleFlavorChange('Pike Place')}
        />
        <label>Pike Place</label>
        <div>43.04</div>
      </div>
      <div
        onClick={() => handleFlavorChange('Pumpkin spice')}
        style={{ display: 'inline-block', width: '150px', padding: '10px', borderRadius: '10px', border: '1px solid goldenrod' }}
      >
        <input
          type="radio"
          name="flavor"
          value="Pumpkin spice"
          checked={selectedFlavor === 'Pumpkin spice'}
          onChange={() => handleFlavorChange('Pumpkin spice')}
        />
        <label>Pumpkin spice</label>
        <div>52.08</div>
      </div>
      <div style={{ marginTop: '10px', marginBottom: '10px' }}>
        Quantity
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          <option>24 Count (pack of 4)</option>
          <option>10 Count (pack of 6)</option>
        </select>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default App;
