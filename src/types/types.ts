export interface SubMenuItem {
  title: string;
  path: string;
}

export interface MenuItem {
  title: string;
  path: string;
  subItems?: SubMenuItem[]; 
}