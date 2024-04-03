export const LGOverlays = () => {
	return (
		<>
			<div
				className="QSIFeedbackButton"
				style={{
					position: "fixed",
					visibility: "hidden",
					inset: "0px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					alignItems: "flex-start",
					margin: "0px",
					padding: "0px",
					zIndex: 2000000000,
				}}>
				<button
					role="button"
					id="QSIFeedbackButton-btn"
					aria-expanded="false"
					aria-controls="QSIFeedbackButton-target-container"
					style={{
						position: "fixed",
						visibility: "visible",
						cursor: "pointer",
						border: "none",
						backgroundColor: "transparent",
						padding: "0px",
						margin: "0px",
						bottom: "calc(50vh - 96px)",
						right: "-1px",
						width: "37px",
						transition: "all 0.5s ease 0s",
					}}>
					<div
						style={{
							background: "rgb(165, 0, 52)",
							color: "rgb(255, 255, 255)",
							padding: "10px",
							position: "relative",
							fontSize: "15px",
							display: "flex",
							flexDirection: "row",
							zIndex: -1,
							writingMode: "vertical-rl",
							transform: "rotateZ(180deg)",
							borderTopRightRadius: "2px",
							borderBottomRightRadius: "2px",
						}}>
						<div>
							<div style={{ transform: "rotate(90deg)", top: "0px", margin: "0px 0px 5px" }}>
								<svg width="13" height="15" viewport="0 0 13 15">
									<path
										d="M11.8182 0H1.18182C0.529118 0 0 0.610521 0 1.36364V13.6364C0 14.3895 0.529118 15 1.18182 15H11.8182C12.4709 15 13 14.3895 13 13.6364V1.36364C13 0.610521 12.4709 0 11.8182 0Z"
										fill="#ffffff"></path>
									<path d="M3.11869 4.01514H9.88131" stroke="#a50034" strokeLinecap="round" strokeLinejoin="round"></path>
									<path d="M3.11869 7.65151H9.88131" stroke="#a50034" strokeLinecap="round" strokeLinejoin="round"></path>
									<path d="M3.11869 11.2879H9.88131" stroke="#a50034" strokeLinecap="round" strokeLinejoin="round"></path>
								</svg>
							</div>
						</div>
						<div>Feedback</div>
					</div>
				</button>
			</div>
			<section className="C0076 floating-menu top" aria-label="Go to page top">
				<div className="back-to-top">
					<button
						type="button"
						onClick={() => {
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: "smooth",
							});
						}}>
						<span className="sr-only">Go to page top</span>
					</button>
				</div>
			</section>
		</>
	);
};
