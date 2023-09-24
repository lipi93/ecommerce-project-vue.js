<script >
import Card from '../components/Common/Card.vue';

export default{
    components:{
        "Card": Card
    },
    data(){

        return{
            products:[]
        }
    },
    created(){

         fetch('http://127.0.0.1:8000/api/get-product')
        .then(res => res.json())
        .then(json => {
            console.log(json);
            this.products = json;
        }); 

    }

    

}

</script>

<template>
     <div class="container">
      <div class="row">
         <Card :p="products"/>
      </div>
     </div>
   
</template>

