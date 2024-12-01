import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!orders || orders.length === 0) {
    return <span>Unable to load orders</span>;
  }

  return (
    <div className="space-y-10">
      {orders.map((order) => (
        <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
          <OrderStatusHeader order={order} />
          <div className="grid md:grid-cols-2 gap-10">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 9}>
              <img
                className="rounded-md object-cover h-full w-full"
                src={order.restaurant.imageUrl}
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
