import React, { useState, useEffect } from "react";

export default function BookingList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/booking/list");
        if (response.ok) {
          const data = await response.json();
          setCustomers(data);
        } else {
          console.error("Failed to fetch bookings.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Danh sách đặt lịch</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer._id}>
            {customer.name} - {customer.phone} - {customer.date}
          </li>
        ))}
      </ul>
      <a href="/">Quay lại đặt lịch</a>
    </div>
  );
}