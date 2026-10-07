import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeWrapper = styled.main`
  width: min(100% - 2rem, 1200px);
  margin: 1.5rem auto 4rem;
`;

export const Hero = styled.section`
  min-height: 23rem;
  display: grid;
  grid-template-columns: 1fr 0.85fr;
  overflow: hidden;
  border: 2px solid var(--brown);
  border-radius: 1rem;
  background: var(--blueDark);
  box-shadow: 0 14px 30px rgba(40, 42, 54, 0.15);

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCopy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: clamp(1.5rem, 5vw, 3.5rem);

  .eyebrow {
    color: #e7c48a;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.16em;
  }

  h1 {
    max-width: 14ch;
    margin: 0.8rem 0;
    color: var(--white);
    font-size: clamp(2rem, 5vw, 3.4rem);
    line-height: 1.12;
  }

  p {
    max-width: 34rem;
    color: #eee5d3;
    line-height: 1.65;
  }
`;

export const HeroArtwork = styled.div`
  position: relative;
  min-height: 23rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, var(--blueDark) 0%, rgba(46, 56, 78, 0.12) 45%, rgba(46, 56, 78, 0.08) 100%);
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    object-fit: cover;
    object-position: 43% 55%;
    filter: saturate(0.88);
  }

  @media (max-width: 720px) {
    min-height: 15rem;
    order: -1;

    &::after {
      background: linear-gradient(180deg, rgba(46, 56, 78, 0.02) 20%, rgba(46, 56, 78, 0.82) 100%);
    }
  }
`;

export const PrimaryLink = styled(Link)`
  margin-top: 1.5rem;
  padding: 0.75rem 1.1rem;
  border: 1px solid #e7c48a;
  border-radius: 0.45rem;
  background: var(--brown);
  color: var(--black);
  font-weight: 700;
  transition: transform 0.2s, filter 0.2s;

  &:hover, &:focus-visible {
    filter: brightness(1.08);
    transform: translateY(-2px);
  }
`;

export const SectionHeading = styled.header`
  margin: 2.5rem 0 1rem;

  h2 {
    color: var(--blueDark);
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  p {
    margin-top: 0.35rem;
    color: #5a5b63;
  }
`;

export const FeatureGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled(Link)`
  min-height: 16rem;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: flex-end;
  border: 2px solid var(--brown);
  border-radius: 0.8rem;
  background: var(--blueDark);
  isolation: isolate;

  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    inset: 0;
    background: linear-gradient(0deg, rgba(40, 42, 54, 0.98) 0%, rgba(40, 42, 54, 0.48) 55%, rgba(40, 42, 54, 0.05) 100%);
  }

  &:hover img, &:focus-visible img {
    transform: scale(1.04);
  }

  &:focus-visible {
    outline: 3px solid var(--brown);
    outline-offset: 3px;
  }
`;

export const FeatureImage = styled.img`
  position: absolute;
  z-index: -2;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 55%;
  transition: transform 0.35s ease;
`;

export const FeatureCopy = styled.div`
  padding: 1.25rem;

  h3 {
    color: var(--white);
    font-size: 1.4rem;
  }

  p {
    margin: 0.35rem 0 0.8rem;
    color: #f1e8d8;
    line-height: 1.45;
  }

  span {
    color: #e7c48a;
    font-weight: 700;
  }
`;

export const Credits = styled.footer`
  margin-top: 1.5rem;
  color: #5a5b63;
  font-size: 0.85rem;

  summary {
    width: fit-content;
    color: var(--blueDark);
    cursor: pointer;
    font-weight: 700;
  }

  p { margin: 0.6rem 0 0.3rem; }
  ul { padding-left: 1.2rem; }
  a { color: #70502b; text-decoration: underline; }

  @media (max-width: 520px) {
    ul { padding-left: 1rem; }
  }
`;
