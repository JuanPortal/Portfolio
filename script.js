// Directing the pictures to the projects

document.querySelector('.project-previews>div:nth-child(1)').addEventListener('click', ()=>{
    window.open('https://github.com/JuanPortal/Pokedex', '_blank');
})

document.querySelector('.project-previews>div:nth-child(2)').addEventListener('click', ()=>{
    window.open('https://github.com/JuanPortal/PKMarket', '_blank');
})

document.querySelector('.project-previews>div:nth-child(3)').addEventListener('click', ()=>{
    window.open('https://juanportal.github.io/LaGranjaBJJ/', '_blank');
})

document.querySelector('.project-previews>div:nth-child(4)').addEventListener('click', ()=>{
    window.open('https://juanportal.github.io/DiscordBots/', '_blank');
})



// Scroll 100vh

const sections = document.querySelectorAll('section');
let currentSectionIndex = 0;

window.addEventListener('wheel', e => {
  const scrollDirection = e.deltaY > 0 ? 'down' : 'up';

  if (scrollDirection === 'down') {
    currentSectionIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
  } else {
    currentSectionIndex = Math.max(currentSectionIndex - 1, 0);
  }

  // sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
  window.scroll({
    top: sections[currentSectionIndex].offsetTop,
    behavior: 'smooth'
  });
});



// Obtaining the bar process

const skills = document.querySelectorAll('.progress')
skills.forEach(skill => {
    skill.style.width = `${skill.getAttribute('data-progress')}%`
})
