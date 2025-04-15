// src/models/Payment.js
import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const paymentSchema = new Schema({
    simulationId: {
        type: Schema.Types.ObjectId,
        ref: 'Simulation',
    },
    amount: Number,
    paymentAddress: String,
    network: String,
    smartContractAddress: String,
    status: {
        type: String,
        default: 'pending',
    },
    amountCaptured: {
        type: Number,
        default: 0,
    },
    qrCodeData: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Payment = model('Payment', paymentSchema);
