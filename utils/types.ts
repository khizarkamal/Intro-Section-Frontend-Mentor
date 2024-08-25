type ButtonType = {
  text: string;
  styles: string;
};

type SubLink = {
  icon: string;
  text: string;
  link: string;
};

type Link = {
  id: number;
  text: string;
  subLinks?: SubLink[];
  href?: string;
};

type CustomLinkComponentType = {
  link: Link;
  mobile: boolean;
};

type SideNavigationProps = {
  closeNavigation: () => void;
};

export type {
  ButtonType,
  Link,
  SideNavigationProps,
  SubLink,
  CustomLinkComponentType,
};
