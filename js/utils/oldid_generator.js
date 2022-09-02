"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOldId = exports.oldIdChars = void 0;
exports.oldIdChars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
function generateOldId() {
    const chars = exports.oldIdChars.split("");
    return "-" + Array(19)
        .fill("-")
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join("");
}
exports.generateOldId = generateOldId;
