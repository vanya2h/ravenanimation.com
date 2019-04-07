import { sendEmail } from "@api/email/send-email";

class EmailService {
	send = async ({ client, subject, body }) => {
		try {
			const response = await client(
				sendEmail({
					subject,
					body
				})
			);

			return response;
		} catch (error) {
			console.log(error);
			throw new Error(error);
		}
	};
}

export const emailService = new EmailService();
