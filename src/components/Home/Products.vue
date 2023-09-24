
<script>
import Card from '../Common/Card.vue';
import { useToast } from "vue-toastification";
import axios from "axios";
import { mapMutations } from "vuex";
export default{
    components:{
        "Card": Card
    },
    data(){
        return{
            products: []
        }
    },

    created(){
        
       this.getData();
    },
    methods : {
        ...mapMutations(["SET_LOADING_STATUS"]),
        async getData(){

            this.SET_LOADING_STATUS(true)
            let res = await axios.get("http://127.0.0.1:8000/api/get-product")
            this.SET_LOADING_STATUS(false)

            if(res.status === 200){
                this.products = res.data
            }
        }
    }
}

</script>



<template>
    <div class="container">
        <h1>Products</h1>
        <div class="row">
            <Card :p="products"/>
        </div>
    </div>
</template>