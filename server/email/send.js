import { sendgrid } from "./sendgrid";
import { stripHtml } from "./strip-html";

export const send = (req, res, next) => {
	const { subject, body } = req.body;

	const text = stripHtml(body);

	const data = {
		to: process.env.EMAIL_RECEPIENT,
		from: process.env.EMAIL_ACTOR,
		subject,
		html: body,
		text
	};

	return sendgrid
		.send(data)
		.then(result => {
			res.json(result);
		})
		.catch(error => {
			next(error);
		});
};
