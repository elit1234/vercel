interface ItemType {
  id?: number;
  name: string;
  price?: number;
  options?: any[];
  amount?: number;
}

interface CartReduxState {
  items?: ItemType[];
}
