import { client } from "../../lib/client";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      const transactionId = `JKIT-${uuidv4().substr(0, 8)}`;
      const newOrder = await JSON.parse(req.body);
      try {
        await client
          .create({
            _type: "order",
            transactionId: transactionId,
            name: newOrder.name,
            phoneNumber: newOrder.phoneNumber,
            description: newOrder.description,
            status: "Payment Pending",
          })
          .then((data) => {
            res.status(200).json(data._id);
          });
      } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error, check console" });
      }
      break;
  }
}
