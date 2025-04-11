"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceResponseDTO {
    constructor({ error, payload, message }) {
        this.error = error;
        this.payload = payload;
        this.message = message;
    }
}
exports.default = ServiceResponseDTO;
