import { faker } from '@faker-js/faker';
import { Product } from './product.model';

export function generateOneProduct(): Product {
  return {
    id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    description: faker.commerce.productDescription(),
    category: {
      id: faker.number.int(100),
      name: faker.commerce.department(),
    },
    images: [faker.image.url(), faker.image.url()],
  };
}

export function generateManyProducts(size = 10): Product[] {
    return Array.from({ length: size }, () => generateOneProduct());
}
