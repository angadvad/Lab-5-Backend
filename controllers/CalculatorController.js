'use strict';

const { json } = require("express");

const Calculator = require('../Models/Calculator')
const myCalculator = new Calculator();

exports.addOperation = (req, res) => {

    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        let result =myCalculator.add(number1,number2);
        res.status(200)
        res.json({ result: result })

    } catch (e) {
        throw Error(e.message);
    }
}

exports.addByList = (req, res) => {
    try {
        let list = req.query.list;

        list = list.split(',').map(str => {
            return Number(str);
        })

        let sum = myCalculator.addByListArr(list);

        res.status(200)
        res.json({ success: true, data: sum })

    } catch (e) {
        throw Error(e.message);
    }

}

exports.subtractOperation = (req, res) => {
    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        let result = myCalculator.subtract(number1,number2);
        res.status(200)
        res.json({ result: result })

    } catch (e) {
        throw Error(e.message);
    }
}


exports.multiplyOperation = (req, res) => {
    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        let result = myCalculator.multiply(number1,number2);
        res.status(200)
        res.json({ result: result })

    } catch (e) {
        throw Error(e.message);
    }
}


exports.divideOperation = (req, res) => {
    try {
        const number1 = parseInt(req.query.number1);
        const number2 = parseInt(req.query.number2);
        let result = myCalculator.divide(number1,number2);
        res.status(200)
        res.json({ result: result })

    } catch (e) {
        throw Error(e.message);
    }
}