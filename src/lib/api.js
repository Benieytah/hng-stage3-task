// lib/api.js
const APP_ID ="FEZG85NEU4FMJLV"
const APP_KEY="fbd8bbac246244f6a3baa01189b06d6520240712155719944905"
const ORG_ID="6e888260ce7e4aca98d66914f28f90c6"


export const TIMBU_API_BASE_URL = 'https://api.timbu.cloud';
export const TIMBU_IMAGE_URL = 'https://api.timbu.cloud/images/';

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${TIMBU_API_BASE_URL}/products?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${APP_KEY}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log('Data received:', data);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Re-throw the error to handle it upstream if needed
  }
};

export const fetchSingleProduct = async (productId) => {
  try {
    const response = await fetch(`${TIMBU_API_BASE_URL}/products/${productId}?organization_id=${ORG_ID}&Appid=${APP_ID}&Apikey=${APP_KEY}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Re-throw the error to handle it upstream if needed
  }
};