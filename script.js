// test page: https://pixabay.com/photos/girl-daydreaming-horse-daydream-3551832/
// unicorn img address: https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/662678
const unicorn = [
  'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/662678',
  'https://media.giphy.com/media/3oEduFsHnm570eb3G0/giphy.gif',
  'https://www.uni-lovers.com/wp-content/uploads/2020/05/unicorn-hi-animation-monchomasse.gif',
  'https://media1.giphy.com/media/oxUjaIvWofZHdpQsOi/giphy.gif',
  'https://media.tenor.com/images/6f8b59539a18e9628c8b043744e3c93c/tenor.gif',
  'https://cdn.shopify.com/s/files/1/1782/5295/articles/pinterest-2_850x.gif?v=1532493513',
  'https://cdn.shopify.com/s/files/1/0295/1977/3833/files/unicorn-gif-90_8.gif?v=1581556879',
  'https://media3.giphy.com/media/2A75RyXVzzSI2bx4Gj/giphy.gif',
  'https://i.pinimg.com/originals/f6/3a/8e/f63a8e03299153d533af74353ecf23c8.gif',
  'https://media.giphy.com/media/xTiTnLmaxrlBHxsMMg/giphy.gif',
  'https://cdn130.picsart.com/285081082054201.gif?to=min&r=1024'
]

let images = document.getElementsByTagName('img'); 
// var srcList = [];
// for(var i = 0; i < images.length; i++) {
//     srcList.push(images[i].src);
// }
// set src method()
// console.log(images)

//loop over srcList(array of obj/images)
for (let i=0; i<images.length; i++) {
     //check if obj/image has attribute alt math "horse"
    // console.log(images[i] , images[i].alt)
    let imgAlt = images[i].alt.toLowerCase();
    
    if (imgAlt.includes('horse')|| imgAlt.includes('pony')) {
     document.body.style.backgroundImage = 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)'
     //if match replace obj/image src to our src unicorn
     //  images[i].setAttribute("src", 'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/662678' )
     let unicornIndex = Math.floor(Math.random()*10)
     images[i].src = unicorn[unicornIndex];
     images[i].srcset = unicorn[unicornIndex];
    }
    
}



   
    
// document.getElementsByTagName('image')

// alert('hi')