import { useState } from "react";
import { useRouter } from "next/router";

export default function Track() {
  const router = useRouter();
  const [transactionId, setTransactionId] = useState("");

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    router.push(`/track/${transactionId}`);
  };

  return (
    <div class="p-4 h-[100vh] w-full flex flex-col items-center justify-center">
      <h1 class="text-2xl font-bold mb-4">Track Your Order</h1>
      <form class="max-w-md w-full" onSubmit={handleTrackSubmit}>
        <div class="mb-4">
          <label for="name" class="block font-bold mb-2">
            Transaction ID:{" "}
          </label>
          <input
            type="text"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            class="bg-[#ff3636] text-white px-4 py-2 rounded m-auto hover:bg-red-600"
          >
            Track Order
          </button>
        </div>
      </form>
    </div>
  );
}
