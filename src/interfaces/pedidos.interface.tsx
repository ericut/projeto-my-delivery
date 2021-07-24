export interface IPedidosProps<T> {
  orders: Array<T>;
}

export interface IPedidoDataOrdersProps {
  _id: string;
  reference: number;
  store: string;
  customer: IPedidoCustomerProps;
  amount: number;
  deliveryFee: number;
  date?: string;
  address?: IPedidoAdressProps;
  items?: IPedidoItemsProps[];
  payments?: IPedidoPaymentsProps[];
}

export interface IPedidoCustomerProps {
  name: string;
}

export interface IPedidoPaymentsProps {
  method: string;
  amount: number;
}

export interface IPedidoAdressProps {
  number: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  street: string;
}

export interface IPedidoItemsProps {
  name: string;
  amount: string;
  quantity: number;
  note?: string | undefined | null;
}
