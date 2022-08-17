const btn = document.querySelector('.btn');

fetch('imgs/close.svg')
  .then(response => {
    console.log(response);
    return response.blob();
  })
  .then(blob => {
    console.log(blob);
    document.getElementById('rainbow').src = URL.createObjectURL(blob);
  });
