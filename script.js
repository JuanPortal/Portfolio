// Directing the pictures to the projects

document.querySelector('.project-previews>div:nth-child(1)').addEventListener('click', ()=>{
    window.open('https://github.com/JuanPortal/Pokedex', '_blank');
})

document.querySelector('.project-previews>div:nth-child(2)').addEventListener('click', ()=>{
    window.open('https://pkmarket.netlify.app', '_blank');
})

document.querySelector('.project-previews>div:nth-child(3)').addEventListener('click', ()=>{
    window.open('https://juanportal.github.io/LaGranjaBJJ/', '_blank');
})

document.querySelector('.project-previews>div:nth-child(4)').addEventListener('click', ()=>{
    window.open('https://juanportal.github.io/DiscordBots/', '_blank');
})



// Obtaining the bar process

const skills = document.querySelectorAll('.progress')
skills.forEach(skill => {
    skill.style.width = `${skill.getAttribute('data-progress')}%`
})
