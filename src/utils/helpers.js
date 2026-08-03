export const truncateText = (text, maxLength = 60) => {
  if (!text) return '';
  return text.length > maxLength
    ? text.slice(0, maxLength) + '...'
    : text;
};

export const capitalize = (text) => {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  if (hour < 21) return 'Good Evening';

  return 'Good Night';
};

export const generateOrderId = () => {
  return 'QRD-' + Date.now().toString().slice(-6);
};

export const getEstimatedTime = (itemsCount) => {
  const baseTime = 15;
  return `${baseTime + itemsCount * 3} mins`;
};