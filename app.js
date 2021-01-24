let timeline = gsap.timeline();
timeline.fromTo('.logo', {
    x: '-1em',
    opacity: 0
}, {
    x: '0em',
    opacity: 1,
    delay: 0.5, 
    duration: 1.5, 
})
.fromTo('.menu', {
    x: '1em',
    opacity: 0
}, {
    x: '0em',
    opacity: 1,
    duration: 1.5, 
},
'>-1.5'
)
.fromTo('.info-section h1', {
    x: 0,
    y: 100,
    opacity: 0
}, {
    x: 0,
    y: 0, 
    opacity: 1,
    delay: 0.5, 
    duration: 1.5, 
})
.addLabel('h1Show')
.fromTo('.girl', {
    height: 0,
    opacity: 0
}, {
    height: '600px',
    opacity: 1,
    duration: 2,
    ease: 'power3.in'
},
'>-2'
)
.fromTo('.boy', {
    height: 0,
    opacity: 0
}, {
    height: '600px',
    opacity: 1,
    duration: 2,
    ease: 'power3.inOut'
},
)
.fromTo('.shape1', {
    scale: 0,
    opacity: 0
}, {
    scale: 1,
    duration: 1,
    opacity: 1,
    ease: 'power3.inOut'
},
">-1"
)
.fromTo('.shape3', {
    opacity: 0
}, {
    opacity: 1.6,
    ease: 'power2.inOut',
    duration: 1.5
},
)
.fromTo('.shape3', {
    y: 300,
}, {
    y: 280,
    repeat: -1,
    duration: 1,
    yoyo: true,
    ease: 'sine.inOut',
},
">-1"
)
.fromTo('.shape2', {
    opacity: 0
}, {
    opacity: 0.2,
    duration: 0.5,
    ease: 'sine.inOut',
},
)
.fromTo('.shape2', {
    y: -300,
    // opacity: 0
}, {
    y: -320,
    // opacity: 0.2,
    repeat: -1,
    duration: 1,
    yoyo: true,
    ease: 'sine.inOut',
},
)
.fromTo('.info-section h4', {
    x: -300,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
},
"h1Show"
)
.fromTo('.call-actions', {
    x: -300,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
},
"h1Show+=.1"
)
.fromTo('html, body', {
    scale: 0.9,
},
{
    scale:1
})