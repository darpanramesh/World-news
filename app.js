window.addEventListener('load', async e => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('serviceWorker.js')
            .then(async(registration) => {
                const permission = await window.Notification.requestPermission();
                if(permission !== `granted`){
                    throw new Error(`permission not granted for Notificaion`);
                }
                const title = `simple title`;
                const options = {
                    body: `Simple piece of body text. /n second line of body text :)`
                };
                registration.showNotification(title, options);
                console.log('service worker register')
            })
    }
})



fetch(`https://newsapi.org/v1/articles?source=techcrunch&apikey=34c651abf5264d7a9f7220454b00cc2c`)
    .then(response => response.json())
    .then(json => console.log(json));

fetch(`https://newsapi.org/v1/articles?source=bbc-news&apikey=34c651abf5264d7a9f7220454b00cc2c`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        document.getElementById("a").href = json.articles[0].href;
        document.getElementById("desc").innerHTML = json.articles[0].description;
        document.getElementById("pub").innerHTML = json.articles[0].publishedAt;

        document.getElementById("a2").href = json.articles[1].href;
        document.getElementById("desc2").innerHTML = json.articles[1].description;
        document.getElementById("pub2").innerHTML = json.articles[1].publishedAt;

        document.getElementById("anews").href = json.articles[2].url;
        document.getElementById("descnews").innerHTML = json.articles[2].description;
        document.getElementById("pubnews").innerHTML = json.articles[2].publishedAt;
        document.getElementById("imgnews").src = json.articles[2].urlToImage;
        document.getElementById("titlenews").innerHTML = json.articles[2].title;


    })

    fetch(`https://newsapi.org/v1/articles?source=bbc-sport&apikey=34c651abf5264d7a9f7220454b00cc2c`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      document.getElementById("aspot").href = json.articles[7].url;
      document.getElementById("descspot").innerHTML = json.articles[7].description;
      document.getElementById("pubspot").innerHTML = json.articles[7].publishedAt;
      document.getElementById("imgspot").src = json.articles[7].urlToImage;
      document.getElementById("titlespot").innerHTML = json.articles[7].title;
      document.getElementById("authorspot").innerHTML = json.articles[7].author;

      document.getElementById("aspot2").href = json.articles[5].url;
      document.getElementById("descspot2").innerHTML = json.articles[5].description;
      document.getElementById("pubspot2").innerHTML = json.articles[5].publishedAt;
      document.getElementById("imgspot2").src = json.articles[5].urlToImage;
      document.getElementById("titlespot2").innerHTML = json.articles[5].title;

    })

fetch(`https://newsapi.org/v1/articles?source=national-geographic&apikey=34c651abf5264d7a9f7220454b00cc2c`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        document.getElementById("a4").href = json.articles[5].href;
        document.getElementById("desc4").innerHTML = json.articles[5].description;
        document.getElementById("pub4").innerHTML = json.articles[5].publishedAt;

        document.getElementById("anews2").href = json.articles[1].url;
        document.getElementById("descnews2").innerHTML = json.articles[1].description;
        document.getElementById("pubnews2").innerHTML = json.articles[1].publishedAt;
        document.getElementById("imgnews2").src = json.articles[1].urlToImage;
        document.getElementById("titlenews2").innerHTML = json.articles[1].title;
    })

fetch(`https://newsapi.org/v1/articles?source=google-news&apikey=34c651abf5264d7a9f7220454b00cc2c`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        document.getElementById("a3").href = json.articles[5].href;
        document.getElementById("desc3").innerHTML = json.articles[5].description;
        document.getElementById("pub3").innerHTML = json.articles[5].publishedAt;
    })

fetch(`https://newsapi.org/v1/sources`)
    .then(response => response.json())
    .then(json => console.log(json));

