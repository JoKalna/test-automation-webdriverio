const utility = require("./utility");
module.exports = {
  verifyProductTitle() {
    //array of existing products to help to verify
    const productTitleName = JSON.stringify([
      "Sauce Labs Backpack",
      "Sauce Labs Bike Light",
      "Sauce Labs Bolt T-Shirt",
      "Sauce Labs Fleece Jacket",
      "Sauce Labs Onesie",
      "Test.allTheThings() T-Shirt (Red)",
    ]);
    /* 
    Assertions -  trying out expect, chai deep equal.
    Assert - trying out using chai assert.      
    */

    expect(productTitleName).to.eql(
      this.productTitles(),
      "There is a incorrect title in our data"
    );
    //we are asserting that prodTitle array matches the ProductsOnGrid elements.
    const prodTitle = this.productTitles();
    assert(
      prodTitle == productTitleName,
      `productTitleName did not contain the correct details. Expected details: '${JSON.stringify(
        prodTitle
      )}'. productTitle: '${prodTitle}'.`
    );
  },

  productTitles() {
    /* 
   Slice 6 to only get the title and map will include all 6 on the product grid
   Below Code returns:
   [
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
    browser.waitUntil(() => {
      /*we are waiting for a state here to be returned. 
      //in this case its lenght of 6 elements. 
      after we continue to the next which is returning the elements in the product grid
      */
      return $$("div.inventory_list > div").length == 6;
    });
    return $$("div.inventory_list > div");
  },
};
