import { FaSearch } from "react-icons/fa";

function SearchBar({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  paymentFilter,
  setPaymentFilter,
}) {
  return (
    <div className="toolbar">

      <div className="search-box">

        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search Order ID / Name / Phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {search && (
          <button
            className="clear-btn"
            onClick={() => setSearch("")}
          >
            ✖
          </button>
        )}

      </div>

      <select
        value={statusFilter}
        onChange={(e) =>
          setStatusFilter(e.target.value)
        }
      >
        <option value="All">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Preparing">Preparing</option>
        <option value="Ready">Ready</option>
        <option value="Out For Delivery">
          Out For Delivery
        </option>
        <option value="Delivered">
          Delivered
        </option>
        <option value="Cancelled">
          Cancelled
        </option>
      </select>

      <select
        value={paymentFilter}
        onChange={(e) =>
          setPaymentFilter(e.target.value)
        }
      >
        <option value="All">All Payments</option>
        <option value="cod">
          Cash On Delivery
        </option>
        <option value="prepaid">
          Online Payment
        </option>
      </select>

    </div>
  );
}

export default SearchBar;