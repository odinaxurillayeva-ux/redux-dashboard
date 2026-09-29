import { useEffect, useState } from "react";
import { Search, Filter, Eye, Trash2, Pencil } from "lucide-react";
import "../styles/orderManagement.css";
import { getOrders, deleteOrder, addOrder, updateOrder } from "../api/orders";

interface Order {
  id: string;
  customer: string;
  product: string;
  date: string;
  status: string;
  amount: string;
}

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [customer, setCustomer] = useState("");
  const [product, setProduct] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Pending");
  const [amount, setAmount] = useState("");

  const [editId, setEditId] = useState("");

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const res = await getOrders();
      setOrders(res.data);
    } catch (error) {
      console.log("API error:", error);
      setOrders([]);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteOrder(id);
      loadOrders();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (order: Order) => {
    setEditId(order.id);
    setCustomer(order.customer);
    setProduct(order.product);
    setDate(order.date);
    setStatus(order.status);
    setAmount(order.amount);
    setShowModal(true);
  };



  const handleSaveOrder = async () => {
    const newOrder = {
      customer,
      product,
      date,
      status,
      amount,
    };

    try {
      if (editId) {
        await updateOrder(editId, newOrder);
      } else {
        await addOrder(newOrder);
      }

      loadOrders();

      setShowModal(false);
      setEditId("");

      setCustomer("");
      setProduct("");
      setDate("");
      setStatus("Pending");
      setAmount("");
    } catch (error) {
      console.log(error);
    }
  };


  const filteredOrders = orders.filter((order) => {
    const customer = String(order.customer ?? "");
    const product = String(order.product ?? "");
    const id = String(order.id ?? "");

    return (
      customer.toLowerCase().includes(search.toLowerCase()) ||
      product.toLowerCase().includes(search.toLowerCase()) ||
      id.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="ordersPage">
      {/* Header */}
      <div className="ordersHeader">
        <div>
          <h2>Order Management</h2>
          <p>Manage customer orders</p>
        </div>

        <button
          className="addOrderBtn"
          onClick={() => setShowModal(true)}
        >
          + Add Order
        </button>
      </div>

      {/* Search + Filter */}
      <div className="ordersToolbar">
        <div className="ordersSearch">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="filterBtn">
          <Filter size={18} />
          Filter
        </button>
      </div>

      {/* Orders Table */}
      <div className="ordersTable">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Date</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>#{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.date}</td>

                <td>
                  <span className={`status ${String(order.status ?? "Pending").toLowerCase()}`}>
                    {order.status ?? "Pending"}
                  </span>
                </td>

                <td>{order.amount}</td>

                <td className="actions">
                  <button
                    className="editBtn"
                    onClick={() => handleEdit(order)}
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    className="deleteBtn"
                    onClick={() => handleDelete(order.id)}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}

            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan={7} className="emptyRow">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>



        {showModal && (
          <div className="modalOverlay">
            <div className="modal">
              <h3>Add New Order</h3>

              <input
                type="text"
                placeholder="Customer name"
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              />

              <input
                type="text"
                placeholder="Product name"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              />

              <input
                type="text"
                placeholder="Date (11 Sep 2026)"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <input
                type="text"
                placeholder="Amount ($180)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>Pending</option>
                <option>Delivered</option>
                <option>Shipped</option>
                <option>Cancelled</option>
              </select>

              <div className="modalButtons">
                <button
                  className="cancelBtn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="saveBtn"
                  onClick={handleSaveOrder}
                >
                  Save Order
                </button>
              </div>
            </div>
          </div>
        )}



      </div>
    </div>
  );
}