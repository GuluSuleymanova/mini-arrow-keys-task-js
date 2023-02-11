//1ci div yaradiriq
const div_full = document.createElement('div');
div_full.id="div-full";
document.body.append(div_full);

const div = document.createElement('div');
div.id="btn-group";
div_full.appendChild(div);


//2ci buttonlar yaradiriq
const upButton = document.createElement("button");
upButton.id='up';
upButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';
div.appendChild(upButton);


const leftButton = document.createElement("button");
leftButton.id='left';
leftButton.innerHTML='<i class="fa-solid fa-arrow-left"></i>';
div.appendChild(leftButton);


const downButton = document.createElement("button");
downButton.id='down';
downButton.innerHTML='<i class="fa-solid fa-arrow-down"></i>';
div.appendChild(downButton);


const rightButton = document.createElement("button");
rightButton.id='right';
rightButton.innerHTML='<i class="fa-solid fa-arrow-right"></i>';
div.appendChild(rightButton);


//3cu text divi yaradiriq
const text_div=document.createElement('div');
text_div.className='text';
  div_full.appendChild(text_div);


 const box=document.createElement('div');
  box.className='box';
    document.body.appendChild(box);



//4cu buttonlara click eventi veririk
upButton.addEventListener("click", () => {
text_div.innerHTML="Up";
let top = box.offsetTop - 10;
    if (top >= 280) {
        box.style.top = top + "px";
    };
   
});
console.log(top);

downButton.addEventListener("click", () => {
  text_div.innerHTML='down';
  let bottom = box.offsetTop + 10;
    if (bottom + box.offsetHeight <= window.innerHeight) {
        box.style.top = bottom + "px";
    };

});


leftButton.addEventListener("click", () => {
  text_div.innerHTML='left';
  let left = box.offsetLeft - 10;
    if (left >= 0) {
        box.style.left = left + "px";
    };

});


rightButton.addEventListener("click", () => {
  text_div.innerHTML='right';
  let right = box.offsetLeft + 10;
    if (right + box.offsetWidth <= window.innerWidth) {
        box.style.left = right + "px";
    };

});


//5ci buttonlara keydown eventi veririk
  document.addEventListener("keydown", (event) => {
    console.log(event);
    switch (event.key) {

        case "ArrowUp":
            text_div.innerHTML="Up";
            upButton.classList.add('pressed');
            let top = box.offsetTop - 10;
            if (top >= 280) {
              box.style.top = top + "px";
            };
            
          break;

        case "ArrowDown":
           text_div.innerHTML='Down';
           downButton.classList.add('pressed');
           let bottom = box.offsetTop + 10;
              if (bottom + box.offsetHeight <= window.innerHeight) {
               box.style.top = bottom + "px";
             };
          break;

        case "ArrowLeft":
           leftButton.classList.add('pressed');
        let left = box.offsetLeft - 10;
        if (left >= 0) {
          box.style.left = left + "px";
        };

          break;

        case "ArrowRight":
           text_div.innerHTML='Right';
           rightButton.classList.add('pressed');
          let right = box.offsetLeft + 10;
        if (right + box.offsetWidth <= window.innerWidth) {
          box.style.left = right + "px";
        };

          break;
      }
});


  
document.addEventListener("keyup", (event) => {
  
    switch (event.key) {

        case "ArrowUp":
            text_div.innerHTML="Up";
            upButton.classList.remove('pressed');
            
          break;
         
        case "ArrowDown":
           text_div.innerHTML='Down';
           downButton.classList.remove('pressed');

          break;

        case "ArrowLeft":
           text_div.innerHTML='Left';
           leftButton.classList.remove('pressed');

          break;

        case "ArrowRight":
           text_div.innerHTML='Right';
           rightButton.classList.remove('pressed');

          break;
      }
});

console.log(window.innerWidth);
console.log(window.innerHeight);
