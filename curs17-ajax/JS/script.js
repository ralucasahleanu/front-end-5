$(onLoad)

function onLoad () {
  $('#button').on('click', function() {
    getName(function(fullName) {
      console.log('numele este' + fullName)
    })
  })
  
  
  
  
  
  
  
  var getNameCallback = function(numeIntreg) {
     console.log('Numele este' + numeIntreg)
  }
  
  getName(getNameCallback);
   
 
  getName(function() {
    alert('aici este a doua implementare cu numele' + name)
  })
  
  getName(test)
}
  
   
  
 