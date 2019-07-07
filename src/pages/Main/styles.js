import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background: #0b2031;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 7%;
  margin-bottom: 20px;

  img {
    height: 32px;
    width: 32px;
  }

  h1 {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 14px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-right: 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  margin-right: 20px;
  p {
    font-size: 16px;
    color: #fff;
    font-weight: bold;
  }

  button {
    background: transparent;
    opacity: 0.6;
    font-size: 14px;
    color: #fff;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  i {
    color: #fff;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 93%;

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
    width: 600px;
  }
`;
