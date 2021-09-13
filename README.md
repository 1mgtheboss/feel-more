# feel-more
AI is touching all facets of our life now. The team's aim was to develop an ai powered emoji art generator. Interesting resources were explored. You can test the app at [feel-more.glitch.me](https://feel-more.glitch.me/). After the app loads, you will see a text area where you can enter how you are feeling at the moment. When you click submit a nice ascii art will be presented to you based on the dominant emotion of the provided input. It supports 6 emotions at the moment. They are, sadness, anger, boredom, excitement, fear, & happiness.

Glitch.com was chosen for hosting the app. The app's emotion analysis module uses a very special api. Express js was chosen as the web framework.  It is a well-documented web framework. It is highly unlikely for a development team to face a technical issue while building on it. It is extremely popular among developers. A lot of time was spent on choosing the name of the app. In the end, the name, feel more was chosen. A no. of css art galleries were visited. The css-doodle library drew our attention. We tested the css doodle library but due to display issues, it was kept out of the development stack. 

Later, we started searching for css and js ascii art libraries for the app. A no. of libraries drew our attention such as, aalib js from mir3z, lettercrap from nate-parrott, asciimo from marak, ascii art from khrome, & imgtoascii from victorqribeiro. We were impressed by the aesthetics of the lettercrap library and decided to use it in feel more app. It is capable of generating dynamic ascii art based on a provided black and white image. 

The app's emotion analysis module plays an important role. It uses paralleldots's emotion analysis api. Paralleldot is a product of komprehend.io. Komprehend has other text analysis apis such as, sentiment analysis, semantic analysis, abusive analysis, intent analysis, sarcasm detection, text classification, named entity recognition, keyword extractor (other), & keyword extractor (english) api. We tested the emotion analysis api and were satisfied with the results. The npm package was added to the glitch project. We considered using the clientside js version but were not able to find the documentation within the time allotted. We set the api key. We then added a get route ```/emotion-analysis``` in ```server.js```. The route receives a request from the ```index.html``` with a query parameter, ```input1631426385657``` and sends it to the api through a call to the emotion method. The response received is sent to the ```index.html```.  
```
app.get("/emotion-analysis", (request, response) => {


    pd.emotion(request.query.input1631426385657, "en")
        .then((response1) => {

            response.send(response1);
        })
        .catch((error) => {
            response.send(error);
        })


});
```

There, the response's emotion object is looped through for the emotion with the maximum probability. When the emotion is found, all art divs except the one for the dominant emotion are hidden. The art div for the dominant emotion is made visible by setting its ```opacity``` to ```1.0```. The art divs have ```div-art``` class. The class has ```width``` and ```height``` set to ```50vw```, ```opacity``` set to ```0.0```, & ```margin``` set to ```auto```. The data is sent to the ```/emotion-analysis``` endpoint through an ```xhr``` request. When the art is presented to the user, the user input area is hidden. The user can enjoy the art.
