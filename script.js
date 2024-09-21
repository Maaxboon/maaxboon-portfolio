// Optional: You can add interactivity here if needed.
// Example: Stop/Start the 3D animation on hover

const 
cube = document.querySelector('.cube');
cube.addEventListener('mouseover', ()=>
{
    cube.style.animationPlayState = 'paused';
});
cube.addEventListener('mouseout', () =>
{
    cube.style.animationPlayState = 'running';
});
