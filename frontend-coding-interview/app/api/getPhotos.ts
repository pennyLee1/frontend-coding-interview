import { Photo } from '@/types';
import axios from 'axios';

const API_URL = 'https://api.pexels.com/v1/search?query=nature&per_page=10';
const API_KEY = 'Mz0iC21IFLz9HuN8ypIbJ54l8OuGnpW2IsVoQrYBEyagQXt1YeBEA7H0';

export async function getPhotos(): Promise<Photo[]> {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    return response.data.photos;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
}