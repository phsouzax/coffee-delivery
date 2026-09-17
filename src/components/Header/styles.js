import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LocationBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme.colors['purple-light']};
  color: ${(props) => props.theme.colors['purple-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
`

export const CartButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors['yellow-light']};
  color: ${(props) => props.theme.colors['yellow-dark']};
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;

  span {
    position: absolute;
    top: -8px;
    right: -8px;
    background: ${(props) => props.theme.colors['yellow-dark']};
    color: ${(props) => props.theme.colors.white};
    font-size: 0.75rem;
    font-weight: bold;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`