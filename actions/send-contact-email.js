import { emailService } from "@services/email-service";
import { clientService } from "@services/client-service";
import { contactEmail as createContactEmailTemplate } from "@email-templates/contact-email";

export const sendContactEmail = async ({
	fullName,
	contactEmail,
	phone,
	message
}) =>
	emailService.send({
		client: clientService.client,
		subject: "Новая заявка с RavenAnimation.com",
		body: createContactEmailTemplate({
			fullName,
			contactEmail,
			phone,
			message
		})
	});
