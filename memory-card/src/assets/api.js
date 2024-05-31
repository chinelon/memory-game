// // utils/api.js
// import axios from 'axios';

// const BASE_URL = 'https://api.giphy.com/v1/gifs/translate?api_key=rSA7IUVHJWhXipUQjmwrh6QFJeOSWjmX&ss=smiley'; // Replace with your API base URL

// export const fetchCards = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/cards`);
//     return response.data; // Assuming API response contains an array of card data
//   } catch (error) {
//     console.error('Error fetching cards:', error);
//     throw error;
//   }
// };

// utils/api.js
// import axios from 'axios';

// const BASE_URL = 'https://api.giphy.com/v1/gifs/translate?api_key='; // Corrected API base URL

// export const fetchCards = async () => {
//   try {
//     const response = await axios.get(BASE_URL, {
//       params: {
//         api_key: 'rSA7IUVHJWhXipUQjmwrh6QFJeOSWjmX&ss=', // Your Giphy API key
//         ss: 'kdrama' // Your search term or query parameter
//       }
//     });
//     return response.data; // Assuming API response contains an array of card data
//   } catch (error) {
//     console.error('Error fetching cards:', error);
//     throw error;
//   }
// };


// export const fetchCards = async () => {
//   try {
//     const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=rSA7IUVHJWhXipUQjmwrh6QFJeOSWjmX&ss=cats`, { mode: 'cors' });
//     if (!response.ok) {
//       throw new Error('Failed to fetch cards');
//     }
//     const data = await response.json();
//     return data; // Assuming API response contains an array of card data
//   } catch (error) {
//     console.error('Error fetching cards:', error);
//     throw error;
//   }
// };

// utils/api.js
// export const fetchCards = async () => {
//   try {
//     const response = await fetch(`https://api.stockx.vlour.me/search?query=Crocs`, { mode: 'cors' });
//     if (!response.ok) {
//       throw new Error('Failed to fetch cards');
//     }
//     const responseData = await response.json();
//     console.log(responseData)
    
//     const imageUrls = responseData.hits.link; // Extract image URLs from response data
//     console.log(imageUrls)
//     return imageUrls; // Return an array of image URLs
//   } catch (error) {
//     console.error('Error fetching cards:', error);
//     throw error;
//   }
// };
