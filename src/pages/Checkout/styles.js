import styled from 'styled-components'

export const CheckoutContainer = styled.form`
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;

  h2 {
    font-size: 1.125rem;
    color: ${(props) => props.theme.colors['base-subtitle']};
    margin-bottom: 0.9rem;
  }
`

export const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const CartSection = styled.div`
  width: 28rem;
`

export const CardBase = styled.div`
  background: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`

export const AddressFormContainer = styled(CardBase)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    background: ${(props) => props.theme.colors['base-input']};
    border: 1px solid ${(props) => props.theme.colors['base-button']};
    padding: 0.75rem;
    border-radius: 4px;
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['base-text']};

    &:focus {
      border-color: ${(props) => props.theme.colors['yellow-dark']};
    }
  }
`

export const CartTotalContainer = styled(CardBase)`
  border-radius: 6px 44px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;

  span:last-child {
    font-size: 1rem;
  }
`

export const ConfirmButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${(props) => props.theme.colors.yellow};
  color: ${(props) => props.theme.colors.white};
  border: 0;
  border-radius: 6px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme.colors['yellow-dark']};
  }
`