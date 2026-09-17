import styled from 'styled-components'

export const SuccessContainer = styled.div`
  max-width: 70rem;
  margin: 2.5rem auto;
  padding: 0 1.5rem;

  .content {
    margin-top: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 960px) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  .illustration {
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      height: auto;
    }
  }
`

export const SuccessHeader = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 800;
    color: #C47F17;
  }

  p {
    font-size: 1.25rem;
    color: #403937;
    margin-top: 0.25rem;
  }
`

export const OrderInfoCard = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  background: #FAFAFA;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }
`

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: #574F4D;

    strong {
      color: #574F4D;
    }
  }
`

export const IconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.$bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`