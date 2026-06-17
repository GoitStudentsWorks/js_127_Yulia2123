import { animals } from './animals.js';
import { showLoader, hideLoader } from './loader.js';

export async function getAnimals() {
  try {
    showLoader();

    // Imitate API
    await new Promise(resolve => setTimeout(resolve, 300));

    return animals;
  } finally {
    hideLoader();
  }
}
