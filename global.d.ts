interface ItemType {
  id?: number;
  name: string;
  price?: number;
  options?: any[];
}

interface CartReduxState {
  items?: ItemType[];
}
