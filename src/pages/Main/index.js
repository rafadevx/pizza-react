import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import socket from 'socket.io-client';

import OrderActions from '../../store/ducks/order';
import LoginActions from '../../store/ducks/login';

import Order from './Order';

import { Container, Header, Title, Info, Menu, Content } from './styles';

import logo from '../../assets/images/logo.png';

class Main extends Component {
  static propTypes = {
    loadOrdersRequest: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    login: PropTypes.shape({
      userName: PropTypes.string,
    }).isRequired,
    order: PropTypes.shape({
      data: PropTypes.array,
    }).isRequired,
  };

  componentDidMount() {
    this.subscribe();
    const { loadOrdersRequest } = this.props;

    loadOrdersRequest();
  }

  subscribe = () => {
    const { loadOrdersRequest } = this.props;

    const io = socket('http://localhost:3030');

    io.on('order', data => {
      loadOrdersRequest();
    });
  };

  render() {
    const { login, order, logout } = this.props;
    return (
      <Container>
        <Header>
          <Title>
            <img src={logo} alt="logo" />
            <h1>Pizzaria Don Juan</h1>
          </Title>
          <Info>
            <Menu>
              <p>{login.userName}</p>
              <button type="button" onClick={logout}>
                Sair do app
              </button>
            </Menu>
            <i className="fa fa-shopping-bag" />
          </Info>
        </Header>
        <Content>
          <h2>Últimos pedidos</h2>
          {order.data.map(ord => (
            <Order key={ord.id} ord={ord} />
          ))}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  login: state.login,
  order: state.order,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...OrderActions, ...LoginActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
