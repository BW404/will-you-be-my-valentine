const button = document.getElementById("runaway-btn");
const req_text = ["Are You Sure?", "Really sure?", "Just think about it", "If you say NO, I will be very sad","I will be very very sad",  "I will be very very very sad", "Ok fine, I will Stop asking...","Just kidding, PLEASE SAY YES!", "You're breaking my heart &#128557;","Please reconsider","Think of the joy it'll bring","I promise it'll be worth it","Imagine the possibilities","Don't make me beg","I'll be eternally grateful","You'll make my day","Say yes and make me happy",""];
let i = 0;

const animateMove = (element, prop, pixels) =>
  anime({
    targets: element,
    [prop]: `${pixels}px`,
    easing: "easeOutCirc"
  });

["mouseover", "click"].forEach(function (el) {
  button.addEventListener(el, function (event) {
    const top = getRandomNumber((window.innerHeight+400) + (this.offsetHeight-500));
    const left = getRandomNumber(window.innerWidth - this.offsetWidth);
    
    animateMove(this, "left", left).play();
    animateMove(this, "top", top).play();
    document.getElementById("second_h1").innerHTML = req_text[i];
    i = (i + 1) % req_text.length;
  });
});

const getRandomNumber = (num) => {
  return Math.floor(Math.random() * (num + 1));
};
