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
                "image": '/img/news_01.jpg',
                "author": {
                    "name": "Creed Bratton",
                    "image": "creed-bratton.jpg",
                }
            }, {
                "id": 1,
                "title": "Didi Kuaidi, The Company Beating Uber In China, Opens Its API To Third Party Apps",
                "published_at": "1452821354",
                "text": "One day after Uber updated its API to add ‘content experiences’ for passengers, the U.S. company’s biggest rival — Didi Kuaidi in China — has opened its own platform up by releasing an SDK for developers and third-parties.",
                "category": "Tech",
                "image": '/img/news_02.jpg',
                "author": {
                    "name": "Creed Bratton",
                    "image": "creed-bratton.jpg",
                }
            }, {
                "id": 2,
                "title": "NASA Formalizes Efforts To Protect Earth From Asteroidss",
                "published_at": "1452821354",
                "text": "Last week, NASA announced a new program called the Planetary Defense Coordination Office (PDCO) which will coordinate NASA’s efforts for detecting and tracking near-Earth objects (NEOs). If a large object comes hurtling toward our planet",
                "category": "Science",
                "image": '/img/news_03.jpg',
                "author": {
                    "name": "Alexandre Henrique Shailesh Zeta-Jones",
                    "image": "creed-bratton.jpg",
                }
            }, {
                "id": 3,
                "title": "For Some Atlanta Hawks, a Revved-Up Game of Uno Is Diversion No. 1",
                "published_at": "1452821354",
                "text": "The favored in-flight pastime of a group of players including Al Horford, Kent Bazemore and Dennis Schroder is a schoolchildren’s card game with some added twists.",
                "category": "Sports",
                "image": '/img/news_04.jpg',
                "author": {
                    "name": "Creed Bratton",
                    "image": "creed-bratton.jpg",
                }
            }, {
                "id": 4,
                "title": "Picking a Windows 10 Security Package",
                "published_at": "1452821354",
                "text": "Oscar the Grouch has a recycling bin and Big Bird has moved to a tree as the children’s classic debuts on HBO, aiming at a generation that doesn’t distinguish between TV and mobile screens.",
                "category": "Tech",
                "image": '/img/news_05.jpg',
                "author": {
                    "name": "Creed Bratton",
                    "image": "creed-bratton.jpg",
                }
            }, {
                "id": 5,
                "title": "As U.S. Modernizes Nuclear Weapons, ‘Smaller’ Leaves Some Uneasy",
                "published_at": "1452821354",
                "text": "The Energy Department and the Pentagon have been readying a weapon with a build-it-smaller approach, setting off a philosophical clash in the world of nuclear arms.",
                "category": "Science",
                "image": '/img/news_06.jpg',
                "author": {
                    "name": "Creed Bratton",
                    "image": "creed-bratton.jpg",
                }
            }
        ];

app.get('/', function(req, res) {
  res.send('Listening..');
});

app.get('/news', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (req.query.timeout) {
    setTimeout(function() {
      res.json(staticData);
    }, req.query.timeout);
  } else {
    res.json(staticData);
  }
});

app.get('/news/:news', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (req.query.timeout) {
    setTimeout(function() {
      res.json(staticData.filter(function(news) {
        return news.id = req.params.news;
      }));
    }, req.query.timeout);
  } else {
    res.json(staticData.filter(function(news) {
      return news.id = req.params.news;
    }));
  }
});

app.listen(argv.port, function() {
  console.log('Pull the anchor, we\'re leaving !');
});
