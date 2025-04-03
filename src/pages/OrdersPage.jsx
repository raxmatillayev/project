import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import DailyOrders from "../components/orders/DailyOrders";
import OrderDistribution from "../components/orders/OrderDistribution";
import OrdersTable from "../components/orders/OrdersTable";

const orderStats = [
  { name: "Total Orders", icon: ShoppingBag, value: "1,234", color: "#6366F1" },
  { name: "Pending Orders", icon: Clock, value: "56", color: "#F59E0B" },
  { name: "Completed Orders", icon: CheckCircle, value: "1,178", color: "#10B981" },
  { name: "Total Revenue", icon: DollarSign, value: "$98,765", color: "#EF4444" },
];

const OrdersPage = () => {
  return (
    <div className="flex-1 relative z-10 overflow-auto">
      <Header title="Orders" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {orderStats.map((stat, index) => (
            <StatCard key={index} name={stat.name} icon={stat.icon} value={stat.value} color={stat.color} />
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <DailyOrders/>
          <OrderDistribution/>
          <OrdersTable/>
        </div>
      </main>
    </div>
  );
};

export default OrdersPage;