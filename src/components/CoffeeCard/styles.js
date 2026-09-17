import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  background: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -2rem;
  }

  h3 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.colors['base-title']};
    margin-top: 1rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.colors['base-label']};
    margin-top: 0.5rem;
  }
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  span {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${(props) => props.theme.colors['base-text']};
  }
`

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  button {
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.purple};
    cursor: pointer;
    font-weight: bold;
    
    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`