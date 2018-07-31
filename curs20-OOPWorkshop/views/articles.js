//afisarea in HTML a datelor (view-urile de ocupa de partea de manipulare de DOM)
window.addEventListener("load", function() {
  var containerEl = document.getElementById("articles-list");
  
  var articlesModel = new Articles();
  //articlesModel.getAll() returns 100 articles from the API
  //the articles are set as imput to the success function in then
  //response will take that value
  articlesModel.getAll().then(function(response) {
    //call displayAllArticles function with the response from API
    displayAllArticles(response);
  });
  
  //exactly the same as:
      //articlesModel.getAll().then(displayAllArticles);
  
  function displayAllArticles(articlesData) {
    for (var i = 0; i < articlesData.length; i++) {
      var article = new Article(articlesData[i]);
      displayArticle(article);
    }
  }
  
  function displayArticle(article) {
    var liEl = document.createElement('li');
    
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = article.title;
    
    titleEl.addEventListener("click", function() {
      window.location = "http://cursuri-ralucasahleanu907493.codeanyapp.com/curs20-OOPWorkshop/templates/article.html?articleId=2" + article.id;
    });
    
    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = article.body;
    
    liEl.appendChild(titleEl);
    liEl.appendChild(bodyEl);
    
    containerEl.appendChild(liEl); 
  }
});