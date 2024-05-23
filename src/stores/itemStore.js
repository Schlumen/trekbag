import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    set => ({
      items: initialItems,
      addItem: newItem => {
        set(state => ({ items: [...state.items, newItem] }));
      },
      deleteItem: id => {
        set(state => ({
          items: state.items.filter(item => item.id !== id),
        }));
      },
      toggleItem: id => {
        set(state => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, packed: !item.packed } : item
          ),
        }));
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set(state => ({
          items: state.items.map(item => ({ ...item, packed: true })),
        }));
      },
      markAllAsIncomplete: () => {
        set(state => ({
          items: state.items.map(item => ({ ...item, packed: false })),
        }));
      },
    }),
    {
      name: "items",
    }
  )
);
