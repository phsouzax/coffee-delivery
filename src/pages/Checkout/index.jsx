import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import {
  CheckoutContainer,
  FormSection,
  CartSection,
  AddressFormContainer,
  CartTotalContainer,
  SummaryRow,
  ConfirmButton,
} from './styles'

export function Checkout() {
  const { cartItems, changeCartItemQuantity, removeCartItem } = useContext(CartContext)
  const navigate = useNavigate()

  const itemsTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const deliveryFee = cartItems.length > 0 ? 3.50 : 0
  const finalTotal = itemsTotal + deliveryFee

  function handleConfirmOrder(event) {
    event.preventDefault()
    if (cartItems.length === 0) return alert('Seu carrinho está vazio!')
    
    navigate('/success')
  }

  return (
    <CheckoutContainer onSubmit={handleConfirmOrder}>
      <FormSection>
        <h2>Complete seu pedido</h2>
        <AddressFormContainer>
          <input type="text" placeholder="CEP" required />
          <input type="text" placeholder="Rua" required />
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <input type="text" placeholder="Número" required style={{ width: '40%' }} />
            <input type="text" placeholder="Complemento" style={{ flex: 1 }} />
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <input type="text" placeholder="Bairro" required style={{ width: '40%' }} />
            <input type="text" placeholder="Cidade" required style={{ flex: 1 }} />
            <input type="text" placeholder="UF" required style={{ width: '3rem' }} />
          </div>
        </AddressFormContainer>
      </FormSection>

      <CartSection>
        <h2>Cafés selecionados</h2>
        <CartTotalContainer>
          {cartItems.map((item) => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <strong>{item.title}</strong>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <button type="button" onClick={() => changeCartItemQuantity(item.id, 'decrease')}>-</button>
                  <span>{item.quantity}</span>
                  <button type="button" onClick={() => changeCartItemQuantity(item.id, 'increase')}>+</button>
                  <button 
                    type="button" 
                    onClick={() => removeCartItem(item.id)}
                    style={{ marginLeft: '0.5rem', background: 'transparent', border: 0, cursor: 'pointer', color: 'red' }}
                  >
                    Remover
                  </button>
                </div>
              </div>
              <div>
                <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}

          <hr />

          <SummaryRow>
            <span>Total de itens</span>
            <span>R$ {itemsTotal.toFixed(2)}</span>
          </SummaryRow>
          <SummaryRow>
            <span>Entrega</span>
            <span>R$ {deliveryFee.toFixed(2)}</span>
          </SummaryRow>
          <SummaryRow style={{ fontWeight: 'bold', fontSize: '1.25rem' }}>
            <span>Total</span>
            <span>R$ {finalTotal.toFixed(2)}</span>
          </SummaryRow>

          <ConfirmButton type="submit">Confirmar Pedido</ConfirmButton>
        </CartTotalContainer>
      </CartSection>
    </CheckoutContainer>
  )
}