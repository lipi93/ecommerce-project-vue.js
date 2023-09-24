import { ref, onMounted, onUnmounted } from 'vue';

const cartItemCount = ref(0);

const updateCartItemCount = () => {
    let cartItem = JSON.parse(localStorage.getItem("cart"))
    cartItemCount.value = cartItem.length
};

const useCartEventBus = () => {
  onMounted(() => {
    let cartItem = JSON.parse(localStorage.getItem("cart"))
    cartItemCount.value = cartItem.length
  });

  onUnmounted(() => {
    // Clean up listeners when the component is unmounted
  });

  return {
    cartItemCount,
    updateCartItemCount,
  };
};

export default useCartEventBus;


