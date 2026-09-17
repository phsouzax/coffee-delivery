import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, DollarSign, CreditCard, Landmark, Building, Trash2, Plus, Minus } from 'lucide-react'
import { CartContext } from '../../contexts/CartContext'
import {
  CheckoutContainer,
  SectionTitle,
  FormCard,
  AddressGrid,
  PaymentOptions,
  PaymentButton,
  OrderSummary,
  CartItem,
  TotalRow,
  ConfirmButton,
} from './styles'

export function Checkout() {
  const { cartItems, removeCoffeeFromCart, updateCoffeeQuantity, clearCart } = useContext(CartContext)
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [address, setAddress] = useState({
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    uf: '',
  })

  const navigate = useNavigate()

  const itemsTotal = cartItems
    ? cartItems.reduce((acc, item) => acc + Number(item.price) * Number(item.quantity), 0)
    : 0

  const deliveryFee = cartItems.length > 0 ? 3.50 : 0
  const grandTotal = itemsTotal + deliveryFee

  function handleInputChange(event) {
    const { name, value } = event.target
    setAddress((prevState) => ({ ...prevState, [name]: value }))
  }

  function handleConfirmOrder(event) {
    event.preventDefault()

    if (cartItems.length === 0) return

    // Redireciona para a tela de Sucesso enviando os dados do formulário
    navigate('/success', {
      state: {
        ...address,
        paymentMethod,
      },
    })

    clearCart()
  }

  return (
    <CheckoutContainer as="form" onSubmit={handleConfirmOrder}>
      {/* Coluna da Esquerda: Formulário & Pagamento */}
      <div className="left-column">
        <SectionTitle>Complete seu pedido</SectionTitle>

        <FormCard>
          <div className="card-header">
            <MapPin size={22} color="#C47F17" />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <AddressGrid>
            <input
              type="text"
              placeholder="CEP"
              className="cep"
              name="cep"
              value={address.cep}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Rua"
              className="street"
              name="street"
              value={address.street}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Número"
              className="number"
              name="number"
              value={address.number}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Complemento"
              className="complement"
              name="complement"
              value={address.complement}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Bairro"
              className="neighborhood"
              name="neighborhood"
              value={address.neighborhood}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Cidade"
              className="city"
              name="city"
              value={address.city}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="UF"
              className="uf"
              maxLength={2}
              name="uf"
              value={address.uf}
              onChange={handleInputChange}
              required
            />
          </AddressGrid>
        </FormCard>

        <FormCard style={{ marginTop: '0.75rem' }}>
          <div className="card-header">
            <DollarSign size={22} color="#8047F8" />
            <div>
              <h3>Pagamento</h3>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>

          <PaymentOptions>
            <PaymentButton
              type="button"
              $isSelected={paymentMethod === 'credit'}
              onClick={() => setPaymentMethod('credit')}
            >
              <CreditCard size={16} color="#8047F8" />
              <span>Cartão de Crédito</span>
            </PaymentButton>

            <PaymentButton
              type="button"
              $isSelected={paymentMethod === 'debit'}
              onClick={() => setPaymentMethod('debit')}
            >
              <Building size={16} color="#8047F8" />
              <span>Cartão de Débito</span>
            </PaymentButton>

            <PaymentButton
              type="button"
              $isSelected={paymentMethod === 'pix'}
              onClick={() => setPaymentMethod('pix')}
            >
              <Landmark size={16} color="#8047F8" />
              <span>PIX / Dinheiro</span>
            </PaymentButton>
          </PaymentOptions>
        </FormCard>
      </div>

      {/* Coluna da Direita: Resumo do Pedido */}
      <div className="right-column">
        <SectionTitle>Cafés selecionados</SectionTitle>

        <OrderSummary>
          <AnimatePresence initial={false}>
            {cartItems.length === 0 ? (
              <p className="empty-msg">Seu carrinho está vazio ☕</p>
            ) : (
              cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CartItem>
                    <img src={item.image} alt={item.title} />
                    
                    <div className="info">
                      <span className="title">{item.title}</span>
                      <div className="actions">
                        <div className="counter">
                          <button type="button" onClick={() => updateCoffeeQuantity(item.id, Number(item.quantity) - 1)}>
                            <Minus size={14} />
                          </button>
                          <span>{item.quantity}</span>
                          <button type="button" onClick={() => updateCoffeeQuantity(item.id, Number(item.quantity) + 1)}>
                            <Plus size={14} />
                          </button>
                        </div>

                        <button 
                          type="button" 
                          className="remove-btn" 
                          onClick={() => removeCoffeeFromCart(item.id)}
                        >
                          <Trash2 size={14} color="#8047F8" />
                          <span>Remover</span>
                        </button>
                      </div>
                    </div>

                    <span className="price">R$ {(Number(item.price) * Number(item.quantity)).toFixed(2)}</span>
                  </CartItem>
                </motion.div>
              ))
            )}
          </AnimatePresence>

          <div className="totals">
            <TotalRow>
              <span>Total de itens</span>
              <span>R$ {itemsTotal.toFixed(2)}</span>
            </TotalRow>
            <TotalRow>
              <span>Entrega</span>
              <span>R$ {deliveryFee.toFixed(2)}</span>
            </TotalRow>
            <TotalRow className="grand-total">
              <span>Total</span>
              <span>R$ {grandTotal.toFixed(2)}</span>
            </TotalRow>
          </div>

          <ConfirmButton
            type="submit"
            as={motion.button}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={cartItems.length === 0}
          >
            Confirmar Pedido
          </ConfirmButton>
        </OrderSummary>
      </div>
    </CheckoutContainer>
  )
}