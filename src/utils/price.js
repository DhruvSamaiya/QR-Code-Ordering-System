export const calculateSubtotal = (items) => {
  return items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

export const calculateDiscount = (subtotal, coupon) => {
  if (coupon === 'QRDINE50') return 50;
  if (coupon === 'WELCOME10') return Math.round(subtotal * 0.1);
  return 0;
};

export const calculateGST = (amount, rate = 0.05) => {
  return Math.round(amount * rate);
};

export const calculateTotal = (items, coupon = '') => {
  const subtotal = calculateSubtotal(items);
  const discount = calculateDiscount(subtotal, coupon);
  const taxableAmount = subtotal - discount;
  const gst = calculateGST(taxableAmount);

  return {
    subtotal,
    discount,
    gst,
    total: taxableAmount + gst,
  };
};

export const formatPrice = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};