import { formatEU } from './format';

export const submitMessage = data => {
  const { name, startDate, endDate, model, price, location } = data;
  const days =
    (new Date(endDate).getTime() - new Date(startDate).getTime()) /
    (1000 * 3600 * 24);

  const totalPrice = price * days;
  const formattedPrice = formatEU(totalPrice);
  return `
  Booking Confirmation: Campervan Successfully Reserved

  Dear ${name},

  Thank you for choosing TravelTrucks! We are pleased to confirm that your campervan has been successfully booked.

  Booking Details:
  - Campervan Model: ${model}
  - Pick-up Date: ${startDate}
  - Return Date: ${endDate}
  - Pick-up Location: ${location}
  - Total Price: ${formattedPrice}

  You will receive further details, including pick-up instructions and contact information, closer to your rental date. If you have any questions or need to make changes to your booking, feel free to reach out to us.

  We look forward to helping you create unforgettable adventures!

  Best regards,
  TravelTrucks Team
`;
};
