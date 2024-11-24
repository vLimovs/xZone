class Text {
    constructor(obj){
        this.text = document.querySelector(obj.text);
        this.fullText = this.text.innerHTML
        this.text.innerHTML = ''
        this.str()
    }
    str(x = 0){
        this.text.innerHTML += this.fullText[x]
        x++
        if(x < this.fullText.length){   
            setTimeout(() => {
                this.str(x)
            }, 100);
        }
    }
}

const text = new Text({
    text: '.topic'
})