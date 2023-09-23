export interface LayoutProps  {

}

export interface ButtonProps  {
  className?: string;
  onClick: () => void;
}



export interface PopupMenuProps  {
  opened?: boolean;
  onClick: () => void;
}

export interface MenuProps  {
  handlerMenu: () => void;
}

export interface BurgerProps  {
  onClick: () => void;
}