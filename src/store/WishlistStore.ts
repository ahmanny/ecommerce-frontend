import { IWishlistItem } from "@/types/wishlist.types";
import { create } from "zustand";
import { persist } from "zustand/middleware";



interface WishlistState {
    items: IWishlistItem[];
    setItems: (items: IWishlistItem[]) => void;
    addItem: (item: IWishlistItem) => void;
    removeItem: (productId: string) => void;
    clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
    persist(
        (set, get) => ({
            items: [],
            setItems: (items) => set({ items }),
            addItem: (item) => {
                if (!get().items.find((i) => i.productId === item.productId)) {
                    set((state) => ({
                        items: [...state.items, item],
                    }));
                }
            },
            removeItem: (productId) => {
                set((state) => ({
                    items: state.items.filter((item) => item.productId !== productId),
                }));
            },
            // set the items to an empty array
            clearWishlist: () => set({ items: [] }),
        }),
        {
            name: "wishlist-storage", // key name in localStorage
        }
    )
);
