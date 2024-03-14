import React from 'react';

const BillingInfo = () => {
  return (
    <div>
      <h2>Billing Information</h2>
      <p>Please enter your billing information.</p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BillingInfo;