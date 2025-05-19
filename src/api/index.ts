import axios from 'axios';
const API_KEY = process.env.API_KEY;
const DOMAIN = process.env.DOMAIN;

export const convertTextToPDF = async (text: string): Promise<Blob> => {
  const response = await axios.post(
    `${DOMAIN}/create-pdf?apiKey=${API_KEY}`,
    { text },
    { responseType: 'blob' }
  );
  return response.data;
};
