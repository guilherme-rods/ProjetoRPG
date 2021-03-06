import database from '../database/connect'

const createCard = async (card, idUser) => {
    const { name, alignment, idRace, idKind, charisma, intelligence,
        dexterity, winsdow, constitution, strength, hp } = card;

    await database.insert({
        idUser, name, alignment, idRace, idKind, charisma, intelligence,
        dexterity, winsdow, constitution, strength, hp, deleted: 0
    }).into('Card')
}

const getCardByUser = async (idUser) => {
    const cards = await database.from('Card').innerJoin('Race', `Card.idRace`, `Race.idRace`)
        .innerJoin('Kind', `Card.idKind`, `Kind.idKind`).orderBy(`idCard`, 'desc').where({ idUser }).andWhere('deleted', 0)
        
    return cards
}

const getCardById = async (idCard) => {
    const cards = await database.from('Card').innerJoin('Race', `Card.idRace`, `Race.idRace`).innerJoin('User', 'Card.idUser', 'User.idUser')
        .innerJoin('Kind', `Card.idKind`, `Kind.idKind`).orderBy(`Card.idCard`).where({ idCard })
    
    return cards
}

const deleteCardbyId = async (idCard) => {
   return await database('Card').update('deleted', 1).where({idCard}).andWhere('deleted', 0)
}
module.exports = { createCard, getCardByUser, getCardById, deleteCardbyId }