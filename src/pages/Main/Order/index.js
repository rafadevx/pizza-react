import React from 'react';

import PropTypes from 'prop-types';

import {
  Container, OrderHeader, ItemContent, Item, Info, Footer,
} from './styles';

const Order = ({ ord }) => (
  <Container>
    <OrderHeader>
      <h2>{`Pedido #${ord.id} - ${ord.user}`}</h2>
      <small>{ord.formattedDate}</small>
      <strong>{`R$${ord.total}`}</strong>
    </OrderHeader>
    <hr />
    <ItemContent>
      {ord.OrderItems.map(item => (
        <Item key={item.product_type_size_id}>
          <img
            src={`http://localhost:3030/files/${item.ProductTypeSize.ProductType.image}`}
            alt="pizza"
          />
          <Info>
            <strong>{item.ProductTypeSize.ProductType.name}</strong>
            <small>{`Tamanho: ${item.ProductTypeSize.size}`}</small>
          </Info>
        </Item>
      ))}
      <hr />
    </ItemContent>
    <Footer>
      <p>
        <strong>Observações: </strong>
        {ord.note}
      </p>
    </Footer>
  </Container>
);

Order.propTypes = {
  ord: PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.string,
    formattedDate: PropTypes.string,
    total: PropTypes.number,
    OrderItems: PropTypes.array,
    note: PropTypes.string,
  }).isRequired,
};

export default Order;
