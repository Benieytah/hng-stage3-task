// lib/api.js

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
