
const app= Vue.createApp({
      data(){
       return{
              cart:0,
              cartbag:[],
              title:' Sneaker Company',
              productName:'Fall Limited Edition Sneakers',
             
              price:'$125.00',
              selectedVariant:0,
              description:'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
              variant: [{id:0,image:'images/image-product-1.jpg',quantity:'0'},
                     {id:2, image:'images/image-product-2.jpg',quantity:'0'},
                     {id:3, image:'images/image-product-3.jpg',quantity:'0'},
                     {id:4, image:'images/image-product-4.jpg',quantity:'0'}
                 ],
               displayCart:false,
            
       }
      },
      computed:{
       totalQuantity(){
              return Object.values(this.cart).reduce((acc,curr)=>{
                      return acc + curr
               },0)
              },

        
        image(){
              return this.variant[this.selectedVariant].image
             }
      },
      methods:{
       updateVariant(index){
          this.selectedVariant = index
       },
       addToCart(){
              this.cart ++
         },
         removeFromCart(){
            if(this.cart > 0){
              this.cart--
            }  
         },
         showModal(){
              this.modalImg = true
         },
         addToBag(product){
              this.cartbag.push(product)
              console.log(this.cartbag)
         }
      }
})
app.mount('#app')
