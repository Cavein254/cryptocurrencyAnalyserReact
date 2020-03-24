import React from "react";
import { Table, Image } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretSquareUp,
  faCaretSquareDown
} from "@fortawesome/free-solid-svg-icons";

const caretColorUp = {
  color: "green"
};
const caretColorDown = {
  color: "red"
};

const TableData = ({ market }) => {
  console.log(market);
  return (
    <Table columns={7}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Image</Table.HeaderCell>
          <Table.HeaderCell>Ticker</Table.HeaderCell>
          <Table.HeaderCell>Price(usd)</Table.HeaderCell>
          <Table.HeaderCell>High</Table.HeaderCell>
          <Table.HeaderCell>Low</Table.HeaderCell>
          <Table.HeaderCell>Price % Change</Table.HeaderCell>
          <Table.HeaderCell>% Market Change</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {market.map(item => {
          return (
            <Table.Row key={item.id}>
              <Table.Cell>
                <Image src={item.image} size="tiny" />
              </Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>
                {item.current_price}
                <span>
                  {" "}
                  {item.current_price > item.high_24h ? (
                    <FontAwesomeIcon
                      icon={faCaretSquareUp}
                      style={caretColorUp}
                    ></FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon
                      icon={faCaretSquareDown}
                      style={caretColorDown}
                    ></FontAwesomeIcon>
                  )}
                </span>
              </Table.Cell>
              <Table.Cell>
                {item.high_24h}
                {item.high_24h > item.current_price ? <span></span> : ""}
              </Table.Cell>
              <Table.Cell>
                {item.low_24h}
                {item.high_24h < item.current_price ? <span>Low</span> : ""}
              </Table.Cell>
              <Table.Cell>{item.price_change_percentage_24h}</Table.Cell>
              <Table.Cell>{item.market_cap_change_percentage_24h}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};
export default TableData;
