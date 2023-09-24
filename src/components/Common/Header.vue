<script>
export default {
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
    getToken() {
      return this.$store.getters.getToken;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("clearToken", "token");
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="@/assets/images/logo.jpg" alt="" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/">Home</RouterLink>
            </li>
            <!-- <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li> -->
            <li class="nav-item">
              <RouterLink class="nav-link" to="/products">Products</RouterLink>
            </li>
            <!-- <li class="nav-item">
                <RouterLink class="nav-link " to="/contact">Contact</RouterLink>
              </li> -->
            <li @click="logout" v-if="getToken" class="nav-item">
              <a class="nav-link" href="#">Log Out</a>
            </li>
            <li v-else class="nav-item">
              <RouterLink class="nav-link" to="/login">Login</RouterLink>
            </li>

            <li class="nav-item">
              <RouterLink class="nav-link position-relative" to="/cart"
                ><i class="fa-solid fa-cart-plus"></i>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                >
                  {{ cartItemCount }}
                  <span class="visually-hidden">unread messages</span>
                </span></RouterLink
              >
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.container {
  background: #cfc08d;
  height: 70px;
}
.nav-link,
.nav-link.active {
  color: #e91e63;
  font-size: 22px;
}
.nav-item a {
  transition: all 0.3s ease;
}
.nav-item a:hover {
  color: #c71585;
}

.cart-icon a {
  font-size: 25px;
  color: black;
  transition: 0.5s;
}
.cart-icon a:hover {
  color: #c71585;
}
.nav-link {
  font-size: 23px !important;
  font-weight: 500;
  line-height: 16px;
  color: black;
  transition: 0.5s;
  position: relative;
}
.nav-link:hover {
  color: #c71585;
}
.nav-link::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 2px;
  left: 0;
  bottom: 0;
  background-color: #da348f;
  transition: 0.5s;
}
.nav-link:hover::after {
  width: 100%;
}
.nav-link.active {
  color: #da348f !important;
}
.btn:hover {
  background-color: #da348f;
  color: #fff;
}
.navbar-brand {
  width: 150px;
}
.navbar-brand img {
  width: 100%;
}
.head-cart {
  margin: 0 10px;
  position: relative;
}
.head-cart a i {
  font-size: 24px;
  color: #da348f;
}
.head-cart p {
  position: absolute;
  top: -15px;
  right: -15px;
  background-color: #da348f;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width: "40px";
  height: "80px";
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
