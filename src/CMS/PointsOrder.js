import React from "react";
import styled from "styled-components";
import TableButton from "./TableButton";
const PointsOrder = ({ name, phone, date, amount }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{date}</td>
      <td>{amount}</td>
      <td>
        <TableButton
          title="ارسل النقاط"
          className="fas fa-paper-plane"
          color="#F49917"
          subcolor="#C37A12"
          width={true}
        />
      </td>
    </tr>
  );
};

export default PointsOrder;
