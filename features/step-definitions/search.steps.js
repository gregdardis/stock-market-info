/* eslint-disable no-undef */

const invalidStockSymbol = 'ASDF';
const homeElements = page.home.elements;

module.exports = function() {
  this.When(/^my cursor is in the searchbar$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return search.click();
    });
  });
  this.Then(/^I type text that is an invalid stock symbol$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return search.sendKeys(invalidStockSymbol);
    });
  });
  this.Then(/^I click the search icon$/, () => {
    return driver.findElement(homeElements.searchButton).then(button => {
      return button.click();
    });
  });
  this.Then(
    /^I should see an error message that the stock was not found$/,
    () => {
      return driver.wait(until.elementLocated(homeElements.searchStatus))
        .then(status => {
          return driver.wait(until.elementTextIs(
            status,
            `No stock with symbol "${invalidStockSymbol}" was found.`
          ));
        });
    });
  // TODO: add steps for valid stock search
  // TODO: add steps for search with ENTER
  this.When(/^focus is on the searchbar$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return search.click();
    });
  });
  this.Then(/^I press Escape$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return search.sendKeys(selenium.Key.ESCAPE);
    });
  });
  this.Then(/^the searchbar should be cleared of all text$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return driver.wait(until.elementTextIs(search, ''));
    });
  });
};