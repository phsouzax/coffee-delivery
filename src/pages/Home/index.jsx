import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hero } from '../../components/Hero'
import { CoffeeCard } from '../../components/CoffeeCard'
import { coffees } from '../../data/coffees'

const CATEGORIES = ['Todos', 'Tradicional', 'Especial', 'Com leite', 'Gelado']

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredCoffees = selectedCategory === 'Todos'
    ? coffees
    : coffees.filter((coffee) => 
        coffee.tags.some(tag => tag.toLowerCase() === selectedCategory.toLowerCase())
      )

  return (
    <main style={{ paddingBottom: '5rem', maxWidth: '1120px', margin: '0 auto', paddingInline: '1.5rem' }}>
      <Hero />

      {/* Cabeçalho da Seção de Cafés + Filtros */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        flexWrap: 'wrap',
        gap: '1rem',
        margin: '3.5rem 0 2.5rem' 
      }}>
        <h2 style={{ fontSize: '2rem', color: '#403937' }}>
          Nossos cafés
        </h2>

        {/* Botões de Categoria */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category
            return (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.375rem 0.75rem',
                  borderRadius: '100px',
                  border: isActive ? '1px solid #8047F8' : '1px solid #E6E5E5',
                  background: isActive ? '#8047F8' : 'transparent',
                  color: isActive ? '#FFF' : '#C47F17',
                  fontWeight: 'bold',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {category}
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Grid Animado com AnimatePresence */}
      <motion.div 
        layout
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(256px, 1fr))', 
          gap: '2.5rem 2rem' 
        }}
      >
        <AnimatePresence>
          {filteredCoffees.map((coffee) => (
            <motion.div
              key={coffee.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <CoffeeCard coffee={coffee} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </main>
  )
}