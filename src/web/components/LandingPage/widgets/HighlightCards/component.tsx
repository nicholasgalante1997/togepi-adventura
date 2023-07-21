import React, { memo } from 'react';
import { WidgetTwoContainer, TextContainer, CardContainer, CardImage, LinkWrapper } from '../../views';
import { LandingPageProps } from '../../component';
import { withFadeUpAnimation, withBoxShadowRaiseAnimation } from '@web/components/HOCs';
import { getString } from '@web/contexts/localization';
import { HighlightCardsWidgetProps } from './types';

function Heading({ children, ...rest }: any) {
    return <h2 {...rest}>{children}</h2>;
  }
  
  const FadeUpHeading = withFadeUpAnimation(Heading);
  const ImageWithBoxShadow = withBoxShadowRaiseAnimation(CardImage);
  
  function ImageLink(props: { href: string; imageSrc: string; imageAlt: string; className?: string }) {
    return (
      <LinkWrapper href={props.href} target="_self" tabIndex={1} className={props.className}>
        <ImageWithBoxShadow loading="lazy" src={props.imageSrc} alt={props.imageAlt} />
      </LinkWrapper>
    );
  }
  

function HighlightCardsComponent(props: LandingPageProps & HighlightCardsWidgetProps) {
    const heading = getString(props.pagePrefix + '_highlight_cards_widget_title');
    return (
      <WidgetTwoContainer className="enter-in">
        <TextContainer>
          <FadeUpHeading style={{ color: 'white' }}>
            {heading}
          </FadeUpHeading>
        </TextContainer>
        <CardContainer>
          {props.layout.banner.cards.map((cardProps) => (
            <ImageLink imageSrc={cardProps.images.large} imageAlt={cardProps.name} href={`/card/${cardProps.id}`} />
          ))}
        </CardContainer>
      </WidgetTwoContainer>
    );
  }

export const LPHighlightCardsWidget = memo(HighlightCardsComponent);
