import ColorScale from 'color-scales';
import styled from 'styled-components';
import { Color } from '../../styles/models';
import { withFadeUpAnimation } from '../HOCs';

export const LinkWrapper = styled.a`
  box-sizing: border-box;
  padding: 0px;
  border-radius: 6px;
`;

export const LPContainer = styled.div`
  box-sizing: border-box;
  background: inherit;
  padding: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;
  overflow: visible;
  min-height: 400px;
  height: calc(100vh - 132px);
  width: 100%;
  background-color: ${Color.Base};
`;

export const LPTrainerPokemonImageContainer = styled.div`
  height: 100%;
  width: 50%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LPTrainerPokemonImage = styled.img`
  object-fit: cover;
  height: auto;
  width: 100%;
`;

export const CallToActionContainer = styled.div`
  height: 100%;
  width: 50%;
  margin: 0;
  padding: 0;
  overflow: visible;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${Color.Text};
  text-shadow: 0px 0px 19.2px rgba(255, 255, 255, 0.75), 0px 0px 19.2px #523df1;
`;

export const Subtitle = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${Color.Palette400};
`;

export const ButtonContainer = styled.div`
  min-width: 480px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  overflow: visible;
`;

export const Button = styled.button`
  background-color: ${Color.Palette200};
  color: ${Color.Text};
  border-radius: 6px;
  border: 1px solid black;
  height: 36px;
  width: 140px;
  display: flex;
  font-size: 14px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.15;
  padding: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${new ColorScale(0, 100, [Color.Palette200, '#ffffff']).getColor(30).toHexString()};
    color: #ffffff;
    box-shadow: 0px 0px 8px rgb(255, 255, 255, 0.4);
  }

  &:active {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const WidgetTwoContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
  background-color: ${Color.Tint300};
`;

export const TextContainer = styled.div`
  width: 40%;
  background: inherit;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CardContainer = styled.div`
  width: 60%;
  background: inherit;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const CardImage = styled.img`
  height: 320px;
  width: auto;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

export const FadeUpActionBlock = withFadeUpAnimation(CallToActionContainer);
