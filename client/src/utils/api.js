import axios from 'axios';

export const getHotelData = (latitude,longitude) => {
  try {
    return axios.get(`https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates`, {
        params: {
            longitude: longitude,
            filter_by_currency: 'AED',
            room_number: '1',
            locale: 'en-gb',
            latitude: latitude,
            order_by: 'popularity',
            units: 'metric',
            checkin_date: '2023-07-15',
            adults_number: '2',
            checkout_date: '2023-07-16',
            page_number: '0',
            categories_filter_ids: 'class::2,class::4,free_cancellation::1',
            children_number: '2',
            include_adjacency: 'true',
            children_ages: '5,0'
          },
          headers: {
            'X-RapidAPI-Key': '22f73b73famsh309f192d9633dd0p1ca9afjsn3db70240ead7',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
          }
    })
    .then (response => {
        console.log (response.data)
        return response.data
    })
    
  } catch (error) {
    console.log(error);
  }
};

