
// caught the click me btn using queryselector.

// let btn = document.querySelectorAll('.imgbtn');

// let btnarray = Array.from(btn);
// console.log(btnarray);


// btnarray.map(function(item){
//     item.addEventListener('click',function(event){
       
//         body.innerHTML += `
//         <div class="imgbody">
        
//             <img src="${event.target.dataset.url}"  alt="venoboximg1">
//             <button class="close"> x </button>
        
//         </div>`;
//     })
// })


let body = document.querySelector('body');
let imgbox = document.querySelector('.imgbox');

body.addEventListener('click', function(event){

    // console.log(event.target.classList[0]);

    if(event.target.classList[0] == 'imgbtn') {
        imgbox.classList.add('imgbox2');
        imgbox.innerHTML = `<img src='${event.target.dataset.url}'>
        <button class="close"> x </button>
        `
        
    }

    else{
        imgbox.classList.remove('imgbox2');
        imgbox.innerHTML = '';
    }








            // body.innerHTML += `
        // <div class="imgbody">
        
        //     <img src="${event.target.dataset.url}"  alt="venoboximg1">
        //     <button class="close"> x </button>
        
        // </div>`;
})


















// btn.addEventListener('click',function(event){

    // console.log(event.target.dataset.url);














    // body.innerHTML += `
    // <div class="imgbody">
    //     <img src="${event.target.dataset.url}"  alt="venoboximg1">
    //  </div>`;
// });


// array iteration in map ES6 version

// let arr = ['alauddin mondal','taufik','moni','thamina','sajib','mithila'];

// arr.map(function(item){
//     console.log(item);
// });