import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginActions from '../../store/ducks/login';

import { Container, SignForm, Logo, SignButton } from './styles';

import logo from '../../assets/images/logo.png';

class Login extends Component {
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;
    const { loginRequest } = this.props;

    loginRequest(email, password);
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <Logo src={logo} />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={email}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Senha secreta"
            value={password}
            onChange={this.handleInputChange}
          />

          <SignButton type="submit">Entrar</SignButton>
        </SignForm>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Login);
