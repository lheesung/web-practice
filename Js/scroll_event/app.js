let observer = new IntersectionObserver((a) =>{
    a.forEach((box)=>{
        if(box.isIntersecting){
            box.target.style.opacity = 1;
        }
    })
});
let div = document.querySelectorAll('div');
observer.observe(div[0]);
observer.observe(div[1]);
observer.observe(div[2]);
observer.observe(div[3]);