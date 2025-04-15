// src/models/Simulation.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const simulationSchema = new Schema({
    initialCapital: {
        type: Number,
        required: true,
    },
    months: {
        type: Number,
        required: true,
        enum: [3, 6, 9, 12],
    },
    interestType: {
        type: String,
        required: true,
        enum: ['simple', 'compound'],
    },
    monthlyResults: [
        {
            month: Number,
            capital: Number,
            interest: Number,
            total: Number,
        },
    ],
    finalAmount: Number,
    fee: Number,
    netAmount: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Simulation = model('Simulation', simulationSchema);
