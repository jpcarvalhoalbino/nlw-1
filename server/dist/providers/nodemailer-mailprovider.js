"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailProvider = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "b9f12e32b5c49f",
        pass: "458c16af72e2fd"
    }
});
class NodemailerMailProvider {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: "Equipe Feedget <no-reply@gmail.com>",
            to: "João Pedro <jpcalbino2002@gmail.com>",
            subject,
            html: body,
        });
    }
}
exports.NodemailerMailProvider = NodemailerMailProvider;
