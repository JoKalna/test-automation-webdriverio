module.exports = {
  sortAndVerify(sortOption) {
    this.sortDropDown().waitForExist();
    this.sortDropDown().selectByAttribute("value", sortOption);
  },

  sortDropDown() {
    return $("#inventory_filter_container > select");
  },
};
