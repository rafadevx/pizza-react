import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  display: flex;
  border-radius: 3px;
  flex-direction: column;
  margin-bottom: 20px;
  box-shadow: 0px 0px 5px 0px #aaa;
  padding: 20px;
`;

export const OrderHeader = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(7, 7, 7, 0.1);

  h2 {
    font-size: 18px;
    color: #0b2031;
    margin-bottom: 5px;
  }

  small {
    font-size: 11px;
    color: #706e7b;
    margin-bottom: 5px;
  }

  strong {
    font-size: 16px;
    color: #0b2031;
    font-weight: bold;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(7, 7, 7, 0.1);
`;

export const Item = styled.div`
  display: flex;
  border: 1px solid rgba(9, 9, 9, 0.1);
  border-radius: 4px;
  padding: 10px;
  width: 200px;
  margin-right: 15px;
  img {
    height: 60px;
    width: 60px;
    margin-right: 10px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 13px;
    color: #0b2031;
    margin-bottom: 5px;
  }

  small {
    font-size: 11px;
    color: #706e7b;
    margin-bottom: 5px;
  }
`;

export const Footer = styled.div`
  p {
    font-size: 14px;
    color: #706e7b;

    strong {
      font-weight: bold;
    }
  }
`;
