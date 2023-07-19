import { v4 as uuidv4 } from "uuid";

export const createOrder = async ({ name, phoneNumber, description }) => {
  const transactionId = `JKIT-${uuidv4().substr(0, 8)}`;
  const res = await fetch("/api/order", {
    method: "POST",
    body: JSON.stringify({
      transactionId: transactionId,
      name: name,
      phoneNumber: phoneNumber,
      description: description,
      status: "Payment Pending",
    }),
  });
  const id = await res.json();
  return id;
};
