import React from "react";

const Address = () => {
  return (
    <>
      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-map position-absolute'></i>
        <span className='d-block'>Address Point</span>Dadyal azad jammu kashmir
        pakistan
      </p>
      {/* End .custom-span-contact */}

      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-envelope-open position-absolute'></i>
        <span className='d-block'>mail me</span>{" "}
        <a href='mailto:hassansarvani@gmail.com'>mohsin37345@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className='open-sans-font custom-span-contact position-relative'>
        <i className='fa fa-phone-square position-absolute'></i>
        <span className='d-block'>call me</span>{" "}
        <a href='Tel: +92 313 5643 167'>+92 319 197 244</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
