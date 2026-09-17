import { motion } from 'framer-motion'
import { Coffee, ShoppingBag, Timer, Package } from 'lucide-react'
import { HeroContainer, HeroContent, HeroTitle, BenefitsGrid, IconBadge } from './styles'

export function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <HeroTitle>
            Encontre o café perfeito para <span>qualquer hora do dia</span>
          </HeroTitle>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora com entrega rápida e rastreada.
          </p>

          <BenefitsGrid>
            <div>
              <IconBadge $bg="#C47F17">
                <ShoppingBag size={16} color="#FFF" />
              </IconBadge>
              <span>Compra simples e segura</span>
            </div>

            <div>
              <IconBadge $bg="#403937">
                <Package size={16} color="#FFF" />
              </IconBadge>
              <span>Embalagem mantém o café intacto</span>
            </div>

            <div>
              <IconBadge $bg="#DBAC2C">
                <Timer size={16} color="#FFF" />
              </IconBadge>
              <span>Entrega rápida e rastreada</span>
            </div>

            <div>
              <IconBadge $bg="#8047F8">
                <Coffee size={16} color="#FFF" />
              </IconBadge>
              <span>O café chega fresquinho até você</span>
            </div>
          </BenefitsGrid>
        </motion.div>
      </HeroContent>

      <motion.div
        className="hero-image-wrapper"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="glow-effect" />
        <img 
          src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop" 
          alt="Xícara de café artesanal" 
        />
      </motion.div>
    </HeroContainer>
  )
}