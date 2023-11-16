import {faker} from '@faker-js/faker'
import { Thread, User } from '../types/threads'

export function createRondomUser(): User {

    return {
        id: faker.string.uuid(),
        photo: faker.image.avatar(),
        name: faker.person.firstName() + " " + faker.person.lastName(),
        verified: Math.random() >= .7,
        bio: faker.person.bio(),
        username: faker.internet.userName(),
        link:faker.internet.url(),
        followers:

    }
}