<header>
	<div class="title">
		<div class="main-title">HENRIK</div>
		<div class="sub-title">SOFTWARE ENGINEER</div>
	</div>
	<div class="ref-links">
		<a href="https://www.linkedin.com/in/henrik-schwebcke/" target="_blank">
			<svg-icon>
				<svg
					width="33"
					height="34"
					viewBox="0 0 33 34"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						fill="#3BBE7F"
						d="M2.42326 0.0878906C1.0849 0.0878906 0 1.1466 0 2.4518V30.724C0 32.0296 1.0849 33.0879 2.42326 33.0879H30.3687C31.707 33.0879 32.792 32.0296 32.792 30.724V2.4518C32.792 1.1466 31.707 0.0878906 30.3687 0.0878906H2.42326ZM10.266 8.20218C10.266 9.63217 9.19095 10.7764 7.46376 10.7764H7.43148C5.76933 10.7764 4.69453 9.63217 4.69453 8.20218C4.69453 6.74001 5.80228 5.6275 7.49653 5.6275C9.19095 5.6275 10.2338 6.74001 10.266 8.20218ZM9.94025 27.7123V12.811H4.98732V27.7123H9.94025ZM12.6809 27.7123H17.6338V19.3908C17.6338 18.9454 17.6659 18.5005 17.7967 18.1821C18.1548 17.2923 18.9697 16.3707 20.338 16.3707C22.1302 16.3707 22.8472 17.7372 22.8472 19.7404V27.7123H27.7997V19.1681C27.7997 14.5911 25.3561 12.4613 22.0975 12.4613C19.4702 12.4613 18.2921 13.9053 17.6339 14.9207V14.972H17.6008C17.6117 14.9551 17.6227 14.9379 17.6339 14.9207V12.811H12.681C12.746 14.2092 12.6809 27.7123 12.6809 27.7123Z"
					/>
				</svg>
			</svg-icon>
		</a>
		<a href="https://github.com/overiit" target="_blank">
			<svg-icon>
				<svg
					width="34"
					height="33"
					viewBox="0 0 34 33"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						fill="#3BBE7F"
						d="M17 0C7.6075 0 0 7.57051 0 16.9173C0 24.4033 4.86625 30.7261 11.6237 32.9677C12.4737 33.1157 12.7925 32.6082 12.7925 32.1641C12.7925 31.7623 12.7713 30.4301 12.7713 29.0133C8.5 29.7957 7.395 27.9771 7.055 27.0255C6.86375 26.5391 6.035 25.0377 5.3125 24.6359C4.7175 24.3187 3.8675 23.5363 5.29125 23.5151C6.63 23.494 7.58625 24.7416 7.905 25.2491C9.435 27.8079 11.8788 27.0889 12.8563 26.6448C13.005 25.5452 13.4513 24.8051 13.94 24.3821C10.1575 23.9592 6.205 22.5001 6.205 16.0292C6.205 14.1894 6.86375 12.6669 7.9475 11.4826C7.7775 11.0597 7.1825 9.32569 8.1175 6.99955C8.1175 6.99955 9.54125 6.55547 12.7925 8.73358C14.1525 8.35294 15.5975 8.16262 17.0425 8.16262C18.4875 8.16262 19.9325 8.35294 21.2925 8.73358C24.5438 6.53433 25.9675 6.99955 25.9675 6.99955C26.9025 9.32569 26.3075 11.0597 26.1375 11.4826C27.2213 12.6669 27.88 14.1683 27.88 16.0292C27.88 22.5212 23.9062 23.9592 20.1238 24.3821C20.74 24.9108 21.2712 25.9258 21.2712 27.5118C21.2712 29.7745 21.25 31.5931 21.25 32.1641C21.25 32.6082 21.5688 33.1369 22.4188 32.9677C29.1338 30.7261 34 24.3821 34 16.9173C34 7.57051 26.3925 0 17 0Z"
					/>
				</svg>
			</svg-icon>
		</a>
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;

		width: 100%;
		max-width: 1200px;
		width: 100%;
		margin: 0 auto;
		flex-shrink: 0;

		.title {
			display: flex;
			flex-flow: column;
			justify-content: center;
			align-items: center;

			color: white;
			.main-title {
				font-size: 2.2rem;
				font-weight: 900;
				line-height: 2rem;
			}
			.sub-title {
				font-size: 0.8rem;
				line-height: 0.8rem;
				font-weight: 300;
			}
		}
		.ref-links {
			display: flex;
			border-radius: 5px;
			background-color: white;
			height: 34px;
			svg-icon {
				display: block;
				height: 34px;
				transform: scale(0.6);
			}
			a {
				text-decoration: underline;
				padding: 0 0.5rem;
				&:hover {
					background-color: rgba(0, 0, 0, 0.1);
					border-radius: 5px;
				}
			}
			a:first {
				margin-left: 0;
			}
			button {
				border: none;
				padding: 0.5rem 1rem;
				background-color: transparent;
				color: #3bbe7f;
				border-radius: 5px;
				cursor: pointer;
				font-weight: 600;
			}
		}
	}

	@media only screen and (max-width: 600px) {
		// break new line
		header {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.title {
				margin-bottom: 1rem;
			}
			.ref-links {
				justify-content: space-evenly;
				flex-wrap: wrap;
				height: auto;
				a {
					text-align: center;
					flex: 1;
					margin-left: 0;
				}
			}
		}
	}
</style>
