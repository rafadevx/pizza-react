import styled from 'styled-components';

import backImage from '../../assets/images/fundo.jpg';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: linear-gradient(to bottom, transparent 0%, #000 100%), url(${backImage});
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  input {
    flex: 1;
    height: 60px;
    padding: 10px;
    background: #fff;
    font-size: 15px;
    color: #444;
    border-radius: 4px;
    margin: 5px 0;
    align-self: stretch;
  }
`;

export const Logo = styled.img`
  height: 72px;
  width: 72px;
  margin: 10px;
`;

export const SignButton = styled.button.attrs({
  type: 'button',
})`
  border-radius: 4px;
  background: #e5293e;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  flex: 1;
  height: 60px;
  padding: 10px;
  align-self: stretch;
`;
