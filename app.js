const navToggle = document.querySelector('.nav-toggle');

const navCenter = document.querySelector('.nav-center');

const linksContainer = document.querySelector('.links-container');

const links = document.querySelector('.links');

const logoContainer = document.querySelector('.logo-container');

const firstItem = document.querySelector('.item1');

const thirdItem = document.querySelector('.item3');

const pgServices = document.querySelector('.pg-services');

const fourthItem = document.querySelector('.item4'); 

const sixthItem = document.querySelector('.item6');

navToggle.addEventListener('click',function(e){

   const linksHeight = links.getBoundingClientRect().height; 
  
   const linksContainerHeight = linksContainer.getBoundingClientRect().height;

   if (linksContainerHeight === 0){
    
        linksContainer.style.height = `${linksHeight}px`;
        navCenter.classList.add('bg-color-item6');
   }
   else {
      linksContainer.style.height = 0; 
   }
})

window.addEventListener('scroll',function(){
  const scrollHeight = window.pageYOffset;
//get height of logoContainer to subtract from each items offSetTop
   const logoContainerHeight = logoContainer.getBoundingClientRect().height;
//get height of each of the item from the top of the window and subtract each from logoContainer

   const firstItemHeight = firstItem.offsetTop-logoContainerHeight;

   const thirdItemHeight = thirdItem.offsetTop - logoContainerHeight;

   const pgServicesHeight = pgServices.offsetTop-logoContainerHeight;

   const fourthItemHeight = fourthItem.offsetTop-logoContainerHeight;

   const sixthItemHeight = sixthItem.offsetTop-logoContainerHeight;

   
//add class to specific areas of the window

   if (scrollHeight > firstItemHeight && scrollHeight < thirdItemHeight ) 
   {
    navCenter.classList.add('bg-color-yellow');
   }
   else {
      navCenter.classList.remove('bg-color-yellow');
   }
   if (scrollHeight > thirdItemHeight && scrollHeight < pgServicesHeight) {
   navCenter.classList.add('bg-color-gd');
    }
   else {
   navCenter.classList.remove('bg-color-gd');
  }
   if (scrollHeight > pgServicesHeight) {
   navCenter.classList.add('bg-color-pg');
    }
   else {
   navCenter.classList.remove('bg-color-pg');
  }
   if(scrollHeight > fourthItemHeight && sixthItemHeight) {
   navCenter.classList.add('bg-color-item4');
   }
   else {
   navCenter.classList.remove('bg-color-item4');
     }
   if(scrollHeight > sixthItemHeight ) {
      navCenter.classList.add('bg-color-item6');
      }
   else {
    navCenter.classList.remove('bg-color-item6');
   }
})
