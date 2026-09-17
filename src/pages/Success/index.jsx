import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Clock, DollarSign } from 'lucide-react'
import {
  SuccessContainer,
  SuccessHeader,
  OrderInfoCard,
  InfoRow,
  IconWrapper,
} from './styles'

export function Success() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state) {
    navigate('/')
    return null
  }

  const paymentLabels = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    pix: 'PIX / Dinheiro',
  }

  return (
    <SuccessContainer
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>

      <div className="content">
        <OrderInfoCard>
          <InfoRow>
            <IconWrapper $bgColor="#8047F8">
              <MapPin size={16} color="#FFF" fill="#FFF" />
            </IconWrapper>
            <div>
              <p>
                Entrega em <strong>{state.street}, {state.number}</strong>
                {state.complement && ` - ${state.complement}`}
              </p>
              <p>{state.neighborhood} - {state.city}, {state.uf}</p>
            </div>
          </InfoRow>

          <InfoRow>
            <IconWrapper $bgColor="#DBAC2C">
              <Clock size={16} color="#FFF" />
            </IconWrapper>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </InfoRow>

          <InfoRow>
            <IconWrapper $bgColor="#C47F17">
              <DollarSign size={16} color="#FFF" />
            </IconWrapper>
            <div>
              <p>Pagamento na entrega</p>
              <strong>{paymentLabels[state.paymentMethod]}</strong>
            </div>
          </InfoRow>
        </OrderInfoCard>

        <motion.div
          className="illustration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://raw.githubusercontent.com/rocketseat-education/ignite-reactjs-02-coffee-delivery/main/src/assets/illustration.svg"
            alt="Entregador a caminho no motor scooter"
          />
        </motion.div>
      </div>
    </SuccessContainer>
  )
}