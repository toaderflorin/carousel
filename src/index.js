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
      title: 'Bob Dylan',
      images: [
        'https://upload.wikimedia.org/wikipedia/en/d/d6/Bob_Dylan_-_The_Freewheelin%27_Bob_Dylan.jpg',
        'http://wp.production.patheos.com/blogs/acatholicthinker/files/2015/09/Bob_Dylan_-_The_Times_They_are_a-Changin.jpg',
      ]
    }, {
      title: 'Michael Jackson',
      images: [
        'https://upload.wikimedia.org/wikipedia/en/1/11/Michaeljacksondangerous.jpg',
        'https://www.famousbirthdays.com/headshots/michael-jackson-8.jpg'
      ]
    }, {
      title: 'Guns \'n Roses',
      images: [
        'https://www.mrvinyl.co.za/wp-content/uploads/2014/04/guns-n-roses-use-your-illusion-1.jpeg',
        'https://i.scdn.co/image/80920b4fc80b6d970e2934eb8abe27014fc60632'
      ]
    }, {
        title: 'Madonna',
        images: [
          'http://www.mad-eyes.net/music/madonna-first-album/img/album_madonna_back.jpg',
          'https://upload.wikimedia.org/wikipedia/en/e/e0/Bad_Girl_Madonna.png',
          'https://pre00.deviantart.net/52cf/th/pre/i/2012/085/b/b/madonna_first_album_cover_by_fabio2k5-d4u0m0h.jpg'
        ]
      }, {
        title: 'Led Zeppelin',
        images: [
          'http://www.feelnumb.com/wp-content/uploads/2011/10/Led_Zeppelin-Led_Zeppelin-Frontal.jpg'
        ]
      },  {
        title: 'SRV',
        images: [
          'https://cps-static.rovicorp.com/3/JPG_400/MI0001/399/MI0001399374.jpg?partner=allrovi.com',
          'https://i.pinimg.com/736x/17/14/f9/1714f915d1d222c1b6cafbb4c4575c8d--guitar-players-guitarist.jpg'
        ]
      }, {
        title: 'Hendrix',
        images: [
          'https://www.famousbirthdays.com/headshots/jimi-hendrix-1.jpg',
          'https://www.theplace2.ru/archive/jimmy_hendrix/img/JIMI_B10_web_size2.jpg'
        ]
      }, {
        title: 'Tracy Chapman',
        images: [
          'http://bornwiki.com/bio/tracy-chapman.jpg',
          'https://cps-static.rovicorp.com/3/JPG_500/MI0003/501/MI0003501120.jpg?partner=allrovi.com'
        ]
      }, {
        title: 'Jewel',
        images: [
          'https://i.pinimg.com/736x/0b/70/8e/0b708ef48e1eaf3404f1f2409dd06972--jewel-singer-utah-usa.jpg',
          'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cg_face%2Ch_300%2Cq_80%2Cw_300/MTIwNjA4NjMzNTk1NTk0MjUy/jewel-224921-1-402.jpg'
        ]
      }
    ]
  );
});

app.listen(3000, function() {
  console.log('Started successfully, open localhost:3000.');
});
