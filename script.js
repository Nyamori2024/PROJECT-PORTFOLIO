const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

//smooth scrolling for navigation links
const navlLinks=document.querySelectorAll('nav a');
navlLinks.forEach(link=>{
link.addEventListener('click', function(e) {
e.preventDefault();
//prevent default anchor default click behavior
const targetId=this.getAttribute('href').substring(1);
const targetElement=document.getElementById(targetId);

targetElement.scrollIntoView({
  behavior: 'smooth'  
})
})    
});
