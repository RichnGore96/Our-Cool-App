import React from "react";

function BookingDetails({ date, setDate, time, setTime }) {
return (
<div className="Booking-details">
    <h3>Choose Service and Time/Date</h3>
    <form>
    <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
    </label>
    <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
    </label>
    </form>
</div>
);
}

export default BookingDetails;
