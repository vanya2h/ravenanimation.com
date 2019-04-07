import React from "react";
import { sendContactEmail } from "@actions/send-contact-email";
import { ContactFormView } from "./view";

export const ContactForm = props => (
	<ContactFormView
		onSubmit={async data => {
			event.preventDefault();

			const response = await sendContactEmail(data);
			return response;
		}}
		{...props}
	/>
);
