import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { UserCheck, UserPlus, UserIcon, UserX } from "lucide-react";
import UsersTable from "../components/users/UsersTable";
import UserGrowthChart from "../components/users/UserGrowthChart";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";

const userStats = {
    totalusers: 152845,
    newUsersToday: 243,
    activeUsers: 98520,
    chyrnRate: "2.4%",
};

const UsersPage = () => {
  return ( <div className="flex-1 overflow-auto relative z-10">
    <Header title='Users' />

    <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">

     <motion.div
       className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 1 }}
       >
        <StatCard
          name='Total Users'
          icon={UserIcon}
          value={userStats.totalusers.toLocaleString()}
          color='#6366F1'
          />
          <StatCard name='New Users Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
          <StatCard
          name='Active Users'
          icon={UserCheck}
          value={userStats.activeUsers.toLocaleString()}
          color='#F59E0B'
          />
          <StatCard name='Churn Rate' icon={UserX} value={userStats.chyrnRate} color='#EF4444' />
      </motion.div>

      <UsersTable />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

        <UserGrowthChart />
        <UserActivityHeatmap/>
        <UserDemographicsChart/>
      </div>
    </main>
   </div>
  );
};
export default UsersPage;