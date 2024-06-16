import { useOne } from "@refinedev/core";

export const ShowProduct = () => {
  const { data, isLoading } = useOne({ resource: "products", id: "20" });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Product Name: {data?.data.name}</div>
};
