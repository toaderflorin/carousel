var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  var contents = fs.readFileSync('./src/index.html', 'utf8');
  res.send(contents);
});

app.get('/api/blocks', (req, res) => {
  res.send([{
      title: 'Block 1',
      images: [
        'https://upload.wikimedia.org/wikipedia/en/d/d6/Bob_Dylan_-_The_Freewheelin%27_Bob_Dylan.jpg',
        'http://wp.production.patheos.com/blogs/acatholicthinker/files/2015/09/Bob_Dylan_-_The_Times_They_are_a-Changin.jpg',
        'https://scontent.fsbz1-1.fna.fbcdn.net/v/t1.0-9/21032844_10155159729868277_8580367252056650586_n.jpg?oh=ff77d0bf0897388e64adc9b0add02206&oe=5A9DC914',
        'https://images-na.ssl-images-amazon.com/images/M/MV5BYmQ3OWNmMjgtMTdhOS00YTQ4LTkyZGYtNTQyMGQ0NjZlMDQzXkEyXkFqcGdeQXVyNTAxMjIzMjU@._V1_.jpg'
      ]
    },
    {
      title: 'Block 2',
      images: [
        'https://upload.wikimedia.org/wikipedia/en/1/11/Michaeljacksondangerous.jpg',
        'http://www.feelnumb.com/wp-content/uploads/2011/10/Led_Zeppelin-Led_Zeppelin-Frontal.jpg',
        'http://www.mad-eyes.net/music/madonna-first-album/img/album_madonna_back.jpg',
        'https://pre00.deviantart.net/52cf/th/pre/i/2012/085/b/b/madonna_first_album_cover_by_fabio2k5-d4u0m0h.jpg'
      ]
    }, {
      title: 'Block 3',
      images: [
        'https://cps-static.rovicorp.com/3/JPG_500/MI0001/117/MI0001117614.jpg?partner=allrovi.com',
        'https://is5-ssl.mzstatic.com/image/thumb/Music/v4/a8/c6/e5/a8c6e580-eef1-a452-acab-3feff96facd6/UMG_cvrart_00602537348855_01_RGB72_1500x1500_13UMGIM16239.jpg/1200x630bb.jpg',
        'http://img.wennermedia.com/920-width/rs-135957-ccc99759f0d6e8464082896511455136edb1d1c4.jpg',
        'https://www.mrvinyl.co.za/wp-content/uploads/2014/04/guns-n-roses-use-your-illusion-1.jpeg'
      ]
    }
  ]);
});

app.listen(3000, function() {
  console.log('Started successfully, open localhost:3000.');
});
