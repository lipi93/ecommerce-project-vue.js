import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ProductsView from '../views/ProductsView.vue';
import ContactView from '../views/ContactView.vue';
import DetailView from '../views/DetailView.vue';
import CartView from '../views/CartView.vue';
import CheckoutView from '../views/CheckoutView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import Client from "@/layouts/Client.vue";
import Admin from "@/layouts/Admin.vue";
import NotFound from "@/components/common/NotFound.vue";
import AdminView from "@/views/admin/AdminView.vue";
import AcategoryView from "@/views/admin/AcategoryView.vue";
import AproductsView from "@/views/admin/AproductsView.vue";
import OrderView from "@/views/admin/OrderView.vue";
import InvoiceView from "@/views/admin/InvoiceView.vue";
import store from "../store/Store";
import AbrandView from "@/views/admin/AbrandView.vue"
import { isTokenDecode, isTokenValid } from "@/helper/Token.js";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Client Routes
    {
      name: "/",
      path: "/",
      component: Client,
      children: [
        {
          path: "",
          component: HomeView
        },
        {
          path:"/about",
          component: AboutView
        },
        {
          path:"/products",
          component: ProductsView
        },
        {
          path:"/details/:id",
          component: DetailView
        },
        {
          path:"/cart",
          component: CartView
        },
        {
          name: "checkout",
          path:"/checkout",
          component: CheckoutView,
          meta: { requiresAuth: true, requiresAdmin: false },
        },
        {
          name: "login",
          path:"/login",
          component: LoginView
        },
        {
          name: "register",
          path:"/register",
          component: RegisterView
        },
        {
          path: "/:pathMatch(.*)",
          component: NotFound
        }
      ]
    },

    // Admin Routes
    {
      name: "admin",
      path: "/admin",
      component: Admin,
      meta: { requiresAuth: true, requiresAdmin: true },
      children: [
        {
          path: "",
          component: AdminView
        },
        {
          path: "/acategory",
          component: AcategoryView
        },
        {
          path: "/abrand",
          component: AbrandView
        },
        {
          path: "/aproducts",
          component: AproductsView
        },
        {
          path:"/order",
          component: OrderView
        },
        {
          path: "/invoice",
          component: InvoiceView
        },
        {
          path: "/admin/:pathMatch(.*)",
          component: NotFound
        }
      ]
    }


  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = store.state.token || "";
    if (token) {
      let isValid = isTokenValid(token);
      let decodeData = isTokenDecode(token);
     
      if (isValid && decodeData.role === "admin") {        
        next();
      } else if (isValid && decodeData.role === "user") {
        next();
      } else {
        next("/login");
      }
    } else {
      next("/login");
    }
  } else {
    if (to.name === "login" && store.state.token) {
      next("/");
    } else if (to.name === "register" && store.state.token) {
      next("/");
    } else {
      next();
    }
  }
});

export default router
