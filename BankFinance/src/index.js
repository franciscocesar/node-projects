const { response } = require('express');
const express = require('express');
const { v4: uuidv4} = require('uuid');

const app = express();

const customers = [];
// 1280
// 1600
// 614

const verifyExistsAccountCPF = (req, res, next) => {
    const { cpf } = req.headers;
    
    const customer = customers.find(customer => customer.cpf === cpf);

    if (!customer) {
        return res.status(400).json({error: 'Customer not found'})
    } 
    req.customer = customer;

    return next();

}

const getBalance = (statement) => {
    const balance = statement.reduce((acc, operation) => {
        if (operation.type === 'credit') {
            return acc + operation.amount;
        } else {
            return acc - operation.amount;
        }
    }, 0)

    return balance
}

app.use(express.json());

app.post('/account', (req, res) => {

    const { cpf, name } = req.body;

    const customerAlreadyExists = customers.some((customers) => customers.cpf === cpf)

    if(customerAlreadyExists) {
        return res.status(400).json({erro: "Customer Already Exists"})
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    })
    return res.status(201).send();
}) 

app.get('/statement', verifyExistsAccountCPF, (req, res) => {
    const { customer } = req

    return res.json(customer.statement)
})

app.post('/deposit', verifyExistsAccountCPF, (req, res) => {
    const {description, amount} = req.body;

    const { customer } = req

    const statementOperation = {
        description,
        amount,
        createdAt: new Date(),
        type: 'credit'
    }

    customer.statement.push(statementOperation)

    return res.status(201).send();
})

app.post('/withdraw',verifyExistsAccountCPF, (req, res) => {
    const { amount } = req.body
    const {customer} = req

    const balance = getBalance(customer.statement);

    if (balance < amount) {
        return res.status(400).json({error: "Insufficiente funds!"})
    }

    const statementOperation = {
        amount,
        createdAt: new Date(),
        type: 'debit',
    };

    customer.statement.push(statementOperation)
    return res.status(201).send()


})

app.use(verifyExistsAccountCPF);

app.listen(3333)