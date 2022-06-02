const myBtn = document.querySelector('button');
const myPlace = document.getElementById('myPlace');    
const myImg = document.createElement('img');  myPlace.appendChild(myImg); 
myImg.className="img-thumbnail"; 

const getCatImg = () => {
  fetch('https://api.thecatapi.com/v1/images/search')
  .then(response => response.json())
  .then(data => {
      console.log(data);
      console.log(getCatImg);        
    myImg.src = data[0].url;
  });   
}
myBtn.addEventListener('click', getCatImg)