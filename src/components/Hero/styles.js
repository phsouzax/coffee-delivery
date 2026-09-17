import styled from 'styled-components'

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  padding: 4rem 0;

  .hero-image-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 460px;
      border-radius: 24px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
      z-index: 2;
    }

    .glow-effect {
      position: absolute;
      width: 320px;
      height: 320px;
      background: radial-gradient(circle, rgba(128, 71, 248, 0.25) 0%, rgba(255, 255, 255, 0) 70%);
      filter: blur(40px);
      z-index: 1;
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
  }
`

export const HeroContent = styled.div`
  max-width: 588px;

  p {
    font-size: 1.25rem;
    color: #403937;
    margin-top: 1rem;
    line-height: 1.4;
  }
`

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  color: #272221;

  span {
    background: linear-gradient(135deg, #8047f8 0%, #c47f17 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 2rem;
  margin-top: 3.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      font-size: 0.95rem;
      color: #574f4d;
    }
  }
`

export const IconBadge = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${(props) => props.$bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`