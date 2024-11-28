import { faker } from "@faker-js/faker";
import { generate } from "creditcard-generator";

export const generateRandomUsers = (count = 10) => {
  return Array.from({ length: count }).map(() => ({
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    avatar: faker.image.avatar(),
    address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.country()}`,
    creditCard: generate()[0],
    company: faker.company.name(),
  }));
};
