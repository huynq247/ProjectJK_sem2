import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./booking/BookingForm";
import BookingList from "./booking/BookingList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookingForm />} />
        <Route path="/bookings" element={<BookingList />} />
      </Routes>
    </Router>
  );
}

export default App;