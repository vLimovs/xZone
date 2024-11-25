class Text {
    constructor(obj) {
        this.text = document.querySelector(obj.text);
        this.fullText = this.text.innerHTML
        this.text.innerHTML = ''
        this.str()
    }
    str(x = 0) {
        this.text.innerHTML += this.fullText[x]
        x++
        if (x < this.fullText.length) {
            setTimeout(() => {
                this.str(x)
            }, 100);
        }
    }
}

const text = new Text({
    text: '.topic'
})

// class Scroll {
//     constructor(obj) {
//         this.section = document.querySelector(obj.section);

//         window.addEventListener('scroll', () => {
//             this.fadeRightAnim(this.section, 0.5)
//         })
//     }
//     fadeRightAnim(section, coordinate) {

//         const fadeRights = section.querySelectorAll('.fade-right');
//         fadeRights.forEach(box => {
//             const speed = box.dataset.speed; 
//             box.style.transition = speed + 'ms';
        
//             const threshold = section.offsetTop - section.offsetHeight * coordinate;
        
//             console.log('window.scrollY:', window.scrollY);
//             console.log('threshold:', threshold);
        
//             // Условие
//             if (window.scrollY >= threshold) {
//                 box.classList.add('active');
//             } else {
//                 box.classList.remove('active');
//             }
//         });
//     }
// }
class Scroll {
    constructor(obj) {
        this.section = document.querySelector(obj.section);

        window.addEventListener('scroll', () => {
            this.fadeRightAnim(this.section, 0.9)
            this.fadeLeftAnim(this.section, 0.4)
        })
    }
    fadeRightAnim(section, coordinate) {
        const fadeRights = section.querySelectorAll('.fade-right');
        fadeRights.forEach(box => {
            const speed = box.dataset.speed; 
            box.style.transition = speed + 'ms';
        
            const threshold = section.offsetTop - section.offsetHeight * coordinate;
        
            console.log('window.scrollY:', window.scrollY);
            console.log('threshold:', threshold);
        
            if (window.scrollY >= threshold) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });
    }
    fadeLeftAnim(section, coordinate) {
        const fadeLefts = section.querySelectorAll('.fade-left');
        fadeLefts.forEach(box => {
            const speed = box.dataset.speed; 
            box.style.transition = speed + 'ms';
        
            const threshold = section.offsetTop - section.offsetHeight * coordinate;
        
            console.log('window.scrollY:', window.scrollY);
            console.log('threshold:', threshold);
        
            if (window.scrollY >= threshold) {
                box.classList.add('active');
            } else {
                box.classList.remove('active');
            }
        });
    }
}

const section = new Scroll({
    section: '.service__cards'
})