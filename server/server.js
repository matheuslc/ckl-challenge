var express = require('express');
var bodyParser = require('body-parser');
var argv = require('yargs').argv;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var staticData = [
            {
                "id": 0,
                "title": "Obama Offers Hopeful Vision While Noting Nation’s Fears",
                "published_at": "1452821354",
                "text": "In his last State of the Union address, President Obama sought to paint a hopeful portrait. But he acknowledged that many Americans felt shut out of a political and economic system they view as rigged.",
                "category": "Politics",
                "images": {
                  "image": "news_01.jpg",
                  "retina": "news_01@2x.png"
                },
                "author": {
                    "name": "Creed Bratton",
                    "images": {
                        "image": "author.jpg",
                        "retina": "author@2x.jpg"
                    }
                }
            }, {
                "id": 1,
                "title": "Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps",
                "published_at": "1452821354",
                "text": "One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.",
                "category": "Tech",
                "images": {
                  "image": "news_02.jpg",
                  "retina": "news_02@2x.jpg"
                },
                "author": {
                    "name": "Creed Bratton",
                    "images": {
                        "image": "author.jpg",
                        "retina": "author@2x.jpg"
                    }
                }
            }, {
                "id": 2,
                "title": "NASA Formalizes Efforts To Protect Earth From Asteroidss",
                "published_at": "1452821354",
                "text": "Last week, NASA announced a new program called the Planetary Defense Coordination Office (PDCO) which will coordinate NASA’s efforts for detecting and tracking near-Earth objects (NEOs). If a large object comes hurtling toward our planet",
                "category": "Science",
                "images": {
                  "image": "news_03.jpg",
                  "retina": "news_03@2x.jpg"
                },
                "author": {
                    "name": "Alexandre Henrique Shailesh Zeta-Jones",
                    "images": {
                        "image": "author.jpg",
                        "retina": "author@2x.jpg"
                    }
                }
            }, {
                "id": 3,
                "title": "For Some Atlanta Hawks, a Revved-Up Game of Uno Is Diversion No. 1",
                "published_at": "1452821354",
                "text": "The favored in-flight pastime of a group of players including Al Horford, Kent Bazemore and Dennis Schroder is a schoolchildren’s card game with some added twists.",
                "category": "Sports",
                "images": {
                  "image": "",
                  "retina": ""
                },
                "author": {
                    "name": "Creed Bratton",
                    "images": {
                        "image": "author.jpg",
                        "retina": "author@2x.jpg"
                    }
                }
            }, {
                "id": 4,
                "title": "Picking a Windows 10 Security Package",
                "published_at": "1452821354",
                "text": "Oscar the Grouch has a recycling bin and Big Bird has moved to a tree as the children’s classic debuts on HBO, aiming at a generation that doesn’t distinguish between TV and mobile screens.",
                "category": "Tech",
                "images": {
                  "image": "",
                  "retina": ""
                },
                "author": {
                    "name": "Creed Bratton",
                    "images": {
                        "image": "author.jpg",
                        "retina": "author@2x.jpg"
                    }
                }
            }, {
                "id": 5,
                "title": "As U.S. Modernizes Nuclear Weapons, ‘Smaller’ Leaves Some Uneasy",
                "published_at": "1452821354",
                "text": "The Energy Department and the Pentagon have been readying a weapon with a build-it-smaller approach, setting off a philosophical clash in the world of nuclear arms.",
                "category": "Science",
                "images": {
                  "image": "",
                  "retina": ""
                },
                "author": {
                    "name": "Creed Bratton",
                    "images": {
                        "image": "author.jpg",
                        "retina": "author@2x.jpg"
                    }
                }
            }
        ];

app.get('/', function(req, res) {
  res.send('Listening..');
});

app.get('/news', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  setTimeout(function() {
    res.json(staticData);
  }, req.query.timeout);
});

app.get('/news/:category', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  setTimeout(function() {
    res.json(staticData.filter(function(news) {
      return news.category.toLowerCase() == req.params.category;
    }));
  }, req.query.timeout);
});

app.listen(argv.port, function() {
  console.log('Pull the anchor, we\'re leaving !');
});
