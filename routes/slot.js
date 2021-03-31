block content
  h1= title
  - var images_names=['flower1.PNG','flower2.PNG','flower3.PNG','flower4.PNG','flower5.PNG']
  - for(let i=0;i<3;i++)
   - let j=Math.floor(Math.random()*5)
   img(src=`images\\${images_names[j]}`,alt=`images is ${images_names[j]}`,height="300px",width="300px")