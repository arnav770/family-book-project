var images = ["download (4).jpg","download.jpg","download (1).jpg","download (3).jpg","download (2).jpg"];


var names = ["family book","Father","Mother","sister","me"];


            var i = 0;
            function update()
            {
               
                
                if(i > 4 )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedname = names[i];
                document.getElementById("img1").src = updatedImage;
                document.getElementById("names").innerHTML = updatedname;
                i++;
            }