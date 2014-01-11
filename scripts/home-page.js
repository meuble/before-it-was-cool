require(['/strings/main.lang'], function(mainStrings) {
  var t = SP.bind(mainStrings.get, mainStrings);

  var elements = []

  var newElement = function(tagName) {
    var element = document.createElement(tagName)
    elements.push(element);
    return element;
  }

  var addElementsTo = function(containerId) {
    var container = document.getElementById(containerId);
    for(var i = 0; i < elements.length; ++i) {
      container.appendChild(elements[i]);
    }
  }

  var createElements = function(markup) {
    for(var prop in markup) {
      var element = newElement(prop);
      element.innerHTML = t(markup[prop]);
    }
  }

  var displayHomePage = function() {
    createElements({
      "h1": 'home-page.title',
      "h2": 'home-page.subtitle',
      "p": 'home-page.text'
    })

    addElementsTo('homePageContainer');
  };

  exports.displayHomePage = displayHomePage;
});
