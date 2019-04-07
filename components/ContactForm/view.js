import React from "react";
import PropTypes from "prop-types";
import { Field } from "@components/Field";
import { Input } from "@components/Input";
import { Alert } from "@components/Alert";
import { Button } from "@components/Button";
import { TextArea } from "@components/TextArea";
import InputMask from "react-input-mask";
import styles from "./styles.less";

const initialData = {
	fullName: "",
	contactEmail: "",
	phone: "",
	message: "",
	agreementPassed: false
};

export class ContactFormView extends React.PureComponent {
	state = {
		hasError: false,
		isProcessing: false,
		isSended: false,
		data: initialData
	};

	handleData = nextData => {
		this.setState(state => ({
			data: {
				...state.data,
				...nextData
			}
		}));
	};

	handleSubmit = event => {
		const { onSubmit } = this.props;
		const { data } = this.state;

		event.preventDefault();

		this.setState(
			{
				isProcessing: true,
				isSended: false,
				hasError: false
			},
			async () => {
				try {
					await onSubmit(data);

					this.setState({
						isProcessing: false,
						data: initialData,
						isSended: true
					});
				} catch (error) {
					this.setState({
						hasError: true,
						isProcessing: false
					});
				}
			}
		);
	};

	render() {
		const { data, isProcessing, hasError, isSended } = this.state;

		return (
			<form onSubmit={this.handleSubmit} className={styles.root}>
				<Field required title="Ваше имя">
					<Input
						disabled={isProcessing}
						placeholder="Как вас зовут?"
						value={data.fullName}
						required
						fluid
						onChange={({ target }) =>
							this.handleData({
								fullName: target.value
							})
						}
					/>
				</Field>
				<Field required title="E-mail адрес">
					<Input
						type="email"
						fluid
						required
						disabled={isProcessing}
						placeholder="Куда отправить ответ?"
						value={data.contactEmail}
						onChange={({ target }) =>
							this.handleData({
								contactEmail: target.value
							})
						}
					/>
				</Field>
				<Field title="Контактный телефон">
					<InputMask
						mask="+9 (999) 999 99-99"
						value={data.phone}
						onChange={({ target }) =>
							this.handleData({
								phone: target.value
							})
						}
					>
						{inputProps => (
							<Input
								fluid
								type="tel"
								{...inputProps}
								placeholder="+7 (XXX) XXX XX-XX"
							/>
						)}
					</InputMask>
				</Field>
				<Field title="Сообщение" required>
					<TextArea
						fluid
						required
						rows={4}
						value={data.message}
						disabled={isProcessing}
						onChange={({ target }) =>
							this.handleData({
								message: target.value
							})
						}
						placeholder="Вы можете рассказать нам о своем проекте или задать интересующий вас вопрос о сотрудничестве"
					/>
				</Field>
				{hasError && (
					<Alert title="Упс. Непредвиденная ошибка" error>
						Неизвестная ошибка во время отправки. Попробуйте ещё раз
					</Alert>
				)}
				{isSended && (
					<Alert title="Успех" success>
						Мы получили ваше сообщение и скоро наш менеджер свяжется с вами.
						Спасибо!
					</Alert>
				)}
				<Field>
					<Button disabled={isProcessing} type="submit" design="primary">
						Отправить
					</Button>
				</Field>
			</form>
		);
	}
}

ContactFormView.propTypes = {
	onSubmit: PropTypes.func.isRequired
};
