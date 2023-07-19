import Link from "next/link";

export default function Home() {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Welcome to JOKI TUGAS IT</h1>
        <div className="flex justify-center mt-3">
          <Link href="/order" class="inline-block mr-5">
            <button class="bg-[#ff3636] text-white px-4 py-2 rounded hover:bg-red-600">
              Place Order
            </button>
          </Link>
          <Link href="/track" class="inline-block">
            <button class="bg-[#ff3636] text-white px-4 py-2 rounded hover:bg-red-600">
              Track Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
