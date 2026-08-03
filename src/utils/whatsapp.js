export const generateOrderMessage = ({
  customerName,
  tableNumber,
  phone,
  paymentMethod,
  note,
  items,
  total,
}) => {
  const orderLines = items
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} x ${item.quantity} = ₹${item.price * item.quantity}`
    )
    .join('\n');

  return `
🍽️ *New Order - QRDine*

👤 *Customer:* ${customerName}
🪑 *Table:* ${tableNumber}
📞 *Phone:* ${phone}
💳 *Payment:* ${paymentMethod}

📋 *Items:*
${orderLines}

💰 *Total:* ₹${total}

📝 *Special Instructions:*
${note || 'None'}

Thank you!
  `.trim();
};

export const sendOrderToWhatsApp = (order, phoneNumber = '919876543210') => {
  const message = generateOrderMessage(order);
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};