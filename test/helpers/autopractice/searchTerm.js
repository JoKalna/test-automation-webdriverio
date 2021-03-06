module.exports = {
  searchTermAndVerify(searchterm) {
    this.searchTerm(searchterm);
    this.clickSearch();
    this.verifySearchTerm();
  },
  searchTerm(term) {
    const searchTerm = $(
      '//form[@id="searchbox"]/input[@class="search_query form-control ac_input"]'
    );
    searchTerm.setValue([term]);
  },
  clickSearch() {
    const clickSearch = $('//form[@id="searchbox"]/button');
    clickSearch.click();
  },
  verifySearchTerm() {
    const searchTermMatch = $(
      '//div[@id="center_column"]/h1/span[@class="lighter"]'
    ).getText();
    expect(searchTermMatch).to.equal(`"DRESS"`);
  },
};
