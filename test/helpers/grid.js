const utility = require("./utility");
module.exports = {
  verifyProductTitle() {
    const productTitleName = JSON.stringify([
      "Sauce Labs Backpack",
      "Sauce Labs Bike Light",
      "Sauce Labs Bolt T-Shirt",
      "Sauce Labs Fleece Jacket",
      "Sauce Labs Onesie",
      "Test.allTheThings() T-Shirt (Red)",
    ]);

    expect(productTitleName).to.eql(
      this.productTitles(),
      "There is a incorrect title in our data"
    );

    //this works but if it fails, it does not give a very good reason "where it failed"
    //just says array6 does not match array 6.
    // https://www.chaijs.com/plugins/chai-fuzzy/  - check out for jsonstringify
    // const productTitle = this.productTitles();
    // assert(
    //   productTitleName === true,
    //   productTitle === true,
    //   `productTitleName did not contain the correct details. Expected details: '${JSON.stringify(productTitleName)}'. productTitle: '${productTitle}'.`
    // );
  },

  productTitles() {
    //slice 6 to only get the title and map will include all 6 on the product grid
    //Below Code returns:
    /*[
'Sauce Labs Backpack',
'Sauce Labs Bike Light',
'Sauce Labs Bolt T-Shirt',
'Sauce Labs Fleece Jacket',
'Sauce Labs Onesie',
'Test.allTheThings() T-Shirt (Red)'
     ]  */
    return JSON.stringify(
      this.productsOnGrid()
        .slice(0, 6)
        .map((p) =>
          p
            .$(
              "div.inventory_list > div.inventory_item > div.inventory_item_label > a > div"
            )
            .getText()
            .replace(/(\n)/g, " ")
        )
    );
  },

  selectRandomProduct() {
    const products = this.productsOnGrid();
    const position = utility.randomPosition(products.length);
    const product = products[position];
    product.scrollIntoView(true);
    return {
      product,
    };
  },

  //elements:
  productsOnGrid() {
    return $$("div.inventory_list > div");
  },
};
