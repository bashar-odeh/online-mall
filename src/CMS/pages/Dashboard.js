import React from "react";
import PageWrapper from "../PageWrapper";
import Orders from "../Orders";
import OrdersAD from "../OrdersAD";
import styled from "styled-components";
const Dashboard = () => {
  return (
    <PageWrapper className="fas fa-book-open" title="عرض الطلبات">
      <Wrapper>
        <Title>
          <h4>الطلبات اليومية</h4>
          <h6>القبول والرفض</h6>
        </Title>
        <Table>
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>اسم الزبون</th>
              <th>عنوان الزبون</th>
              <th>تاريخ الطلب</th>
              <th>وقت الطلب</th>
              <th>تفاصيل الطلب</th>
              <th>قبول </th>
              <th>رفض</th>
            </tr>
          </thead>
          <tbody>
            <Orders
              number={1}
              name="بشار عوده"
              address="طولكرم"
              date="27/1/2020"
              time="12:07 PM"
            />
            <Orders
              number={1}
              name="بشار عوده"
              address="طولكرم"
              date="27/1/2020"
              time="12:07 PM"
            />
          </tbody>
        </Table>
        <Title>
          <h4>الطلبات التي تم الموافقة عليها</h4>
        </Title>
        <AcceptedTable>
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>اسم الزبون</th>
              <th>عنوان الزبون</th>
              <th>تاريخ الطلب</th>
              <th>وقت الطلب</th>
              <th>تفاصيل الطلب</th>
            </tr>
          </thead>
          <tbody>
            <OrdersAD
              number={1}
              name="بشار عوده"
              address="طولكرم"
              date="27/1/2020"
              time="12:07 PM"
            />
            <OrdersAD
              number={1}
              name="بشار عوده"
              address="طولكرم"
              date="27/1/2020"
              time="12:07 PM"
            />
          </tbody>
        </AcceptedTable>
        <Title>
          <h4>الطلبات التي تم رفضها</h4>
        </Title>
        <DeclineTable>
          <thead>
            <tr>
              <th>رقم الطلب</th>
              <th>اسم الزبون</th>
              <th>عنوان الزبون</th>
              <th>تاريخ الطلب</th>
              <th>وقت الطلب</th>
              <th>تفاصيل الطلب</th>
            </tr>
          </thead>
          <tbody>
            <OrdersAD
              number={1}
              name="بشار عوده"
              address="طولكرم"
              date="27/1/2020"
              time="12:07 PM"
            />
            <OrdersAD
              number={1}
              name="بشار عوده"
              address="طولكرم"
              date="27/1/2020"
              time="12:07 PM"
            />
          </tbody>
        </DeclineTable>
      </Wrapper>
    </PageWrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  overflow: auto;
  padding: 0 2rem;
`;
const Title = styled.div`
  width: 100%;
  padding: 1em 0;
  h4 {
    font-size: 1rem;
    padding-top: 1em;
  }
  h6 {
    font-size: 0.8rem;
    color: #545d68;
    padding-bottom: 1em;
  }
`;
const Table = styled.table`
  width: 100%;
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
  border-collapse: collapse;
  margin: 2em 0;
  border-radius: 5px;
  overflow: hidden;

  th,
  td {
    width: auto;
    text-align: start;
    padding: 1em;
  }
  td {
    color: #545d68;
    text-align: start;
    font-size: 0.9rem;
  }
  th {
    font-weight: normal;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  tr:hover {
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;
const AcceptedTable = styled(Table)`
  tr,
  tr:nth-child(even) {
    background-color: lightgreen;
  }
  th {
    background-color: #1c9906;
  }
  td {
    color: #1c9906;
  }
`;
const DeclineTable = styled(Table)`
  tr,
  tr:nth-child(even) {
    background-color: #fae3e5;
  }
  th {
    background-color: #dc3545;
  }
  td {
    color: #dc3545;
  }
`;
export default Dashboard;
