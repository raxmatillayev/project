import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatCard from "../components/common/StatCard";
import { CreditCard, DollarSign, ShoppingCart } from "lucide-react";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import SalesOverviewChart1 from "../components/sales/SalesOverviewChart1";
import SalesByCategoryChart from "../components/sales/SAlesByCategoryChart";
import DailSalesTrend from "../components/sales/DailSalesTrend";

const salesStats = {
    totalRevune: "$1,234,567",
    averageOrderValue: "$78.90",
    conversionRate: "3.45%",
    salesGrowth: "12.3%",
};

const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales Dashboard" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">

        <motion.div
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
          <StatCard name='Total Revune' icon={DollarSign} value={salesStats.totalRevune} color='#6366F1' />
          <StatCard
            name='Avg. Order Value'
            icon={ShoppingCart}
            value={salesStats.averageOrderValue}
            color='#10B981'
          />
          <StatCard
            name='Avg. Order Value'
            icon={ShoppingCart}
            value={salesStats.conversionRate}
            color='#F59E0B'
          />
          <StatCard name='Sales Growth' icon={CreditCard} value={salesStats.salesGrowth} color='#EF4444' />
        </motion.div>

        <SalesOverviewChart1 />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
           <SalesByCategoryChart />
           <DailSalesTrend/>
        </div>
      </main>
    </div>
  );
};
export default SalesPage;