const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.json("Web scrapper");
})
app.get('/restaurants/:city',(req,res) => {

    city = req.params.city;
    const URL = `https://www.sluurpy.in/${city}/restaurants`;
    axios.get(URL)
    .then(
    async (response) => {
        const html = response.data;
        const total=[];
        const name = [];
        const review = [];
        const image_link = [];
        const see_more =[];
        const tags = [];
        const $ = cheerio.load(html);

        $('.box-ristorante-titolo').each((i, el) => {
            const item = $(el).find('strong').text();
            name.push( item);
        });

        $('.box-ristorante-voto').each((i, el) => {
            const item = $(el).text();
            review.push(item);
        });

        $('.box-ristorante-immagine').each((i,el)=>{
            const item = $(el).attr('data-src');
            image_link.push(item);
        })

        $('.box-ristorante').each((i,el)=>{
            const item = $(el).find('a').attr('href');
            see_more.push(item);
        });
        

        $('.box-ristorante-tags').each((i,el)=>{
            const item = $(el).find('.box-ristorante-tag');
            const list =[];
            item.each((i,el)=>{
                const tag = $(el).text();
                list.push(tag);
            })
            tags.push(list);
        })

        for(var i=0;i<name.length;i++){
            total.push({
                name:name[i],
                review:review[i],
                see_more:see_more[i],
                tags:tags[i]
            })
        }

        res.json(total);
    })  
        .catch((error) => {
        // console.log(error);
    });
});

app.get('/places_to_visit/:city',(req,res)=>{
    city = req.params.city;
    const URL = `https://www.fabhotels.com/blog/places-to-visit-in-${city}`;
    axios.get(URL)
    .then(
    async (response) => {
        const html = response.data;
        const places = [];
        const $ = cheerio.load(html);
        

        $('.entry-content').each((i, el) => {
            const item = $(el).find('h3').text();
                places.push(item);
        });
        // console.log(places);
        res.json(places);

    })  
        .catch((error) => {
        // console.log(error);
    });
})

app.get('/about/:city', (req, res) => {

    city = req.params.city

    async function scrapeData() {
        try {
            const response = await axios.get(`https://simple.m.wikipedia.org/wiki/${city}`);
            const $ = cheerio.load(response.data);
            const about = []
            
            const detail = $("p").first().text();
            // console.log("detail:", detail);
            about.push (detail)
            res.json(about)

        } catch (error) {
            // console.log("Error while scraping data:", error);
        }
    }

    scrapeData();
})

app.get("/testing", async (req, res) => {
    try {
        const response = await axios.get(`https://www.shutterstock.com/search/jaipur`)
        const $ = cheerio.load(response.data)
        const list = []

        const tagline = $(".mui-3nl4cpc-gridContainer-root div")
        tagline.each((index, element) => {
            const item = $(element).attr("src")
            list.push(item)
        })
        console.log(list)

        res.send("break")

        // tagline.each((index, element) => {
            
        // })

        $("img").each((index, element) => {
          const link = $(element).attr("src")
          list.push(link)  
        })
        res.status(200).json(list)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
})


app.get('/city_images/:city', async (req, res) => {
    city = req.params.city;
  try {
    const response = await axios.get(`https://www.shutterstock.com/search/${city}`);
    const $ = cheerio.load(response.data);

    const imageLinks = [];

    $('img').each((index, element) => {
      const src = $(element).attr('src');
      if (src) {
        imageLinks.push(src);
      }
    });

    res.json({ imageLinks });
    // console.log({imageLinks})
  } catch (error) {
    res.json({ error });
  }
});

module.exports = app

