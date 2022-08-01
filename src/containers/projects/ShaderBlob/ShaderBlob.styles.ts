import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  align-items: center;
  padding: auto;
  width: 100%;
  min-height: 100%;
`;

interface ReadyWrapperProps {
  shouldReveal: boolean;
}

export const ReadyWrapper = styled.div<ReadyWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
  background-color: white;

  ${props =>
    props.shouldReveal &&
    css`
      opacity: 0;
      user-select: none;
      pointer-events: none;
    `}
`;

export const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: #fff;
`;

export const Container = styled.div`
 height: 100vh;
margin: auto;

color:${(props: { visible: boolean }) => props.visible ? css`black` : css`transparent`};
transition:all 1s ease-in-out;
transition-delay: 2s;

width:90vw;
@media (min-width: 768px) {
    width: 80vw;
  }
  @media (min-width: 1440px) {
    width: 1024px;
  }
`;
export const Center = styled.div`
 height: 100vh;
width: 100%;
padding:auto;
display: flex;      
  justify-content: center;
        align-items: center;
     vertical-align: middle;
     
  flex-direction: column;
  
`;

export const Title = styled.h1`
 position: relative;
 white-space: nowrap;
  z-index: 2;
  background: transparent;
  font-family:'Josefin Sans', sans-serif;
  

  //background: red;
  padding:auto;
  align-self: 'center';
  text-align: center;
  font-size: 11vw;

  @media (min-width: 768px) {

    font-size: 13rem;
  }
  @media (min-width: 1440px) {
    font-size: 16rem;
  }
`;
export const Subtitle = styled.h2`
 position: relative;
 //background:green;
  z-index: 2;
  padding:auto;
  align-self: 'center';
  white-space: nowrap;
  
  text-align: center;
  font-family:'Work Sans', sans-serif;
  //font-family:'Julius Sans One', sans-serif;
  font-weight: 300;
  font-size: 7vw;


  @media (min-width: 768px) {
    text-align: left;
    font-size: 6rem;
  }
  @media (min-width: 1440px) {
    font-size: 7rem;
  }

`;

export const Content = styled.text`
 position: relative;
 //background:green;
  z-index: 1;
  font-family:'Work Sans', sans-serif;
  font-weight: 200;
  font-size: 1.4rem;
  flex-grow: 1;
    flex-basis: 0;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 1.8rem;
  }
  @media (min-width: 1440px) {
    font-size: 2rem;
  }

`;