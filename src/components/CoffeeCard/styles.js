import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: #F3F2F2;
  border-radius: 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  img {
    width: 120px;
    height: 120px;
    margin-top: -2.5rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
`

export const Tag = styled.span`
  background: #F8F0E5;
  color: #C47F17;
  font-size: 0.625rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`

export const Title = styled.h3`
  font-size: 1.25rem;
  color: #403937;
  margin-top: 1rem;
`

export const Description = styled.p`
  font-size: 0.875rem;
  color: #8D8686;
  margin-top: 0.5rem;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`

export const Price = styled.div`
  color: #574F4D;
  font-size: 0.875rem;

  span {
    font-size: 1.5rem;
    font-weight: 800;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const Counter = styled.div`
  background: #E6E5E5;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;

  button {
    border: 0;
    background: transparent;
    color: #8047F8;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  span {
    color: #272221;
    font-size: 1rem;
  }
`

export const AddCartButton = styled.button`
  background: #4B2995;
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover {
    background: #8047F8;
  }
`