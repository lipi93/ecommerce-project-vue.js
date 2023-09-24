<script>
export default {
  props: {
    p: [],
  },
};
</script>

<template>
  
 
  <div v-for="item in p" :key="item.id" class="col-md-3 mt-5">
    <div class="single-products shadow-lg border text-center">
      <div class="card">
        <div class="card-img-box">
          <img class="img-fluid"  :src="'http://127.0.0.1:8000/storage/images/' + item.image" alt="..." />
        </div>
        <div class="card-body">
          <h3 class="p-title">{{ item.title }}</h3>

          <p class="p-price">Price:${{ item.price }}</p>
          <router-link class="btn btn-primary" :to="'/details/' + item.id"
            >Details</router-link
          >
        </div>
      </div>
    </div>
  </div>
 
</template>

<style>
.single-products {
  width: 100%;
}

.card-body {
  text-align: center;
}

.card-img-box {
  width: 100%;
  position: relative;
  padding: 10px;
}

.card-img-box img {
  width: 100%;
  height: 200px;
}
.card-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  transition: 0.5s;
}

.card-icon i {
  width: 40px;
  height: 40px;
  background-color: #ffb400;
  color: white;
  border-radius: 50%;
  text-align: center;
  font-size: 18px;
  line-height: 40px;
  cursor: pointer;
}

.card:hover .card-icon {
  display: block;
}

.card-body h3 {
  text-transform: capitalize;
}

.p-price {
  font-size: 19px;
  color: #34b1da;
}
</style>
