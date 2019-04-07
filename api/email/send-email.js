export const sendEmail = ({ body, subject }) => ({
	method: "POST",
	url: "/email/send",
	data: {
		body,
		subject
	}
});
