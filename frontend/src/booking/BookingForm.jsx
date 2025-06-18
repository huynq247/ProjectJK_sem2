import React, { useState, useEffect } from "react";
import "./BookingForm.css";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
    });

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/api/booking", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Đặt lịch thành công!");
                setFormData({ name: "", phone: "", date: "" });
            } else {
                alert("Gửi thất bại. Vui lòng thử lại!");
                // Redirect to booking list page
                window.location.href = "/bookings";
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Đã xảy ra lỗi kết nối.");
        }
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <div className="popup-left">
                    <img src="./img/carpopup.png" alt="Car Parking" />
                    <h3>
                        <span style={{ color: "#0057b8" }}>Dịch vụ đặt xe</span> Jetking - Team4
                    </h3>
                </div>
                <div className="popup-right">
                    <div className="popup-input">
                        <input
                            type="text"
                            name="name"
                            placeholder="Họ và tên"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="popup-input">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Số điện thoại"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="popup-input">
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="submit-btn" onClick={handleSubmit}>
                        ĐẶT LỊCH NGAY
                    </button>
                    <p className="note">
                        Dịch vụ đặt xe Jetking-Team4 sẽ liên hệ lại ngay sau khi nhận được thông tin
                    </p>
                </div>
            </div>
        </div>
    );
}