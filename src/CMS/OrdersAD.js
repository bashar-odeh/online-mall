import React from "react";
import styled from "styled-components";
import TableButton from "./TableButton";
const OrdersAD = ({ number, name, address, date, time, accept }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{name}</td>
      <td>{address}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>
        <TableButton
          title="تفاصيل"
          className="fas fa-info-circle"
          color="#17a2b8"
          subcolor="#128293"
          width={true}
        />
      </td>
    </tr>
  );
};

export default OrdersAD;
