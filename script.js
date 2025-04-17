document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('h3');
    const content = item.querySelector('.faq-content');
    const toggleIcon = item.querySelector('.toggle');

    question.addEventListener('click', () => {
      const isActive = item.classList.toggle('active');

      
      content.style.display = isActive ? "block" : "none";

      
      toggleIcon.textContent = isActive ? "-" : "+";
    });
  });
});

  
 
  let backToTop = document.getElementById("backToTop");
  
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };
  
  backToTop.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  document.querySelectorAll('.like').forEach(button => {
    button.addEventListener('click', () => {
     
      const reactions = button.parentElement.querySelectorAll('button');
      reactions.forEach(b => b.classList.remove('liked', 'loved', 'disliked'));
  
      
      button.classList.add('liked');
    });
  });
  
  document.querySelectorAll('.love').forEach(button => {
    button.addEventListener('click', () => {
      
      const reactions = button.parentElement.querySelectorAll('button');
      reactions.forEach(b => b.classList.remove('liked', 'loved', 'disliked'));
  
      
      button.classList.add('loved');
    });
  });
  
  document.querySelectorAll('.dislike').forEach(button => {
    button.addEventListener('click', () => {
      
      const reactions = button.parentElement.querySelectorAll('button');
      reactions.forEach(b => b.classList.remove('liked', 'loved', 'disliked'));
  
     
      button.classList.add('disliked');
    });
  });

 
 function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.menu-toggle');
  toggleBtn.addEventListener('click', toggleMenu);
});


  


  