import React from "react";

function UserDetails({ handleSubmit }) {
return (
<div className="User-details">
    <h3>Enter Your Information</h3>
    <form onSubmit={handleSubmit}>
    <label>
        Name:
        <input type="text" name="name" required />
    </label>
    <label>
        Email:
        <input type="email" name="email" required />
    </label>
    <label>
        Phone:
        <input type="tel" name="phone" required />
    </label>
    <label>
        Attach a Photo (Optional):
        <input type="file" name="photo" accept="image/*" />
    </label>
    <button type="submit">Submit</button>
    </form>
</div>
);
}

export default UserDetails;
