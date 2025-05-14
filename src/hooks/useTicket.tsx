'use client'
import { useEffect, useState } from "react";
import { storage } from "@/services/storage";
import { Product } from "@/interfaces/product";

const STORAGE_KEY = "ticket";

export interface TicketItem {
  id: string;
  productId: string;
  name: string;
  quantity: number;
  unitValue: number;
  total: number;
  options: Record<string, unknown>;
}

interface FieldError {
  [key: string]: string;
}

export function useTicket() {
  const [ticket, setTicket] = useState<TicketItem[]>([]);

  useEffect(() => {
    const stored = storage.get<TicketItem[]>(STORAGE_KEY);
    if (stored) {
      setTicket(stored);
    }
  }, []);

  function validateTicketItem(
    product: Product,
    values: Record<string, unknown>
  ): FieldError {
    const errors: FieldError = {};

    for (const option of product.options) {
      const value = values[option.id];

      if (option.required) {
        const isEmpty =
          value === "" ||
          (Array.isArray(value) && value.length === 0) ||
          (option.type === "integer" &&
            typeof value === "object" &&
            Object.values(value as Record<string, number>).every(
              (v) => v === 0
            ));

        if (isEmpty) {
          errors[
            `${option.title}`
          ] = `O campo "${option.title}" é obrigatório.`;
          continue;
        }
      }

      if (option.type === "multi" && option.min != null && option.max != null) {
        const selectedCount = Array.isArray(value) ? value.length : 0;

        if (selectedCount < option.min) {
          errors[
            `${option.title}`
          ] = `Selecione pelo menos ${option.min} itens em "${option.title}".`;
        }

        if (selectedCount > option.max) {
          errors[
            `${option.title}`
          ] = `Selecione no máximo ${option.max} itens em "${option.title}".`;
        }
      }

      if (
        option.type === "integer" &&
        option.min != null &&
        option.max != null
      ) {
        const sum =
          typeof value === "object"
            ? Object.values(value as Record<string, number>).reduce(
                (a, b) => a + b,
                0
              )
            : 0;

        if (sum < option.min) {
          errors[
            `${option.title}`
          ] = `Adicione pelo menos ${option.min} itens em "${option.title}".`;
        }

        if (sum > option.max) {
          errors[
            `${option.title}`
          ] = `Adicione no máximo ${option.max} itens em "${option.title}".`;
        }
      }
    }

    return errors;
  }

  function remove(id: string) {
    const updated = ticket.filter((item) => item.id !== id);
    setTicket(updated);
    storage.set<TicketItem[]>(STORAGE_KEY, updated);
  }

  function update(itemUpdated: TicketItem) {
    const stored = storage.get<TicketItem[]>(STORAGE_KEY);
    const items: TicketItem[] = stored || [];

    if(!items.length){
      setTicket([itemUpdated]);
      storage.set(STORAGE_KEY, [itemUpdated]);
      return;
    }

    const updatedItems = items.map((item) =>
      item.productId === itemUpdated.productId ? itemUpdated : item
    );

    setTicket(updatedItems);
    storage.set(STORAGE_KEY, updatedItems);
  }

  function clear() {
    setTicket([]);
    storage.remove(STORAGE_KEY);
  }

  return {
    ticket,
    remove,
    update,
    clear,
    validateTicketItem,
  };
}
