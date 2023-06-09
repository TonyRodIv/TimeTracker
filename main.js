const writeCards = document.getElementById('writeCard')


fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    for(let i = 0; i < data.length ;i++){
        console.log(i)
        writeCards.innerHTML += `
        <figure class="card work">
            <div class="img-section ${data[i].title}">
              <img src="${data[i].img}" alt="" srcset="">
            </div>
            <figure class="card-desc">
              <div class="card-header">
                <div class="card-title">${data[i].title}</div>
                <div class="card-menu">
    
                </div>
              </div>
              <div class="card-time">${data[i].timeframes.weekly.current}hrs</div>
              <p class="recent">Last Week-${data[i].timeframes.weekly.previous}hrs</p>
            </figure>
          </figure>
        `
    }



  })