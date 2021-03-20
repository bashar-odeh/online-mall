import React from "react";
import styled from "styled-components";
import TableButton from "./TableButton";
const Orders = ({ number, name, address, date, time, accept, width }) => {
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
        />
      </td>
      <td>
        <TableButton
          title="قبول"
          className="fas fa-check"
          color="#23BF08"
          subcolor="#1C9906"
        />
      </td>
      <td>
        <TableButton
          title="رفض"
          className="fas fa-times"
          color="#DC3545"
          subcolor="#B02A37"
        />
      </td>
    </tr>
  );
};

export default Orders;
