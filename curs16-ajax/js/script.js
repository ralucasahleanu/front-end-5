$(domLoaded)

function domLoaded(){
  console.log("Dom loaded")
  
   var loadPosts = function() {
     $.ajax({
       url: "https://jsonplaceholder.typicode.com/posts",
       success: function(data) {
         console.log("Posts = ", data);
       }
     });
   }
   
   var loadPost = function(id) {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/" + id,
      success: function(data){
        console.log("Post = ", data);
      }
    })
  }
   
   // REQUEST TO CREATE A POST //
   var createPost = function() {
     $.ajax({
       url: "https://jsonplaceholder.typicode.com/posts",
       method: "POST",
       data: {
         title: "Post by Robert",
         body: "Something useless",
         userId: 1
       },
       success: function(data) {
         console.log("Create post", data);
         console.log("Create post with id", data.id);
       }
     })
   }
   
   // Request to Update a Post //
   var editPost = function(id) {
     $.ajax({
       url: "https://jsonplaceholder.typicode.com/posts/" + id,
       method: "PUT",
       data: {
         title: "Edit post",
         body: "Edit post body",
         userId: 1
       },
       success: function(data) {
         console.log("Edit post", data);
         console.log("Edit post id", data.id)
     }
     })
   }
   
   //REQUEST TO DELETE A POST
   var deletePost = function() {
     $ajax({
       url: "https://jsonplaceholder.typicode.com/posts/" + id,
       method: "DELETE",
       success: function() {
         console.log("POST WAS DELETED")
       }
     });
   }
   
   
   
   
   
   
   
  loadPosts();
  loadPost(3);
  loadPost(30);
  loadPost(21);
  createPost();
  editPost(23);
  editPost(13);
  
  deletePost(4);
}