import { destroyCookie } from 'nookies';
import { useUserStore } from '@/store/UserStore';
import { useWishlistStore } from '@/store/WishlistStore';
import { useUiStore } from '@/store/UiStore';
import { useCartStore } from '@/store/CartStore';
import { useOrderStore } from '@/store/OrderStore';

export const logout = () => {
    // 1. Remove the token from cookies
    destroyCookie(null, "access-token", { path: '/' });
    destroyCookie(null, "refresh-token", { path: '/' });
    destroyCookie(null, "user-role", { path: '/' });

    // 2. Reset the Zustand stores using `getState` method
    const userStore = useUserStore.getState();
    const cartStore = useCartStore.getState();
    const wishlistStore = useWishlistStore.getState();
    const orderStore = useOrderStore.getState();
    const uiStore = useUiStore.getState();

    // Reset all the stores
    userStore.logout();
    cartStore.clearCart();
    wishlistStore.clearWishlist();
    orderStore.clearOrder();
    uiStore.reset();

};
