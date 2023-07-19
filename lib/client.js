import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "xusx3ewp",
  dataset: "production",
  apiVersion: "2022-07-16",
  useCdn: true,
  token:
    "skGf3l2InCD5W1BsBcNoX1CIyvQhB9rVD1KjLnXKaHn4NN87c4j2DOX5m3wR0YC4rzAt5oUC13RDfxk1cZMh4Z7K8enSZpHgQ4MWe7D40qfAba99JeB1Hdyt4OspeYtCJNMuBSdX5Q5yQlIUrCOTw3cR6LbHQJi5lshk0teov77EVGeNnuQu",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
