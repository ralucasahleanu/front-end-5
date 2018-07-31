//DOM LOADED
$(onHtmlLoaded);
 
function onHtmlLoaded() {
  console.log("On HTML Loaded");
  
 //By id - jquery element
  console.log("Comment list", $('#comments-list'));
  
  //By id - native dom element
   console.log("Comment list", $('#comments-list')[0]);
  
  //by class
  console.log("Item", $('.comment-item'));
  
  //by tag
  console.log("Header", $('h1'));
  
  //by query selector
  console.log("Authos", $('section.comment-item strong'));
  
  var h1 = $('h1');
  h1.text('JQuery DOM Manipulation New');
  h1.text('JQuery DOM Manipulation <em>New</em>');
  
  //Set Attributes
  var h2 = $('h2');
  h2.attr('title', 'Comments List'); //set attr
  console.log("H2 Title", h2.attr('title')); // get attr
  
  var commentsContainer = $('#comments-list');
  commentsContainer.css('border', 'solid 1px green');
  commentsContainer.css({
    color: 'blue',
    background: 'grey'
  });
  console.log("Comments list border", commentsContainer.css('border'));
  
  
  //Add border to each comment
  $('.comment-item').css('border', 'solid 5px pink');

  //add new comment
  var comment = '<section>' +
                    '<h3>New Comment</h3>' +
                    '<p>Content <strong>A B</strong></p>' +
                 '</section>';
  
  commentsContainer.append(comment);
  
}


