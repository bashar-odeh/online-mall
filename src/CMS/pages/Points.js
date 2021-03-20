import React from "react";
import styled from "styled-components";
import PageWrapper from "../PageWrapper";
import PointsOrder from "../PointsOrder";
const Points = () => {
  return (
    <PageWrapper className="fas fa-hand-point-right" title="النقاط">
      <Wrapper>
        <Title>
          <h4>الطلبات اليومية</h4>
          <h6>القبول والرفض</h6>
        </Title>
        <Table>
          <thead>
            <th>اسم الزبون</th>
            <th>رقم الهاتف </th>
            <th>تاريخ اخر طلب</th>
            <th> عدد النقاط</th>

            <th>ارسال طلب</th>
          </thead>
          <tbody>
            <PointsOrder
              number={1}
              name="بشار عوده"
              phone="0568483658"
              date="27/1/2020"
              amount="50"
            />
            <PointsOrder
              number={1}
              name="بشار عوده"
              phone="0568483658"
              date="27/1/2020"
              amount="50"
            />
            <PointsOrder
              number={1}
              name="بشار عوده"
              phone="0568483658"
              date="27/1/2020"
              amount="50"
            />
            <PointsOrder
              number={1}
              name="بشار عوده"
              phone="0568483658"
              date="27/1/2020"
              amount="50"
            />
          </tbody>
        </Table>
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
  border-collapse: collapse;
  box-shadow: 0 0 7px rgb(0 0 0 / 10%);
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
export default Points;
