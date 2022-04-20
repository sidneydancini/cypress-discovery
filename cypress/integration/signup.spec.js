import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'


describe('Signup', () => {

    it('User should be deliver', function() {  
        var deliver = signupFactory.deliver() 
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.modalContentShouldBe(expectedMessage)
    })

    it('Incorrect document', function() {
        var deliver = signupFactory.deliver() 
        deliver.cpf = '000000141AA'
        const expectedMessage = 'Oops! CPF inválido'  
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe(expectedMessage)      
    })

    it('Incorrect email', function() {
        var deliver = signupFactory.deliver() 
        deliver.email = 'user.com'
        const expectedMessage = 'Oops! Email com formato inválido.'  
        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe(expectedMessage)      
    })

    context('Required fields', function(){
        const messages = [
            {field: 'name', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'postalcode', output: 'É necessário informar o CEP'},
            {field: 'number', output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method', output: 'Selecione o método de entrega'},
            {field: 'name', output: 'Adicione uma foto da sua CNH'}
        ]

        before(function(){
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
})