"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceErrorHandler = serviceErrorHandler;
const library_1 = require("@prisma/client/runtime/library");
const serviceResponseDto_1 = __importDefault(require("../../dto/serviceResponseDto"));
const prismaError_1 = __importDefault(require("./prismaError"));
function serviceErrorHandler(error) {
    if (error instanceof library_1.PrismaClientKnownRequestError) {
        return new serviceResponseDto_1.default({
            error: true,
            payload: null,
            message: (0, prismaError_1.default)(error),
        });
    }
    else if (error instanceof library_1.PrismaClientValidationError) {
        return new serviceResponseDto_1.default({
            error: true,
            payload: null,
            message: `Validation error with database query : ${error.message}`,
        });
    }
    else if (error instanceof library_1.PrismaClientInitializationError) {
        return new serviceResponseDto_1.default({
            error: true,
            payload: null,
            message: 'Database initialization error',
        });
    }
    else if (error instanceof Error) {
        return new serviceResponseDto_1.default({
            error: true,
            payload: null,
            message: error.message,
        });
    }
    else {
        return new serviceResponseDto_1.default({
            error: true,
            payload: null,
            message: 'Unknown error occurred',
        });
    }
}
