import React from "react";
import cns from "classnames";
import PropTypes from "prop-types";
import ArrowRight from "react-feather/dist/icons/arrow-right";
import styles from "./styles";

export class Video extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			open: false
		};
	}

	handleOpen = open => {
		this.setState({
			open
		});
	};

	render() {
		const { open } = this.state;
		const { youtubeId, image, title, annotation, primary } = this.props;

		return (
			<div className={cns(styles.root, { [styles.primary]: primary })}>
				{!open ? (
					<div
						onClick={() => this.handleOpen(true)}
						tabIndex={0}
						className={styles.preview}
					>
						<div className={styles.playIcon}>
							<img width="100%" src={require("./assets/play.png")} />
						</div>
						<img className={styles.hiddenImage} src={image} width="100%" />
						<img
							className={styles.image}
							src={image}
							width="100%"
							alt={title}
						/>
						<div className={styles.overlay}>
							<div className={styles.gradient} />
							<div className={styles.content}>
								<h2>
									{title} <ArrowRight className={styles.icon} size={18} />
								</h2>
								<p>{annotation}</p>
							</div>
						</div>
					</div>
				) : (
					<div className={styles.video}>
						<iframe
							width="100%"
							src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
							frameBorder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
					</div>
				)}
			</div>
		);
	}
}

Video.propTypes = {
	youtubeId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string,
	primary: PropTypes.bool,
	annotation: PropTypes.string.isRequired
};
