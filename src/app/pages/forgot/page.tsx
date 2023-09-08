import React from "react";

const page = () => {
  return (
    <div className="forgot">
      <form>
              <h3>Forgot Password</h3>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <button className="colored">Send Reset Link</button>
      </form>
    </div>
  );
};

export default page;
