<template>
   <div class="container py-5 shadow-lg my-5">
    <div class="row ">
        <div class="col-md-7">
            <div class="product_thumbnail">
                <img id="preview" style="height: 450px;" class="img-fluid" :src="'http://127.0.0.1:8000/storage/images/' + product.image"  alt="">
            </div>
           
        </div>
        <div class="col-md-5">
            <div class="product_content">
                <h3>Name: {{ product.title }}</h3>
                <p>Description: {{ product.short_des }}</p>
                <h6>Brand: {{product.brand.name}}</h6>
                <h6>Stock: {{product.stock}}</h6>
                <h6>Price: {{product.price}}</h6>
                <h6>Remark: {{product.remark}}</h6>
                <button @click="addToCart(product)" class="btn btn-primary mt-3">Add to Cart</button>
            </div>
        </div>
    </div>
   </div>
</template>

<script>

    export default{
        
        data(){
            return {
                product: {},
                cart: []
            }
        },

        methods:{
            getData(){
                fetch("http://127.0.0.1:8000/api/id-get-product/"+this.$route.params.id)
                .then( res => res.json())
                .then( data => this.product = data)     
            
            },
            changeImage(event){
                document.getElementById("preview").src = event.target.src               
            },
            addToCart(product){                            
                this.$store.dispatch('addToCart', product);
            }
        },
        created(){
            this.getData()
        }

     
    }
</script>