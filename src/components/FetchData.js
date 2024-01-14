
import axios from 'axios';

    const fetchData = async (link) => {
      try {
        const response = await axios.post(`http://localhost:5000/shorten/url`, {
            longUrl : link
        });
        console.log("Entered link -=-=->" , link)
        // const response = {
        //     data : { id : "4343", "shorturl" : "iirugiu843", "longUrl" : "4943984hf984hf", "urlCode" : "8438", "barcode" : "40349" }
        // }

        return response.data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

export default fetchData;
