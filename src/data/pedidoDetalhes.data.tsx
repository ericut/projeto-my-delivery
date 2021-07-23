import { IPedidosProps, IPedidoDataOrderDetailProps } from '../interfaces/pedidos.interface';

export const pedidoDetalhesData: IPedidosProps<IPedidoDataOrderDetailProps> = {
  orders: [
    {
      _id: '5f1a4d41db80ebde9c5bbd18',
      reference: 1231251,
      store: 'DPIZZA',
      customer: {
        name: 'Kayo',
      },
      address: {
        number: '123',
        neighborhood: 'Vila Olímpia',
        complement: 'Sala 1',
        city: 'Sampa',
        state: 'SP',
        street: 'R. teste',
      },
      items: [
        {
          name: 'Pizza',
          amount: '4990',
          quantity: 1,
          note: null,
        },
        {
          name: 'Hamburguer',
          amount: '2990',
          quantity: 1,
          note: null,
        },
      ],
      amount: 8980,
      deliveryFee: 1000,
      payments: [
        {
          method: 'CREDIT',
          amount: 8980,
        },
      ],
      date: '2021-07-20 12:20:30',
    },
    {
      _id: '5f1a4e70db80ebde9c5bbd1e',
      reference: 1231252,
      store: 'DPIZZA',
      customer: {
        name: 'Kayo',
      },
      address: {
        number: '123',
        neighborhood: 'Vila Olímpia',
        complement: 'Sala 1',
        city: 'Sampa',
        state: 'SP',
        street: 'R. teste',
      },
      items: [
        {
          name: 'Hamburguer',
          amount: '2990',
          quantity: 1,
          note: null,
        },
        {
          name: 'Pizza',
          amount: '4990',
          quantity: 1,
          note: null,
        },
      ],
      amount: 8980,
      deliveryFee: 1000,
      payments: [
        {
          method: 'CREDIT',
          amount: 8980,
        },
      ],
      date: '2021-07-20 11:20:30',
    },
    {
      _id: '5f516e4a06bcc942f8f89304',
      reference: 1231253,
      store: 'DBURGER',
      customer: {
        name: 'Jon Snow',
      },
      address: {
        number: '123',
        neighborhood: 'Vila Olímpia',
        complement: 'Sala 1',
        city: 'Sampa',
        state: 'SP',
        street: 'R. teste',
      },
      items: [
        {
          name: 'Hamburguer',
          amount: '2990',
          quantity: 1,
          note: null,
        },
      ],
      amount: 8980,
      deliveryFee: 1000,
      payments: [
        {
          method: 'CREDIT',
          amount: 8980,
        },
      ],
      date: '2021-07-22 11:20:30',
    },
    {
      _id: '60dbc44e974567510b629d3d',
      reference: 1231254,
      store: 'DPIZZA',
      customer: {
        name: 'Kayo',
      },
      address: {
        number: '123',
        neighborhood: 'Vila Olímpia',
        complement: 'Sala 1',
        city: 'Sampa',
        state: 'SP',
        street: 'R. teste',
      },
      items: [
        {
          name: 'Pizza',
          amount: '4990',
          quantity: 1,
          note: null,
        },
        {
          name: 'Hamburguer',
          amount: '2990',
          quantity: 1,
          note: null,
        },
      ],
      amount: 8980,
      deliveryFee: 1000,
      payments: [
        {
          method: 'CREDIT',
          amount: 8980,
        },
      ],
      date: '2021-07-22 12:25:30',
    },
    {
      _id: '60e5e5d35c303c2571f1c842',
      reference: 1231255,
      store: 'DPIZZA',
      customer: {
        name: 'JUAREZ',
      },
      address: {
        number: '1234',
        neighborhood: 'Vila da Laranja',
        complement: 'Sala 16',
        city: 'Laranjeiras',
        state: 'PP',
        street: 'R. teste',
      },
      items: [
        {
          name: 'Esfiha',
          amount: '4990',
          quantity: 10,
          note: null,
        },
      ],
      amount: 89840,
      deliveryFee: 10300,
      payments: [
        {
          method: 'CREDIT',
          amount: 8980,
        },
      ],
      date: '2021-07-17 12:25:30',
    },
    {
      _id: '60e710eb850c9854f6ca2c7f',
      reference: 1231256,
      store: 'DPIZZA',
      customer: {
        name: 'JUAREZ',
      },
      address: {
        number: '1234',
        neighborhood: 'Vila da Laranja',
        complement: 'Sala 16',
        city: 'Laranjeiras',
        state: 'PP',
        street: 'R. teste',
      },
      items: [
        {
          name: 'Esfiha',
          amount: '4990',
          quantity: 10,
          note: null,
        },
      ],
      amount: 89840,
      deliveryFee: 10300,
      payments: [
        {
          method: 'CREDIT',
          amount: 8980,
        },
      ],
      date: '2021-07-18 10:30:30',
    },
    {
      _id: '60f9f29bdb5c71de58a08d74',
      reference: 1231257,
      store: 'DPIZZA',
      customer: {
        name: 'teste',
      },
      address: {
        number: '10',
        neighborhood: 'bairro',
        complement: 'complemento',
        city: 'cidade',
        state: 'ESTado',
        street: 'RUA',
      },
      items: [
        {
          name: 'DESODORANTE',
          amount: '1000',
          quantity: 10,
          note: null,
        },
      ],
      amount: 20000,
      deliveryFee: 1000,
      payments: [
        {
          method: 'CREDIT',
          amount: 10,
        },
      ],
      date: '2021-07-17 11:30:30',
    },
  ],
};
