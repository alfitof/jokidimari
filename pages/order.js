import { useState } from "react";
import { useRouter } from "next/router";
import { createOrder } from "@/lib/orderHandler";

export default function Order() {
  const [FormData, setFormData] = useState({});
  const router = useRouter();
  const handleInput = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { transactionId } = await createOrder({ ...FormData });
    if (typeof window !== "undefined") {
      localStorage.setItem("order", transactionId);
    }
    e.preventDefault();
    router.push("/");
  };

  return (
    <div class="p-4 h-[100vh] w-full flex flex-col items-center justify-center">
      <h1 class="text-2xl font-bold mb-4">Place an Order</h1>
      <form class="max-w-md w-full" onSubmit={handleSubmit}>
        <div class="mb-4">
          <label for="name" class="block font-bold mb-2">
            Nama:{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInput}
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div class="mb-4">
          <label for="phoneNumber" class="block font-bold mb-2">
            No Telepon:{" "}
          </label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            onChange={handleInput}
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="mb-4">
          <label for="description" class="block font-bold mb-2">
            Deskripsi Tugas:{" "}
          </label>
          <textarea
            id="description"
            onChange={handleInput}
            name="description"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          class="bg-[#ff3636] text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}
