var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '41996086979',
            address: {
              postalcode: '04534011',
              street: 'Rua Joaquim Floriano',
              numero: '1570',
              details: 'Fundos',
              district: 'Itaim Bibi',
              city_state: 'São Paulo/SP'
            },
            deliver_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}