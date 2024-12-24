var navLink = gsap.utils.toArray(".nav-link"),
    imgWrap = document.querySelector(".img-wrapper"),
    imgItem = document.querySelector(".img-placeholder img");

    function moverImg(e){
        var mouseX = e.clientX,
            mouseY = e.clientY
        t1 = gsap.timeline();

        t1.to(imgWrap, {
            duration: 1,
            x: mouseX,
            y: mouseY,
            ease: Expo.ease
        });
    }

    function linkHover(e){
        if(e.type === "mouseenter"){
            var imgSrc = e.target.dataset.src;
            var t1 = gsap.timeline();

            t1.set(imgItem, {
                attr: { src : imgSrc}
            }).to(imgWrap, {
                autoAlpha: 1,
                scale: 1
            });
        }
        
    }

    function initAnimation(){
        navLink.forEach(link => {
            link.addEventListener("mouseenter", linkHover);
            link.addEventListener('mousemove', moverImg);
        });
    }

    function init(){
        initAnimation();
    }
    window.addEventListener('load', function(){
        init();
    });