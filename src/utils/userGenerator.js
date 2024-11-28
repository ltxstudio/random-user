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
    jobTitle: faker.name.jobTitle(),
    gender: faker.person.gender(), // Male/Female/Non-Binary
    dateOfBirth: faker.date.birthdate({ min: 18, max: 65, mode: "age" }).toISOString().split("T")[0], // e.g., YYYY-MM-DD
    bio: faker.lorem.sentence(10), // A short bio
    socialMedia: {
      twitter: `https://twitter.com/${faker.internet.userName()}`,
      linkedin: `https://linkedin.com/in/${faker.internet.userName()}`,
      github: `https://github.com/${faker.internet.userName()}`,
    },
    hobbies: Array.from({ length: 3 }).map(() => faker.hobby.hobby()), // Random hobbies
    maritalStatus: faker.helpers.arrayElement(["Single", "Married", "Divorced", "Widowed"]),
    nationality: faker.address.country(), // Country of origin
    favoriteColor: faker.color.human(), // Favorite color
    education: faker.helpers.arrayElement([
      "High School",
      "Associate's Degree",
      "Bachelor's Degree",
      "Master's Degree",
      "PhD",
    ]), // Highest level of education
    languages: Array.from({ length: 2 }).map(() => faker.random.word()), // Random languages
    emergencyContact: {
      name: faker.name.fullName(),
      relationship: faker.helpers.arrayElement(["Friend", "Sibling", "Parent", "Spouse"]),
      phone: faker.phone.number(),
    },
    previousJob: {
      title: faker.name.jobTitle(),
      company: faker.company.name(),
      duration: `${faker.datatype.number({ min: 1, max: 10 })} years`,
    },
    salaryRange: `${faker.datatype.number({ min: 50000, max: 200000 })} - ${faker.datatype.number({ min: 200000, max: 500000 })}`, // Salary range
    pets: Array.from({ length: 2 }).map(() => ({
      type: faker.helpers.arrayElement(["Dog", "Cat", "Bird", "Fish", "Reptile"]),
      name: faker.animal.type(),
      age: faker.datatype.number({ min: 1, max: 15 }),
    })), // Random pet information
  }));
};
