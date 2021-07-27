import React, { createContext, useState, ReactNode, useEffect } from 'react';
// data
import { pedidosData } from '../data/pedidos.data';
// interfaces
import { IPedidoDataOrdersProps } from '../interfaces/pedidos.interface';

interface IListagemContextData {
  dadosListagemPedidos?: IPedidoDataOrdersProps[];
}

interface IListagemProviderProps {
  children?: ReactNode;
}

export const ListagemPedidosContext = createContext({} as IListagemContextData);

export function ListagemPedidosProvider({ children }: IListagemProviderProps) {
  const [dadosListagemPedidos, setDadosListagemPedidos] = useState<IPedidoDataOrdersProps[] | undefined>(
    pedidosData.orders
  );

  useEffect(() => {
    setDadosListagemPedidos(
      pedidosData.orders.map((item) => {
        item.total = item.amount + item.deliveryFee;
        return item;
      })
    );
  }, []);

  return <ListagemPedidosContext.Provider value={{ dadosListagemPedidos }}>{children}</ListagemPedidosContext.Provider>;
}
