import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      <main className="flex-1 p-8 md:ml-64">
        {/* Dashboard header (optional, only for dashboard homepage) */}
        <h1 className="text-2xl font-bold text-[#1F2937] mb-6">Dashboard</h1>

        {/* Dashboard stats (only if you want to show these on /dashboard) */}
        {/* Remove this block if you're rendering other pages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Total Clients", value: "24", bg: "bg-[#C09F63]" },
            { title: "Active Partners", value: "12", bg: "bg-[#1F2937]" },
            { title: "Gallery Items", value: "48", bg: "bg-[#C09F63]" },
            { title: "Collections", value: "6", bg: "bg-[#1F2937]" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`${stat.bg} text-white p-6 rounded-xl shadow`}
            >
              <h3 className="text-lg font-medium">{stat.title}</h3>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* 👇 This is where your nested route components will be rendered */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
