
class TicketManager {

    constructor() {
        this.events = []
        this.#precioBaseDeGanancia = 0.15
    }
    getEvents = () => {
        return this.events
    }
    getNextID = () => {
        const count = this.events.length
        const nextID = (count >0) ? this.events[count-1].id +1 : 1
        return nextID
    }
    addEvent = (name, place, price,  capacidad =50, fecha = new Date().toLocaleDateString()) => {
        const event = {
            id: this.getNextID(),
            name,
            place, 
            price: price + this.#precioBaseDeGanancia,
            capacidad: capacidad ?? 50,
            fecha: fecha ?? new Date().toLocaleDateString(),
            participantes : []

        }
        this.events.push(event)
    }
    addParticipant = (eventId, userId) => {
        const event = this.events.find(event => event.id == eventId)
        if(event == undefined) return

        if(event.participantes.includes(userId)) {
            event.participantes.push(userId)
            return1
        }
        else { return -1}
    }
    ponerEventoEnGira = (eventId, placenew, datenew) => {
        const event = this.events.find(event => event.id == eventId)
        const { name, price, capacidad }= event
        this.addEvents(name, placenew, price, capacidad, datenew)
    }
}
const manager = new TicketManager()

manager.addEvents("Duki", "Capri", 3000, 30,0)
manager.addEvents("khea", "Catre", 1000, 60, 0)

console.log(manager.addParticipant(1,333));
console.log(manager.addParticipant(1,444));
console.log(manager.addParticipant(1,555));

manager.ponerEventoEnGira(1, "bs as", null)
console.log(manager.events);