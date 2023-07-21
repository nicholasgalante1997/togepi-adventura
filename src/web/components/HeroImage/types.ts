export interface HeroImageComponentProps {
    src: string;
    alt: string;
    withLink?: string;
    className?: string;
    id?: string;
    /** defaults to 500px */
    height?: string;
    /** defaults to 100% */
    width?: string;
    /** defaults to 100vw */
    minWidth?: string;
  }