import { InMemoryDbService } from 'angular-in-memory-web-api'
import * as faker from 'faker/locale/en_US';

export class FakeBackendService implements InMemoryDbService {
    createDb() {
        let collection = [
            {
                id: 1,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j1.jpg',
                price: faker.commerce.price(2)
            },
            {   id: 2,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j2.jpg',
                price: faker.commerce.price(2)
            },
            {   id: 3,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j3.jpg',
                price: faker.commerce.price(2)
            },
            {
                id: 4,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j4.jpg',
                price: faker.commerce.price(2)
            },
            {   id: 5,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j5.jpg',
                price: faker.commerce.price(2)
            },
            {   id: 6,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j6.jpg',
                price: faker.commerce.price(2)
            },
            {
                id: 7,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j7.jpg',
                price: faker.commerce.price(2)
            },
            {
                id: 8,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j8.jpg',
                price: faker.commerce.price(2)
            },
            {
                id: 9,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j9.jpg',
                price: faker.commerce.price(2)
            },
            {
                id: 10,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j1.jpg',
                price: faker.commerce.price(2)
            },
            {
                id: 11,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j2.jpg',
                price: faker.commerce.price()
            },
            {
                id: 12,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j3.jpg',
                price: faker.commerce.price(2)
            },
        ]
        let cart = [
            {
                id: 12,
                product_name: "Product Name",
                description: faker.lorem.paragraphs(),
                img: '../assets/j.jpg',
                price: faker.commerce.price(2)
            },
        ]
        return { collection, cart }
    }
}