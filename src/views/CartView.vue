<template>
  <div class="cart-form my-5 py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="cart-item-wrap">
            <table class="table">
              <thead>
                <tr>
                  <th>Product Details</th>
                  <th>Qunatity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>

                <tr v-for="item in products">
                  <td>
                    <div class="cart-content d-flex align-items-center">
                      <div class="singlecart-img">
                        <img :src="'http://127.0.0.1:8000/storage/images/' + item.image" alt="" />
                      </div>
                      <div class="cart-title">
                        <p>{{ item.title }}</p>
                        <button
                          @click="removeFromCart(item.id)"
                          class="btn btn-danger"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="cart-quantity d-flex align-items-center">
                      <div @click="decremnet(item.id)" class="cart-minus">-</div>
                      <div class="cart-value">
                        <input type="number" name="" id="qtyVal" :value="item.quantity" />
                      </div>
                      <div @click="incremnetQty(item.id)" class="cart-plus">+</div>
                    </div>
                  </td>
                  <td>
                    <div class="cart-price">${{ item.price }}</div>
                  </td>
                  <td>
                    <div class="cart-price">${{ item.price * item.quantity }}</div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        <div class="col-md-3">
          <div class="order-summary">
            <h3>Order Summary</h3>

            <div
            v-for="item in products"
              class="order-items-price d-flex align-items-center justify-content-between"
            >
              <p>{{ item.title }} <span>{{item.quantity}}</span></p>
              <p>${{item.quantity * item.price}}</p>
            </div>

            <div class="payments-items">
              <p>Payments Method</p>
              <select class="s-item" name="" id="">
                <option value="">Cash on delivery</option>
                <option value="">Visa</option>
                <option value="">Bkash</option>
                <option value="">Nagad</option>
              </select>
            </div>
            <div
              class="total-price d-flex align-items-center justify-content-between"
            >
              <p>Total</p>
              <p>${{ products.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2) }}</p>
            </div>
            <div class="payment-submit my-2">
              <button @click="checkout" class="btn btn-primary">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.getCart();
  },
  methods: {
    checkout(){
      this.$router.push({ name: "checkout" });
    },
    getCart() {
      this.products = this.$store.getters.getCartitem;
    },
    incremnetQty(id){
      let qty = document.getElementById("qtyVal").value
      this.$store.dispatch('incremnet', {id,qty});
    },
    decremnet(id){
      let qty = document.getElementById("qtyVal").value
      if(qty > 1){
        this.$store.dispatch('decremnet', {id,qty});
      }
    },
    removeFromCart(id){
      this.$store.dispatch('removeItem', id);
      this.getCart();
    }
  },
};
</script>

<style scoped>
.singlecart-img {
  width: 150px;
  height: 80px;
  margin-right: 15px;
}

.singlecart-img img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.cart-title span {
  color: red;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}

.cart-minus,
.cart-plus {
  width: 45px;
  height: 45px;
  background-color: #34b1da;
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.cart-value input {
  width: 60px;
  height: 45px;
  text-align: center;
}
.payments-items {
  margin: 10px;
  padding: 15px;
}
.s-item option {
  color: black;
  font-size: 18px;
}
.s-item option:hover {
  color: #34b1da;
}

.payment-submit {
  margin: 10px;
  padding: 20px;
  color: #24262b;
}
</style>