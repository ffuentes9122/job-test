import { faker } from '@faker-js/faker/locale/en';

export class DataGenerator {
  static getRandomQuantity(): number {
    return faker.number.int({ min: 1, max: 20 });
  }
}