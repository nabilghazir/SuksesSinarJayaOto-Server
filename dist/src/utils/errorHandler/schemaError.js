"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationErrorHandler = validationErrorHandler;
/**
 * Fungsi untuk menangani error validasi menggunakan Zod dan mengembalikan pesan error dalam format string yang ringkas.
 * @param error - Error yang terjadi saat validasi gagal
 * @returns Pesan error yang dihasilkan
 */
function validationErrorHandler(error) {
    return error.issues
        .map((issue) => `${issue.path.join('.')}: ${issue.message}`)
        .join(', ');
}
