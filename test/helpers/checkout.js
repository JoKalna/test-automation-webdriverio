const pdp = require("./pdp");
module.exports = {
  shoppingChartSummary(pdpPrice) {
    this.orderSummaryTitle();
    this.productVerify(pdpPrice);
  },

  orderSummaryTitle() {
    const productTitle = $("#cart_summary > tbody > tr > td > p > a");
    productTitle.getText();
    console.log("whats inside checkout", productTitle.getText());
    return productTitle;
  },
  productVerify(pdpPrice) {
    expect(pdpPrice).to.equal();
  },
  //checkout price title
};
