
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

   const firstItemHeight = firstItem.offsetTop-40;

   const thirdItemHeight = thirdItem.offsetTop - 40;

   const pgServicesHeight = pgServices.offsetTop-40;

   const fourthItemHeight = fourthItem.offsetTop-40;

   const sixthItemHeight = sixthItem.offsetTop-40;

   
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
// selesct all of the scroll-links
const scrollLinks =  document.querySelectorAll('.scroll-link');
// loop through each of the scroll-link
scrollLinks.forEach(link => { 
   // and add a click event to each of them
   link.addEventListener('click', e => {
      e.preventDefault();// prevent the existing events
      const navCenter = document.querySelector('.nav-center');
      const navHeight = navCenter.getBoundingClientRect().height;
      
      const id = e.currentTarget.getAttribute('href').slice(1);//get attribute of each of them and remove the # tag with splice
      const element = document.getElementById(id);//get corresponding id of the element that is clicked
     position = element.offsetTop - 40 -40;
     
      window.scrollTo({
         left:0,top:position
      })
      linksContainer.style.height = 0;
      });
   })


