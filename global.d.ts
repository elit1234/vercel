interface ItemType {
  id?: number;
  name: string;
  price: number;
}

interface CartReduxState {
  items?: ItemType[];
}
