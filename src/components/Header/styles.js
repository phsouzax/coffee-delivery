import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0;
  position: sticky;
  top: 0;
  background: rgba(250, 250, 250, 0.8);
  backdrop-filter: blur(12px);
  z-index: 10;

  .content {
    max-width: 1120px;
    margin: 0 auto;
    padding-inline: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: #EBE5F9;
  color: #4B2995;
  font-size: 0.875rem;
`

export const CartButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: #F8F0E5;
  cursor: pointer;
`

export const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #C47F17;
  color: #FFF;
  font-size: 0.75rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`