const knex = require('../database/knex');

function contactRepository() {
    return knex('contacts');
}

function readContact(payload) {
    return {
        name: payload.name,
        email: payload.email,
        address: payload.address,
        phone: payload.phone,
        favorite: payload.favorite,
        avatar: payload.avatar,
    };
}



async function createContact(payload) {
    const contact = readContact(payload);
    const [id] = await contactRepository().insert(contact);
    return { id, ...contact };
    }
    
module.exports = {
// Export defined functions
    createContact
}