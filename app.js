const navToggle = document.querySelector('.nav-toggle');
const navCenter = document.querySelector('.nav-center');
const linksContainer = document.querySelector('.links-container');

const links = document.querySelector('.links');
console.log(linksContainer.getBoundingClientRect().height);
console.log(links.getBoundingClientRect().height)


window.addEventListener('scroll',function(){
   const scrollHeight = window.pageYOffset;
   console.log(scrollHeight);
   const firstItem = document.querySelector('.item1');
   const firstItemHeight = firstItem.offsetTop;
   console.log(firstItemHeight);
   if (scrollHeight === firstItemHeight )
   {   console.log('i love you');
    navCenter.classList.add('bg-color-yellow');
   }
})