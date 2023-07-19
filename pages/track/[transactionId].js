import { useRouter } from "next/router";
import Link from "next/link";
import { client } from "../../lib/client";

export default function TrackOrder({ order }) {
  const router = useRouter();
  const { transactionId } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!order) {
    return <div>Transaction ID not found</div>;
  }

  return (
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">
        Track Order - Transaction ID: {transactionId}
      </h1>
      <p class="text-lg mb-2">Name: {order.name}</p>
      <p class="text-lg mb-2">Phone Number: {order.phoneNumber}</p>
      <p class="text-lg mb-2">Description: {order.description}</p>
      <p class="text-lg mb-2">Status: {order.status}</p>
      <Link href="/" class="inline-block">
        <button class="bg-[#ff3636] text-white px-4 py-2 mt-4 rounded hover:bg-red-600">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { transactionId } = params;

  try {
    const order = await client.fetch(
      `*[_type == 'order' && transactionId == $transactionId][0]`,
      { transactionId }
    );

    return {
      props: {
        order: order || null,
      },
    };
  } catch (error) {
    console.log("Failed to fetch order:", error);
  }

  return {
    notFound: true,
  };
}
