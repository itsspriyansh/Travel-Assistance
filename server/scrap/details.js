const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/',(req,res)=>{
    res.json("Web scrapper");
})
app.get('/restaurants/:city',(req,res)=>{

    // const city = "jaipur";
     city = req.params.city;
    const URL = `https://www.sluurpy.in/${city}/restaurants`;
    axios.get(URL)
    .then(
    async (response) => {
        const html = response.data;
        // console.log(html);
        const name = [];
        const review = [];
        const image_link = [];
        const $ = cheerio.load(html);

        // restaurant name correct
        $('.box-ristorante-titolo').each((i, el) => {
            const item = $(el).find('strong').text();
            // console.log(item);
            name.push( item);
        });

        // restaurant review out of 100 correct
        // $('.box-ristorante-voto').each((i, el) => {
        //     const item = $(el).find('strong').text();
        //     // console.log(item);
        //     details.push({item});
        // });

        // restaurant review count correct 
        // if we use this then no need to use above one
        $('.box-ristorante-voto').each((i, el) => {
            const item = $(el).text();
            // console.log(item);
            review.push(item);
        });

        // // restaurant image link  correct
        $('.box-ristorante-immagine').each((i,el)=>{
            const item = $(el).attr('data-src');
            // console.log(item);
            image_link.push(item);
        })


        

        // book restaurant button incorect
        // $('.col-xs-12 col-md-6 box-ristorante').each((i,el)=>{
        //     const item = $(el).attr('href');
        //     console.log(item);
        // });
        // may be because of some card doesnot have image so it might be not working

        // $('.box-ristorante-tags').each((i,el)=>{
        //     const item = $(el).find('box-ristorante-tag').text();
        //     console.log(item);
        // })
        res.json(image_link);
    })  
        .catch((error) => {
        console.log(error);
    });
});

app.get('/places_to_visit/:city',(req,res)=>{
    city = req.params.city;
    const URL = `https://www.fabhotels.com/blog/places-to-visit-in-${city}`;
    // axios.get('https://www.fabhotels.com/blog/places-to-visit-in-agra/')
    axios.get(URL)
    .then(
    async (response) => {
        const html = response.data;
        // console.log(html);
        const places = [];
        const $ = cheerio.load(html);
        
        // places to visit list correct
        $('.entry-content').each((i, el) => {
            
            // console.log(item);
            // if(item.hasAttribute('id')){
            //     places.push(item);
            // }

            const item = $(el).find('h3').text();

            // const id  = $(el).find('h3').attr('id');
            // // console.log(item);
            // console.log(id);
            // places.push(id);

            // if(id != undefined){
                places.push(item);
            // }

            
        });

        // image link correct
        // $('.wp-caption').each((i,el)=>{
        //     const item = $(el).find('img').attr('src');
        //     console.log(item);
        // })

        // name correct 
        // $('.wp-caption').each((i,el)=>{
        //     const item = $(el).find('p').text();
        //     console.log(item);
        // })

        // description correct
        // $('.wp-caption').each((i,el)=>{
        //     const item = $(el).next().text();
        //     console.log(item);
        // })

        // timings correct
        // some places have timings mentioned some have not 
        // $('.wp-caption').each((i,el)=>{
        //     const item = $(el).next().next().text();
        //     console.log(item);
        // })
        console.log(places);
        res.json(places);

    })  
        .catch((error) => {
        console.log(error);
    });
})

app.listen(5000,()=>{
    console.log("server is running on port 5000");
})