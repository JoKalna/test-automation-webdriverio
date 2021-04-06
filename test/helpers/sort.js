module.exports = {
  sortAndVerify(sortOption) {
    //add in verify that the first product of title is different to the one before it loaded.
    this.sortDropDown().waitForExist();
    this.sortDropDown().selectByAttribute("value", sortOption);
  },

  sortDropDown() {
    return $("#inventory_filter_container > select");
  },
};
