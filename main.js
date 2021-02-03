document.querySelector('.btn').onclick = function() {
  points('Тест',8000);
}

function points (message, timeremove = 3000) {

  let points = document.createElement('div');
  points.classList.add('points');
  points.innerHTML = message;

  addPoints(points);
  setTimeout(function () {
    deletePoints(points)
  }, timeremove)
}

function deletePoints (points) {
  points.remove();

  let allPoints = document.querySelectorAll('.points-inner .points');

  if (allPoints.length == 0) document.querySelector('.points-inner').remove();
}

function addPoints (points) {

  let pointsInner = document.querySelector('.points-inner');

  if(pointsInner) {
    pointsInner.appendChild(points);
  }
  else{
    let pointsInner = document.createElement('div');
    pointsInner.classList.add('points-inner');
    document.querySelector('body').appendChild(pointsInner);
    pointsInner.appendChild(points);
  }
}
