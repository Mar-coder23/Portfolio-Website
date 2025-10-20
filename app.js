let hamburger = document.getElementById('hamburger');
let menu = document.getElementById('menu');
let hiddenText = document.querySelector('.helloText2Hidden');

// function for when hamburger is clicked to open and close menu
function hamburgerClick(){
    if (menu.classList.contains('open')) {
        menu.classList.remove('open'); // Close the menu
    } else {
        menu.classList.add('open'); // Open the menu
    }
};

// function to have hamburger stay on X when menu is opened and vise versa
function hamburgerIcon(){
    hamburger.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin)
    // gsap code here!
    
    
  
   });



// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.list-items');
    const introTab = document.querySelector('.intro-list');
    const container = document.getElementById('scroll-container');
  
    // Check if all the elements are selected correctly
    if (!introTab || !container || items.length === 0) {
      console.error('Error: Could not find the required elements.');
      return;
    }
  
    items.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent link's default behavior
  
        console.log(`Tab clicked: ${item.textContent}`);
  
        // Remove intro styling if clicking something else
        if (item !== introTab) {
          introTab.classList.remove('intro-list');
        }
  
        // Remove underline from all items and add to clicked item
        items.forEach(el => el.classList.remove('active-tab'));
        item.classList.add('active-tab');

      });
    });
  });
// for scrolling behavior when list item is clicked
const listItems = document.querySelectorAll('.list-items');
const scrollContainer = document.getElementById('scroll-container');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetClass = item.getAttribute('data-target');
    const targetElement = scrollContainer.querySelector(`.${targetClass}`);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
  