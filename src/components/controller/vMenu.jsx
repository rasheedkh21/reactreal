import React from "react";
import { ImageOfOffer, OrderSort, Orders } from "../pages/motors/style";
import {card} from "../test/poducts";
import { Link } from "react-router-dom";
const VMenu = () => {
  const datas = card.yangi;
  return (
    <OrderSort>
      {datas.map((data) => {
        return (
          <Link to={`/aidal/${data.id}`}>
            <Orders key={data.id}>
              <ImageOfOffer />
              <h1>{data.car.name}</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "40px",
                }}
              >
                <p>{data.car.company}</p>
                <p>{data.car.date}</p>
              </div>
              <h2>{data.car.cost}</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "10px",
                }}
              >
                <a href="/orders">Oreder</a>
                <a href="comparemodels">Compare</a>
              </div>
            </Orders>
          </Link>
        );
      })}
    </OrderSort>
  );
};

export default VMenu;
