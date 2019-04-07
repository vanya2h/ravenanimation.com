export const contactEmail = ({
	fullName,
	contactEmail,
	phone,
	message
}) => `<html><body>
<ul>
	<li><b>Имя</b>: ${fullName}</li>
	<li><b>Телефон</b>: ${phone}</li>
	<li><b>Email</b>: ${contactEmail}</li>
	<li><b>Сообщение</b>: ${message}</li>
</ul>
</body></html>`;
