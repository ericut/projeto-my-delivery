import { IPedidosProps, IPedidoDataOrdersProps } from '../interfaces/pedidos.interface';

export const pedidosData: IPedidosProps<IPedidoDataOrdersProps> = {
  orders: [
    {
      _id: '5f1a4d41db80ebde9c5bbd18',
      reference: 1231251,
      store: 'MEGAPIZZA',
      customer: {
        name: 'Kayo',
      },
      amount: 8980,
      deliveryFee: 1000,
      date: '2021-07-20 12:20:30',
    },
    {
      _id: '5f1a4e70db80ebde9c5bbd1e',
      reference: 1231252,
      store: 'SUPERB',
      customer: {
        name: 'Kayo',
      },
      amount: 8980,
      deliveryFee: 1000,
      date: '2021-07-20 11:20:30',
    },
    {
      _id: '5f516e4a06bcc942f8f89304',
      reference: 1231253,
      store: 'DBURGER',
      customer: {
        name: 'Jon Snow',
      },
      amount: 2980,
      deliveryFee: 1000,
      date: '2021-07-22 11:20:30',
    },
    {
      _id: '60dbc44e974567510b629d3d',
      reference: 1231254,
      store: 'ESFIHARIA',
      customer: {
        name: 'Kayo',
      },
      amount: 8980,
      deliveryFee: 1000,
      date: '2021-07-22 12:25:30',
    },
    {
      _id: '60e5e5d35c303c2571f1c842',
      reference: 1231255,
      store: 'DPIZZA',
      customer: {
        name: 'JUAREZ',
      },
      amount: 8980,
      deliveryFee: 1030,
      date: '2021-07-17 12:25:30',
    },
    {
      _id: '60e710eb850c9854f6ca2c7f',
      reference: 1231256,
      store: 'DPIZZA',
      customer: {
        name: 'JUAREZ',
      },
      amount: 8980,
      deliveryFee: 1030,
      date: '2021-05-18 10:30:30',
    },
    {
      _id: '60f9f29bdb5c71de58a08d74',
      reference: 1231257,
      store: 'ZEROGRAU',
      customer: {
        name: 'teste',
      },
      amount: 20000,
      deliveryFee: 1000,
      date: '2021-04-17 11:30:30',
    },
  ],
};
