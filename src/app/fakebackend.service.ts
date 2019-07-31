import { InMemoryDbService } from 'angular-in-memory-web-api'
import * as faker from 'faker/locale/en_US';

export class FakeBackendService implements InMemoryDbService {
    createDb() {
        let collection = [
            {
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j.png',
                price: faker.commerce.price()
            },
            {
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j2.png',
                price: faker.commerce.price()
            },
            {
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j4.png',
                price: faker.commerce.price()
            },
            {
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j3.png',
                price: faker.commerce.price()
            },
            {
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j7.png',
                price: faker.commerce.price()
            },
            {
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j.png',
                price: faker.commerce.price()
            },
            {
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j.png',
                price: faker.commerce.price()
            },
            {
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j3.png',
                price: faker.commerce.price()
            },
            {
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j8.png',
                price: faker.commerce.price()
            },
            {
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j7.png',
                price: faker.commerce.price()
            },
            {
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j7.png',
                price: faker.commerce.price()
            },
            {
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j.png',
                price: faker.commerce.price()
            },
        ]
        return { collection }
    }
}