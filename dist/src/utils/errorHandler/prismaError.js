"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function prismaErrorHandler(err) {
    var _a, _b, _c;
    switch (err.code) {
        case 'P2002':
            return `The ${(_a = err.meta) === null || _a === void 0 ? void 0 : _a.target} already exists.`;
        case 'P2014':
            return `The id: ${(_b = err.meta) === null || _b === void 0 ? void 0 : _b.target} is invalid.`;
        case 'P2003':
            return `Please input a valid data for ${(_c = err.meta) === null || _c === void 0 ? void 0 : _c.target}`;
        default:
            return `Something went wrong: ${err.message}`;
    }
}
exports.default = prismaErrorHandler;
