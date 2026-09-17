import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  max-width: 1120px;
  margin: 2rem auto 5rem;
  padding-inline: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 448px;
  gap: 2rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const SectionTitle = styled.h2`
  font-size: 1.125rem;
  color: #403937;
  margin-bottom: 0.9rem;
`

export const FormCard = styled.div`
  background: #F3F2F2;
  border-radius: 12px;
  padding: 2.5rem;

  .card-header {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 2rem;

    h3 {
      font-size: 1rem;
      color: #403937;
      font-weight: 600;
    }

    p {
      font-size: 0.875rem;
      color: #574F4D;
    }
  }
`

export const AddressGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr 60px;
  gap: 0.75rem 0.75rem;

  input {
    background: #EEEDED;
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    padding: 0.75rem;
    font-size: 0.875rem;
    color: #574F4D;
    outline: none;

    &:focus {
      border-color: #8047F8;
    }
  }

  .cep { grid-column: span 3; max-width: 200px; }
  .street { grid-column: span 3; }
  .number { grid-column: span 1; }
  .complement { grid-column: span 2; }
  .neighborhood { grid-column: span 1; }
  .city { grid-column: span 1; }
  .uf { grid-column: span 1; }
`

export const PaymentOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const PaymentButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: ${(props) => (props.$isSelected ? '#EBE5F9' : '#E6E5E5')};
  border: 1px solid ${(props) => (props.$isSelected ? '#8047F8' : 'transparent')};
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #574F4D;
    font-weight: 600;
  }

  &:hover {
    background: #EBE5F9;
  }
`

export const OrderSummary = styled.div`
  background: #F3F2F2;
  border-radius: 6px 44px;
  padding: 2.5rem;

  .empty-msg {
    text-align: center;
    color: #8D8686;
    padding: 2rem 0;
  }

  .totals {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #E6E5E5;
  }
`

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #E6E5E5;

  img {
    width: 64px;
    height: 64px;
  }

  .info {
    flex: 1;

    .title {
      color: #403937;
      font-size: 1rem;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;

      .counter {
        background: #E6E5E5;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.35rem 0.5rem;
        border-radius: 6px;

        button {
          border: 0;
          background: transparent;
          color: #8047F8;
          cursor: pointer;
        }
      }

      .remove-btn {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        background: #E6E5E5;
        border: 0;
        padding: 0.35rem 0.5rem;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.75rem;
        text-transform: uppercase;
        color: #574F4D;

        &:hover {
          background: #D7D5D5;
        }
      }
    }
  }

  .price {
    font-weight: bold;
    color: #574F4D;
  }
`

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: #574F4D;

  &.grand-total {
    font-size: 1.25rem;
    font-weight: bold;
    color: #403937;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  background: #DBAC2C;
  color: #FFF;
  border: 0;
  border-radius: 6px;
  padding: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.875rem;
  margin-top: 1.5rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`