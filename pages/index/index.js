import React from "react";
import classnames from "classnames";
import { Page } from "@components/Page";
import { Button } from "@components/Button";
import { Socials } from "@components/Socials";
import GridIcon from "react-feather/dist/icons/grid";
import { team } from "./team";
import { Slider } from "@components/Slider";
import { Container } from "@components/Container";
import { Header } from "@components/Header";
import { ContactForm } from "@components/ContactForm";
import { Video } from "@components/Video";
import { HeaderContainer } from "@components/HeaderContainer";
import { LogoVideo } from "@components/LogoVideo";
import { Icon } from "@components/Icon";
import { videos } from "./videos";
import { partners } from "./partners";
import styles from "./styles";

class IndexPage extends React.PureComponent {
	render = () => {
		return (
			<Page>
				<React.Fragment>
					<div className={styles.heading}>
						<HeaderContainer>
							<Header />
						</HeaderContainer>
					</div>
					<div id="hello" className={classnames(styles.slide, styles.slide01)}>
						<div className={styles.video}>
							<LogoVideo />
						</div>
						<div className={styles.content}>
							<Container className={styles.container}>
								<div
									className={classnames(styles.bottom, "animated", "fadeInUp")}
								>
									<Container>
										<div className={styles.primaryText}>
											<p>
												Студия генерирующая анимационный контент. Работаем с 2D
												графикой, рисуем покадровую анимацию.
											</p>
										</div>
										<div className={styles.buttons}>
											<a href="#contact">
												<Button design="primary">Работать вместе</Button>
											</a>
											<a href="#works">
												<Button design="ghost" icon={<GridIcon size={13} />}>
													Наши работы
												</Button>
											</a>
										</div>
									</Container>
								</div>
							</Container>
						</div>
					</div>
					<div id="about" className={classnames(styles.slide, styles.slide02)}>
						<div className={styles.content}>
							<Container className={styles.container}>
								<div
									className={classnames(
										styles.title,
										"animated",
										"slideInDown"
									)}
								>
									<h2
										data-lax-opacity={"(vh*0.5) 0, vh 1"}
										data-lax-translate-y={"(vh*0.5) -160, vh 0"}
									>
										Наша команда
									</h2>
									<p
										data-lax-opacity={"(vh*0.6) 0, vh 1"}
										data-lax-translate-y={"(vh*0.6) -100, vh 0"}
									>
										Мы - команда режиссеров, художников, аниматоров и
										дизайнеров. Наша структура позволяет схематично и красиво
										визуализировать то, что необходимо донести до{" "}
										<span>Вашей</span> целевой аудитории
									</p>
								</div>
								<div className={styles.team}>
									<Slider
										responsive={[
											{
												breakpoint: 992,
												settings: {
													slidesToShow: 3,
													slidesToScroll: 3
												}
											},
											{
												breakpoint: 600,
												settings: {
													slidesToShow: 2,
													slidesToScroll: 2
												}
											},
											{
												breakpoint: 420,
												settings: {
													slidesToShow: 1,
													slidesToScroll: 1
												}
											}
										]}
									>
										{team.map(worker => (
											<div key={worker.id} className={styles.worker}>
												<div className={styles.inner}>
													<img
														src={worker.img}
														width="100%"
														className={styles.image}
													/>
													<div className={styles.annotation}>
														<h3>{worker.name}</h3>
														<br />
														<p>{worker.annotation}</p>
													</div>
												</div>
											</div>
										))}
									</Slider>
								</div>
							</Container>
						</div>
					</div>
					<div id="works" className={classnames(styles.slide, styles.slide03)}>
						<div className={styles.content}>
							<Container className={styles.container}>
								<div className={styles.title}>
									<h2>Наши работы</h2>
									<p>
										Собрание наших работ за последние несколько лет. Убедитесь
										сами в том, насколько <span>качественную анимацию</span> мы
										производим для Вас и Вашего бизнеса
									</p>
								</div>
								<div className={styles.videos}>
									{videos.map((video, i) => (
										<div key={video.id} className={styles.video}>
											<Video {...video} primary={i === 0} />
										</div>
									))}
								</div>
							</Container>
						</div>
					</div>
					<div className={classnames(styles.slide, styles.slide04)}>
						<div className={styles.content}>
							<Container className={styles.container}>
								<div className={styles.title}>
									<h1>Почему именно мы?</h1>
									<p>
										Несколько причин, которые помогут вам выбрать именно нашу
										студию для создания качественной анимации
									</p>
								</div>
								<div className={styles.inner}>
									<div className={styles.items}>
										<div className={styles.item}>
											<Icon icon="idea" className={styles.icon} />
											<div className={styles.content}>
												<h3>Опытная команда</h3>
												<p>
													Каждый член нашей команды имеет большой опыт,
													подтвержденный в реальных бизнесовых условиях
												</p>
											</div>
										</div>
										<div className={styles.item}>
											<Icon
												icon="group"
												className={classnames(styles.icon, styles.manager)}
											/>
											<div className={styles.content}>
												<h3>Мы помогаем бизнесу</h3>
												<p>
													Мы поможем Вам построить крепкие отношения между
													клиентом и Вами через анимационный контент
												</p>
											</div>
										</div>
										<div className={styles.item}>
											<Icon
												icon="manager"
												className={classnames(styles.icon, styles.manager)}
											/>
											<div className={styles.content}>
												<h3>Мы всегда на связи</h3>
												<p>
													Работая с нами вы получаете постоянную связь с Вашим
													персональным менеджером
												</p>
											</div>
										</div>
									</div>
								</div>
							</Container>
						</div>
					</div>
					<div
						id="contact"
						className={classnames(styles.slide, styles.slide05)}
					>
						<div className={styles.content}>
							<Container className={styles.container}>
								<div className={styles.info_area}>
									<div className={styles.title}>
										<Icon icon="zap" className={styles.icon} />
										<h1>Работать вместе!</h1>
									</div>
									<p>
										Расскажите нам о своем продукте и мы составим вам
										персональный план интеграции <span>качественного</span>{" "}
										анимационного контента в ваш бренд
									</p>
								</div>
								<div className={styles.primary}>
									<div className={styles.main_area}>
										<ContactForm />
									</div>
								</div>
							</Container>
							<Container className={styles.partners}>
								<h3>Нам доверяют</h3>
								<p>Партнеры, с которыми мы работали</p>
								<div className={styles.list}>
									{partners.map(partner => (
										<div className={styles.partner} key={partner.id}>
											<img src={partner.image} alt={partner.title} />
										</div>
									))}
								</div>
							</Container>
						</div>
					</div>

					<div
						className={classnames(styles.slide, styles.relaxed, styles.slide06)}
					>
						<div className={styles.content}>
							<Container className={styles.container}>
								<div className={styles.info}>
									<h3>Raven Animation Studio</h3>
									<p>{new Date().getFullYear()} &copy; Все права защищены.</p>
									<p>
										Наш телефон{" "}
										<a href="tel:+7 (930) 384-02-69">+7 (930) 384-02-69</a>
										<br />
										Прием ваших писем{" "}
										<a href="mailto:hello@ravenanimation.com">
											hello@ravenanimation.com
										</a>
									</p>
									<p className={styles.disclaimer}>
										Little thanks{" "}
										<a href="https://vk.com/vanya2h">Ivan Mayers</a>
									</p>
								</div>
								<div className={styles.icons}>
									<Socials />
								</div>
							</Container>
						</div>
					</div>
				</React.Fragment>
			</Page>
		);
	};
}

export default IndexPage;
