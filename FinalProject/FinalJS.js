//Creates a function to make an ajax call to the Wikipedia API
$(function() {
      $("#searchButton").on("click", function() {
          var searchTerm = $("#searchPrompt").val();
          //sets the url to a variable
          var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"; 
         //Makes the ajax call and gets it as json data
          $.ajax({
              url: url,
              type: 'GET',
              dataType: "json",
              success: function(data, status, jqXHR) {
                //uses .html to convert into html for viewing   
                $("#output").html();
                //Formats the data being called
                  for(var i=0;i<data[1].length;i++){
                      //placed into tags within the html
                      $("#output").prepend("<div><div><a href="+data[3][i]+"><h2>" + 
                      data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                  }
  
              }
          })
      });
  });
