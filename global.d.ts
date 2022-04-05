interface ItemType {
  id?: number;
  name: string;
  price?: number;
  options?: any[];
  amount?: number;
}

interface CartReduxState {
  items?: ItemType[];
  userDetails?: UserInputType;
}

interface UserInputType {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  answer: number;
}
