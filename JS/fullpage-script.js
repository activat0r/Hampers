const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

resizeEvent()

var resizeId;
window.addEventListener('resize', function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(resizeEvent, 500);
});



function resizeEvent(){
    if(vw > 400){
        new fullpage("#fullPage",{
            autoScrolling : true,
            navigationTooltips: ['HOME', 'SHOP'],
            showActiveTooltip: true,
            navigation: true,
            navigationPosition: 'right',
            dropEffect: true,
            dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
            sectionsColor : ['#fff3f3', '#eef9f5'],
        
        })}
    
}


