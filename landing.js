const menuBtn = document.querySelector('#menu-btn')
const navMenu = document.querySelector(".nav-menu")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3= document.querySelector(".bar3")
const imagesTab = document.querySelector('.images_tab')
const imageTab = document.querySelectorAll('.image__tab')
const btnTabs = document.querySelector('.btn-tabs')
const btnTab =  document.querySelectorAll(".btn_tab")
const contentTab = document.querySelectorAll('.content-tab')
const wrapProduct = document.querySelector('.wrap_product')
const fixedNavBar = document.querySelector('.nav')
const submitBtn = document.querySelector('#submit')
const errors = document.querySelectorAll('.error')
const navLink = document.querySelectorAll('.nav_link')
const orderBtn = document.querySelector('.order_btn')
const order = document.querySelector('#order')



//the properties of products 
const product1 = {
    productName: "cheese burger",
    productImage: "./images/delicious-burger.png",
    productPrice: `$10.00`
}
const product2 = {
    productName: "chicken shawama",
    productImage: "./images/chicken shawama.jpg",
    productPrice: `$17.50`
}
const product3 = {
    productName: "fries",
    productImage: "./images/fries.jpg",
    productPrice: `$10`
}
const product4 = {
    productName: "chicken pie",
    productImage: "./images/chiocken pie.jpg",
    productPrice: `$19.20`
}
const product5 = {
    productName: "filled donuts",
    productImage: "./images/filled dognut.jpg",
    productPrice: `$11.10`
}
const product6 = {
    productName: "glazed donuts",
    productImage: "./images/glazzed donuts.jpeg",
    productPrice: `$8.00`
}
const product7 = {
    productName: "waffle and syrup",
    productImage: "./images/waffle and syrup.jpg",
    productPrice: `$12.50`
}
const product8 = {
    productName: "sandwich",
    productImage: "./images/chiocken pie.jpg",
    productPrice: `$15.30`
}

//arrays of products 
const products = [product1, product2, product3, product4, product5, product6, product7, product8]


//display when toggle
menuBtn.addEventListener('click',function(){
    navMenu.classList.toggle('hidden')
    navMenu.classList.toggle('flex')
    bar1.classList.toggle('rotate-45')
    bar1.classList.toggle("translate-y-2")
    bar2.classList.toggle('opacity-0')
    bar3.classList.toggle('-rotate-45')
    bar3.classList.toggle("-translate-y-2")
})

//remove when clicked
navLink.forEach(link => {
    link.addEventListener('click',function(){
        navMenu.classList.add('hidden')
    navMenu.classList.remove('flex')
    bar1.classList.remove('rotate-45')
    bar1.classList.remove("translate-y-2")
    bar2.classList.remove('opacity-0')
    bar3.classList.remove('-rotate-45')
    bar3.classList.remove("-translate-y-2")
    })
})

//images tab
imagesTab.addEventListener('click',function(e){
    e.preventDefault();
    const clicked = e.target.closest('.image__tab')
    //dont take action if it not the image__tab
    if(!clicked) return;
    //for each image__tab this action should occur
    imageTab.forEach(imgTab => {imgTab.classList.remove('-translate-y-[10%]')})
    clicked.classList.add('-translate-y-[10%]')
    
})

//content tab
btnTabs.addEventListener('click',function(e){
    e.preventDefault();
    const clicked = e.target.closest('.btn_tab');
    if(!clicked) return;
    btnTab.forEach(bt => {bt.classList.remove('-translate-y-[100%]')})
    contentTab.forEach(ct => {ct.classList.add('hidden')})
    clicked.classList.add('-translate-y-[100%]')
    document.querySelector(`.content-${clicked.dataset.btn}`).classList.remove('hidden')
    document.querySelector(`.content-${clicked.dataset.btn}`).classList.add('flex')
    
})


//function of products 
const craveProduct = function(cravePdt){
    wrapProduct.innerHTML = ""
    cravePdt.forEach(function(pdt){
        const name = pdt.productName;
        const image = pdt.productImage;
        const price = pdt.productPrice;

        const html = `
        <div class="bg-transparent border-2 border-red-700 rounded-xl p-[20px] w-[250px] h-[200px] laptop:w-[300px] tablet:w-[300px]">
          <div class="flex justify-center items-center">
          <img src="${image}" class="w-[100px] h-[100px] ">
          </div>
          
          <p class="text-white capitalize">${name}</p>
          <div class="flex justify-between">
            <div>
          <span class="fa fa-star text-red-700"></span>
          <span class="fa fa-star text-red-700"></span>
          <span class="fa fa-star text-red-700"></span>
          <span class="fa fa-star text-red-700"></span>
          <span class="fa fa-star text-red-700"></span>
          
          
          </div>
          <span class="text-white">${price}</span>
          </div>
        </div>
        </div>
        `
        wrapProduct.insertAdjacentHTML('beforeend',html)
    })
}

craveProduct(products)

//scroll to order
orderBtn.addEventListener('click',function(e){
    order.scrollIntoView({behavior: "smooth"})
})

//links scrolling to id
navMenu.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.classList.contains('nav_link')){
        const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({behavior:"smooth"})
    }
})

//adding fixed to the nav bar

const header = document.querySelector('.head')
const navHeight = fixedNavBar.getBoundingClientRect().height
const observeScrolling = function(entries){
    const [entry] = entries
    if(!entry.isIntersecting){
        
        fixedNavBar.classList.add('fixed')
        
    } 
    else fixedNavBar.classList.remove('fixed')

}
const fixedNav = new IntersectionObserver(observeScrolling,{
    root:null,
    threshold:0,
    rootMargin: `-${navHeight}px`
   

});
fixedNav.observe(header)

//poping up of element

const scrollFun = function(entries, observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.remove('opacity-0')
        entry.target.classList.remove('translate-y-[2rem]')

        observer.unobserve(entry.target)
    })
}

const scrollingDiv = document.querySelectorAll('.scrolling_div')
const scrollObserver = new IntersectionObserver(scrollFun, {
    root:null,
    threshold:0.15
})
scrollingDiv.forEach(function(div){
    
    scrollObserver.observe(div)
    div.classList.add('opacity-0')
    div.classList.add('translate-y-[2rem]')
})



//form
submitBtn.addEventListener('click',function(e){
    e.preventDefault()
    const senderName = document.querySelector('#name').value
    const senderEmail = document.querySelector('#email').value
    const senderphoneNUmber = document.querySelector("#phone").value
    const senderLocation = document.querySelector("#location").value
    if(senderName === "" || senderEmail === "" || senderphoneNUmber ==="" || senderLocation === ""){
        errors.forEach(error => error.classList.remove('hidden'))
    }
    else{
        alert("Thanks for patronizing Us 🤝🤝")
    }

})





