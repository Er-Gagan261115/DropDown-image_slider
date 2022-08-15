let arr = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrwPMZUM9TaCXbXwrycg7y6asz-ojUsT_qsg&usqp=CAU",
  "https://media.istockphoto.com/photos/young-stylish-businessman-having-takeaway-coffee-picture-id1080910832?b=1&k=20&m=1080910832&s=170667a&w=0&h=BXVSj2M5WL5H716ib6aADJohnylRFgBzanRecm_0bdI=",
];
let i = 0;
let arrobject = [];
arr.forEach((ele) => {
  let mymiddle = document.createElement("div");
  mymiddle.classList.add("middle");
  let middle_image_child = document.createElement("img");
  middle_image_child.src = `${ele}`;
  mymiddle.appendChild(middle_image_child);

  let middle_text_child = document.createElement("p");
  middle_text_child.classList.add("para");
  middle_text_child.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio veniam
recusandae suscipit sapiente, quis dignissimos quaerat! Voluptatibus
exercitationem eum vel.`;
  mymiddle.appendChild(middle_text_child);
  document.getElementById("carouselid").appendChild(mymiddle);
});
(i = 0), (flag = 0);
let ele = document.getElementsByClassName("middle");
for (let l = 0; l < ele.length; l++) {
  ele[l].style.left = `${l * 30}vw`;
  console.log(ele[l].style.left);
}
x = 0;
document.getElementById("myleft").onclick = () => {
//   if ((x >= 100 && x < 200) || x <= -100) {
//     for (let shift = 0; shift < 3; shift++) {
    //       ele[shift].style.transform = `translateX(${x + 100}%)`;
    //     }
    
    //     x += 100;
    //   }
    if(x>0||x<=-30){
    document.getElementById("carouselid").style.transform = `translateX(${x+30}vw)`;
    x+=30;
    }
};
document.getElementById("myright").onclick = () => {
//   if (-x < 200) {
//     for (let shift = 0; shift < 3; shift++) {
//       ele[shift].style.transform = `translateX(${x - 100}%)`;
//     }
//     x += -100;
//   }
//   if (-x > 200) {
    //     x = -200;
    //   }
    if(x>-60)
    {
          document.getElementById("carouselid").style.transform = `translateX(${x-30}vw)`;
          x-=30
    }
};
