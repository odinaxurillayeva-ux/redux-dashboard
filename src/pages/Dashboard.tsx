import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import "../styles/dashboard.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 12000 },
  { month: "Feb", sales: 18000 },
  { month: "Mar", sales: 15000 },
  { month: "Apr", sales: 22000 },
  { month: "May", sales: 19500 },
  { month: "Jun", sales: 24500 },
  { month: "Jul", sales: 28000 },
];

export default function Dashboard() {
  return (
    <div className="dashboard">

      {/* ===== 4 TA CARD ===== */}
      <div className="dashboardCards">

        <div className="dashboardCard">
          <div className="cardTop">
            <h3>Total Revenue</h3>
            <DollarSign size={20} />
          </div>

          <p className="subtitle">This month</p>

          <div className="cardInfo">
            <strong>$24,580</strong>

            <span className="green">
              <TrendingUp size={14} />
              12.5%
            </span>
          </div>

          <p className="previous">vs previous month</p>
        </div>

        <div className="dashboardCard">
          <div className="cardTop">
            <h3>Total Orders</h3>
            <ShoppingCart size={20} />
          </div>

          <p className="subtitle">This month</p>

          <div className="cardInfo">
            <strong>1,248</strong>

            <span className="green">
              <TrendingUp size={14} />
              8.2%
            </span>
          </div>

          <p className="previous">vs previous month</p>
        </div>

        <div className="dashboardCard">
          <div className="cardTop">
            <h3>Total Customers</h3>
            <Users size={20} />
          </div>

          <p className="subtitle">Active customers</p>

          <div className="cardInfo">
            <strong>856</strong>

            <span className="green">
              <TrendingUp size={14} />
              5.4%
            </span>
          </div>

          <p className="previous">vs previous month</p>
        </div>

        <div className="dashboardCard">
          <div className="cardTop">
            <h3>Total Products</h3>
            <Package size={20} />
          </div>

          <p className="subtitle">Available products</p>

          <div className="cardInfo">
            <strong>342</strong>

            <span className="red">
              <TrendingDown size={14} />
              2.1%
            </span>
          </div>

          <p className="previous">vs previous month</p>
        </div>

      </div>

      {/* ===== SALES ANALYTICS ===== */}
      <div className="salesSection">

        <div className="salesHeader">
          <div>
            <h2>Sales Analytics</h2>
            <p>Overview of your monthly sales</p>
          </div>

          <select>
            <option>Last 7 Months</option>
            <option>Last 6 Months</option>
            <option>Last 12 Months</option>
          </select>
        </div>

        <div className="chart">
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ececec" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="sales"
                stroke="#20C05C"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  );
}