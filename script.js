// var cem=0
// for (let a=0; a<100;a++) {
//     cem=cem+a;  
// }
// console.log(cem);






// var cem=0
// for (let i=0;  i<140; i++) {
//     if(i%2==1) {
//         cem=cem+i

//     }
// }
// console.log(cem)






// var cem=0
// for (let i = 0; i <180; i++) {
//     if(i%2==0){
//         cem=cem+i
//     }
// }
// console.log(cem)



// var cem=0
// for (let i = 0; i <150; i++) {
//     if(i%3==0 && i%7==0)    
//     cem=cem+i
// }
// console.log(cem)




// var cem=0
// let array=[21,45,66,78,98,99,43,44]
// for (let i = 0; i<array.length; i++) {
//      if(array[i]%2==0){
//          cem=cem+array[i]
//     }   
// }
// console.log(cem);



// var cem=0
// let array=[21,45,66,78,98,99,43,44]
// for (let i = 0; i < array.length;i++) {
//     cem=cem+array[i]    
// }
// console.log(cem/array.length)



// var soz="Azerbaycan"
// var say=0
// for (let i = 0; i < soz.length; i++) {   
//     if (soz[i]=="A"||soz[i]=="a") {
//         say++
//     } 
// }
// console.log(say);




//  function multiply() {
//     var n1 = document.getElementById('number1').value;
//     var n2 = document.getElementById('number2').value;

//     var product = n1 * n2; 

//     document.getElementById('result').value =product
// }




// document.querySelector('#team').addEventListener('keyup',function(){
//     document.querySelector('div').style.backgroundColor=document.querySelector('#team').value

// })

// document.querySelector('#team1').addEventListener('keyup',function(){
//     document.querySelector('div').style.width=document.querySelector('#team1').value +"px"

// })

// document.querySelector('#team2').addEventListener('keyup',function(){
//     document.querySelector('div').style.height=document.querySelector('#team2').value +"px"

// })

// document.querySelector('#team3').addEventListener('keyup',function(){
//     document.querySelector('div').style.borderRadius=document.querySelector('#team3').value +"%"

// })




// var a = 0

// document.querySelector('#team1').addEventListener('click', function () {

//     if (document.querySelector("input").value == "") {
//         alert("adi daxil edin")
//     }
//     else {
//         a++
//         document.querySelector('div').innerHTML += ` <p> ${document.querySelector("#team").value} </p>  `

//         document.querySelector('#team').value = ""
//     }

// })




//     let numbers = [1, 2, 3, 4, 5, 7, 9, 10,18,25,32,36,47];

// function number (){

//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 3 == 0 || numbers[i] % 5 == 0){
//             document.querySelector('div').innerHTML += numbers[i] + ' ';
//         }
//     }  
// }
// number();




// document.querySelectorAll('.item').forEach(r => {

//     r.addEventListener("click",function () {

//         document.querySelectorAll('.item').forEach(y => {
//             y.style.backgroundColor="wheat"

//         });

//          r.style.backgroundColor="green"
//     })   
// });






// document.querySelectorAll('.container img').forEach(sekil => {

//     sekil.addEventListener("click",function () {
//         document.querySelector('.team').innerHTML = `<img src=${sekil.src}>`
//         document.querySelector('.team').style.display = "block"
//         // document.querySelector('.team img').src=sekil.src


//     })

// });
// document.querySelector('.team i').addEventListener('click',function () {
//     document.querySelector('.team').style.display = "none"

// })








// document.querySelector('button').addEventListener('click',function () {

//     document.querySelector('input').type="text"
// })






// var array=[  
//     {
//     sekil:"https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg",
//     baslig:"Threads",
//     aciqlama:"Illustration"
//     },

//    {
//          sekil:"https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg",
//         baslig:"Explore",
//         aciqlama:"Graphic Design"
//     },

//     {
//         sekil:"https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg",
//         baslig:"Finish",
//         aciqlama:"Identity"
//     }

// ]
//     for (let i = 0; i < array.length; i++) {
//     document.querySelector(".item").innerHTML += `<div class="team">
//     <img src="${array[i].sekil}">
//     <h1>"${array[i].baslig}"</h1>
//     <p>"${array[i].aciqlama}"</p>

//     </div>`      
// }




// document.querySelector('.add').addEventListener('click',function () {
//     document.querySelector('.modal').style.display='block'
// })
// document.querySelector('.creat').addEventListener('click',function () {
//     if (document.querySelectorAll('.inputs input')[0].value== "") {
//         alert('ad bos qala bilmez')
//     } 
//     else{
//         document.querySelector('tbody').innerHTML+= `
//         <tr>
//         <td>${document.querySelectorAll('tbody tr').length + 1}</td>
//         <td>${document.querySelectorAll('.inputs input')[0].value}</td>
//         <td>${document.querySelectorAll('.inputs input')[1].value}</td>
//         <td>${document.querySelectorAll('.inputs input')[2].value}</td>   
//     </tr>`
//         document.querySelector('.modal').style.display= 'none'
//         document.querySelectorAll('.inputs input').forEach(element => {
//             element.value=""
//         });
//     }
//     document.querySelector('.modal i').addEventListener('click',function () {
//         document.querySelector('.modal').style.display='none'

//     })       
// });








// document.querySelectorAll('.team img').forEach(r => {
//     r.addEventListener('click',function () {
//         document.querySelector('.team1 img').src= r.src  
//     })

// })





// var sira = 0;

// var array = [
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cristiano_Ronaldo_WC2022_-_01_%28cropped%29.jpg/188px-Cristiano_Ronaldo_WC2022_-_01_%28cropped%29.jpg",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB6PsZ8jUH0pjBJukAHPffmLuSXcJLTbs4ag&usqp=CAU",
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6skOn4OVO--_lbkca1Du5YIg66GHvojOYA&usqp=CAU"
// ]
// for (let i = 0; i < array.length; i++) {
//     document.querySelector('.team2').innerHTML += `<img src="${array[i]}" onclick="bir(${i})">
//                 `
// }

// function bir(i) {
//     document.querySelector('.team1 img').src = array[i]
//     sira = i
// }

// document.querySelector('.button2').addEventListener('click', function () {
//     if (sira == 2) {
//         sira = 0
//     }
//     else {
//         sira++
//     }
//     document.querySelector('.team1 img').src = array[sira]
// })

// document.querySelector('.button1').addEventListener('click', function () {
//     if (sira == 0) {
//         sira = 2
//     }
//     else {
//         sira--
//     }
//     document.querySelector('.team1 img').src = array[sira]
// })







// var x=0;
// var y=0;

// //1
//  document.querySelector('.sag').addEventListener('click',function () {
//     document.querySelector('.container').style.borderLeftColor ='black'
//     if (x==950) {
//         document.querySelector('.container').style.borderRightColor ="red"
//     }
//     else{
//         x+=50
//         document.querySelector('.circle').style.marginLeft = x + "px"
//     }
// })
// //2
// document.querySelector('.sol').addEventListener('click',function () {
//     document.querySelector('.container').style.borderRightColor ='black'
//     if (x==-950) {
//         document.querySelector('.container').style.borderLeftColor ="red"
//     }
//     else{
//         x-=50
//         document.querySelector('.circle').style.marginLeft = x + "px"
//     }
// })
// //3
// document.querySelector('.yuxari').addEventListener('click',function () {
//     document.querySelector('.container').style.borderBottomColor ='black'
//     if (y==-400) {
//         document.querySelector('.container').style.borderTopColor ="red"
//     }
//     else{
//         y-=50
//         document.querySelector('.circle').style.marginTop = y + "px"
//     }
// })
// //4
// document.querySelector('.asagi').addEventListener('click',function () {
//     document.querySelector('.container').style.borderTopColor ='black'

//     if (y==400) {
//         document.querySelector('.container').style.borderBottomColor ="red"
        
//     }
//     else{
//         y+=50
//         document.querySelector('.circle').style.marginTop = y + "px"
//     }
// })
// //5
// document.querySelector('.sagyuxari').addEventListener('click',function () {
//     document.querySelector('.container').style.borderLeftColor ='black'
//     if (x==950) {
//         document.querySelector('.container').style.borderRightColor ="red"
//     }
//     else{
//         x+=50
//         document.querySelector('.circle').style.marginLeft = x + "px"
//     }
//     document.querySelector('.container').style.borderBottomColor ='black'
//     if (y==-400) {
//         document.querySelector('.container').style.borderTopColor ="red"
//     }
//     else{
//         y-=50
//         document.querySelector('.circle').style.marginTop = y + "px"
//     }
// })
// //6
// document.querySelector('.solyuxari').addEventListener('click',function () {
//     document.querySelector('.container').style.borderTopColor ='black'
//     if (y==-400) {
//         document.querySelector('.container').style.borderTopColor ="red"
        
//     }
//     else{
//         y-=50
//         document.querySelector('.circle').style.marginTop = y + "px"
//     }
//     if (x==400) {
        
//     }
//     else{
//         x+=50
//         document.querySelector('.circle').style.marginRight = x + "px"
//     }
   
// })
// //7
// document.querySelector('.sagasagi').addEventListener('click',function () {

//     document.querySelector('.container').style.borderLeftColor ='black'
//     if (x==950) {
//         document.querySelector('.container').style.borderRightColor ="red"
//     }
//     else{
//         x+=50
//         document.querySelector('.circle').style.marginLeft = x + "px"
//     }
//     document.querySelector('.container').style.borderTopColor ='black'

//     if (y==400) {
//         document.querySelector('.container').style.borderBottomColor ="red"
        
//     }
//     else{
//         y+=50
//         document.querySelector('.circle').style.marginTop = y + "px"
//     }
    
// })
// //8
// document.querySelector('.solasagi').addEventListener('click',function () {
//     document.querySelector('.container').style.borderBottomColor ='black'
//     if (y==400) {
//         document.querySelector('.container').style.borderBottomColor ="red"
        
//     }
//     else{
//         y+=50
//         document.querySelector('.circle').style.marginTop = y + "px"
//     }
//     if (x==400) {
        
        
//     }
//     else{
//         x+=50
//         document.querySelector('.circle').style.marginRight = x + "px"
//     }
// })
// //9
// document.querySelector('.merkez').addEventListener('click',function () {
//     x = 0;
//     y = 0;
//     document.querySelector('.circle').style.margin = x + "px"  
//     document.querySelector('.circle').style.margin = y + "px"  
// })








// var array=[  
//    {
//          sekil:"https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg",
//         baslig:"Explore",
//         aciqlama:"Graphic Design",
//         metn:"Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!"
//     }
// ]

//     for (let i = 0; i < array.length; i++) {
//     document.querySelector(".container").innerHTML += `<div class="item" onclick=bir(${i})>
//     <img src="${array[i].sekil}">
//     <h1>"${array[i].baslig}"</h1>
//     <p>"${array[i].aciqlama}"</p>

//     </div>`      
// }
    // function bir(i) {
    //     document.querySelector('.team').style.display = "block"
    //     document.querySelector('.team').innerHTML = `
    //     <img src="${array[i].sekil}" alt="">
    //     <h1>${array[i].baslig}</h1>
    //     <p>${array[i].aciqlama}</p>
    //     <p>${array[i].metn}</p>
    //     <i class="fa-solid fa-xmark" onclick="close1()"></i>`

//     }
//     function close1 () {
//         document.querySelector('.team').style.display = 'none'
//     }



// var masinlar =[
//     {
//         sekil1:"https://turbo.azstatic.com/uploads/full/2023%2F12%2F06%2F11%2F31%2F21%2F9ad0d9d3-0140-4434-8996-fa897d50ee84%2F3624_qKTgrG3_NwS-rNnEkkEdJg.jpg",
//         sekil2:"https://turbo.azstatic.com/uploads/full/2024%2F01%2F29%2F12%2F02%2F35%2F31fbc96a-4559-4fe8-a794-076c21aef5a3%2F3774_uxeqciFFBTY4egkmKtj_5A.jpg",
//         sekil3:"https://turbo.azstatic.com/uploads/full/2024%2F01%2F29%2F12%2F01%2F39%2F1f8f0c63-add8-4139-ada1-71642952e3dd%2F3690_lmhRtzbeyravWOT6mmfT7g.jpg",
//         sekil4:"https://turbo.azstatic.com/uploads/full/2024%2F01%2F29%2F12%2F01%2F58%2F47959b7f-9d64-4046-b39f-ef609722ddef%2F3677_pf0cC-NKm0qbnOOZo_m1qw.jpg"
//     },

//     {
//         sekil1:"https://turbo.azstatic.com/uploads/full/2023%2F11%2F24%2F00%2F44%2F08%2Fae509926-46a1-4c8f-b8d0-772e7ac0c334%2F3660_aHGGc2nIp7kAryBEr47bUw.jpg",
//         sekil2:"https://turbo.azstatic.com/uploads/full/2024%2F01%2F26%2F12%2F17%2F07%2F055536ae-380b-48aa-8438-51310394628f%2F3795_NVFVLcRuIvzKep3Q4toCeg.jpg",
//         sekil3:"https://turbo.azstatic.com/uploads/full/2024%2F01%2F26%2F12%2F17%2F06%2Fb53fb19a-f844-42eb-8e61-fad15be80af3%2F3789_1S78CiRUQ7hIR4Yj86CUuQ.jpg",
//         sekil4:"https://turbo.azstatic.com/uploads/full/2024%2F01%2F26%2F12%2F17%2F05%2Fac73ffe1-047a-4025-b39e-56fb5ce79072%2F3814_Dl9YsnXqw-tYPTwx7zhNgg.jpg"
//     },

//     {
//         sekil1:"https://turbo.azstatic.com/uploads/full/2023%2F11%2F24%2F00%2F44%2F07%2Fc7b9f9e8-d468-460f-9844-410c91ec2878%2F3622_xaHJpXlApKKVzUQD0jHWww.jpg",
//         sekil2:"https://turbo.azstatic.com/uploads/full/2023%2F03%2F19%2F13%2F38%2F59%2F47230307-0a95-4680-bb4f-f8d52b329841%2F46200_ZqrxyHJnX1DLj04lsmARpw.jpg",
//         sekil3:"https://turbo.azstatic.com/uploads/full/2023%2F03%2F19%2F13%2F37%2F55%2F0392f6c0-e423-42ab-b8c9-bd5de3291580%2F13453_Mb_EVDmMtVaq0TjjBvCWAA.jpg",
//         sekil4:"https://turbo.azstatic.com/uploads/full/2023%2F03%2F19%2F13%2F37%2F55%2F3513de1d-1bc0-43ae-95ce-5b086eafd9ed%2F13447_5q8ujB1GAb3UZuv8fINRpQ.jpg"
//     }

// ]
// for (let i = 0; i < masinlar.length; i++) {
//     document.querySelector(".container").innerHTML += `
//     <div class="container1" onclick=bir(${i})>
//     <img src="${masinlar[i].sekil1}">
//     </div>
//     `      
// }
// function bir(i) {
//     document.querySelector('.team').style.display = "block"
//     document.querySelector('.team').innerHTML = `
//     <div class="team1">
//     <div class="team2">
//         <img src="${masinlar[i].sekil1}" alt="">
//     </div>
//         <div class="team3">
//             <img src="${masinlar[i].sekil2}" alt="">
//             <img src="${masinlar[i].sekil3}" alt="">
//             <img src="${masinlar[i].sekil4}" alt="">
//         </div>
//     </div>
//     <button onclick="close1()">x</button>
//      `
//      document.querySelectorAll('.team3 img').forEach(x=>{
//       x.addEventListener('click',function () {
//           document.querySelector('.team2 img').src = x.src
//       })
//      })
// }

//    function close1() {
//     document.querySelector('.team').style.display = 'none'
//    }







// document.querySelector('div i').addEventListener('click',function () {
//    if (document.querySelector('div i').style.color == 'black') {
//     document.querySelector('div i').style.color ='red'
//    } 
//    else{
//     document.querySelector('div i').style.color ='black'
//    }

// })






// document.querySelector('button').addEventListener('click',function () {
//     document.querySelector('ul').classList.toggle('active')
// })







// var san = 0;
// var deq = 0;
// var sat = 0;
// function vaxt() {
//     san +=1
//     document.querySelector('.saniye p').innerText = san
//     if (san == 59) {
//         deq += 1
//         san = 0
//         document.querySelector('.deqiqe p').innerText = deq

//         if(deq==59){
//             sat +=1
//             deq = 0
//             document.querySelector('.saat p').innerText = sat
//             if (sat == 23) {
//                 sat= 0
//                 deq= 0
//                 san= 0
//                 document.querySelector('.saat p').innerText = sat
//                 document.querySelector('.deqiqe p').innerText = deq
//                 document.querySelector('.saniye p').innerText = san
//             }
//         }
        
//     }
// }
// setInterval(vaxt,10)

// document.querySelector('button').addEventListener('click',function () {
//    if (document.querySelector('input').value==2) {
//    document.querySelector('.container').style.backgroundColor = "red"
//    }
//    else{
//     document.querySelector('.container').style.backgroundColor = "white"
//    } 
// })





// window.addEventListener('scroll',function () {
//     console.log(window.scrollY);
//     if (window.scrollY >=100) {
//         document.querySelector('.container').style.backgroundColor = "orange"
//     }
//     else{
//         document.querySelector('.container').style.backgroundColor = "green"
//     }
    
// })


var array =[
    {
        sekil1:"https://add-to-cart-javascript.vercel.app/img/men-1.jpg",
        baslig1:"Oxford shirts"
    },

    {
        sekil2:"https://add-to-cart-javascript.vercel.app/img/men-2.jpg",
        baslig2:"Short-Sleeve Shirt"
    },

    {
        sekil3:"https://add-to-cart-javascript.vercel.app/img/women-1.jpg",
        baslig3:"Tunic"
    },

    {
        sekil4:"https://add-to-cart-javascript.vercel.app/img/women-2.jpg",
        baslig4:"Culotte dress"
    },

    {
        sekil5:"https://add-to-cart-javascript.vercel.app/img/watch-2.jpg",
        baslig5:"Free Boltt Dazzle"
    },

    {
        sekil6:"https://add-to-cart-javascript.vercel.app/img/watch-1.jpg",
        baslig6:"Huawei watch buds"
    }

]

    for (let i = 0; i < array.length; i++) {
         document.querySelector('.men').addEventListener('click',function () {
            document.querySelector('.container').innerHTML = ` <div class="container1">
            <img src="${array[i].sekil1}">
            <p>${array[i].baslig1}</p>
          </div>

          <div class="container1">
          <img src="${array[i].sekil2}">
          <p>${array[i].baslig2}</p>
        </div>`
         })
    }
























