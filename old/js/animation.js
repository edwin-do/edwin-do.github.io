var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 6) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = true;
};

TxtType.prototype.tick = function() {

    if (this.loopNum < 5){
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        //stops animation once loopnum is 4
        if (!this.isDeleting && this.txt === fullTxt && this.loopNum == 4) {
            this.isDeleting = false;
            delta = 500;
        }else if(!this.isDeleting && this.txt === fullTxt){
            delta = this.period;
            this.isDeleting = true;
        }
        else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        console.log(this.loopNum);
        delta = 500;
        }

        setTimeout(function() {
            that.tick();
            }, delta);
    }
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0 solid #000}";
    document.body.appendChild(css);
};
