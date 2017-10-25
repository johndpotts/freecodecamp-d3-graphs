var url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"             
    d3.json(url, function(jsonData) {
    var data = jsonData.data;
     
      
  
     
    
var bars = d3.select(".GDP").selectAll("div");
    bars =bars.data(data).enter().append("div");
      
       
      
      d3.select(".GDP").selectAll("div").style("width", "1.5px").style("background-color","lightgreen").style("height", function(d) { return (d[1]/50) + "px"; });
   // .text(function(d) { return d[0]; });

                
                  
       
    });
             