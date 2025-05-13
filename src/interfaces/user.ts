export interface UserAddress {
  street: string;
  number: number;
  city: string;
  state: string;
  zip: string;
}

export interface User {
  name: string;
  address: UserAddress;
}