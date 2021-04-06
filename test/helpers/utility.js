module.exports = {
  randomPosition(length) {
    return Math.floor(Math.random() * (length - 1));
  },
  //calulcate width port
  viewportWidth() {
    return browser.execute(() => this.window.innerWidth);
  },
  //add in scrollToTop

  //add ScrollUpViewPortHeight

  //ScrollDownViewPortHeight
};
