import { InMemoryDbService } from 'angular-in-memory-web-api'
import * as faker from 'faker/locale/en_US';

export class FakeBackendService implements InMemoryDbService {
    createDb() {
        let collection = [
            {
                id: 1,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j.png',
                price: faker.commerce.price()
            },
            {   id: 2,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j2.png',
                price: faker.commerce.price()
            },
            {   id: 3,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j4.png',
                price: faker.commerce.price()
            },
            {
                id: 4,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j3.png',
                price: faker.commerce.price()
            },
            {   id: 5,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j7.png',
                price: faker.commerce.price()
            },
            {   id: 6,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j.png',
                price: faker.commerce.price()
            },
            {
                id: 7,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j.png',
                price: faker.commerce.price()
            },
            {
                id: 8,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j3.png',
                price: faker.commerce.price()
            },
            {
                id: 9,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j8.png',
                price: faker.commerce.price()
            },
            {
                id: 10,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j7.png',
                price: faker.commerce.price()
            },
            {
                id: 11,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j7.png',
                price: faker.commerce.price()
            },
            {
                id: 12,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j.png',
                price: faker.commerce.price()
            },
        ]
        let cart = [
            {
                id: 12,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j.png',
                price: faker.commerce.price()
            },
        ]
        return { collection, cart }
    }
}