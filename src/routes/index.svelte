<script>
	import { variables } from '$lib/variables'

	var words = ['E-commerce', 'SEO Ready Websites', 'Hosting Services', 'Custom Websites']
	var randomWords = 'Custom Websites'
	var currentWord = 0

	const getRandom = function() {
		return parseInt(Math.random() * words.length)
	}

	setInterval(() => {
		var newWord = getRandom()

		while (newWord === currentWord) newWord = getRandom()
		currentWord = newWord
		randomWords = words[currentWord]
	}, 5000)
</script>

<svelte:head>
	<title>{variables.appName} | Web Development Services</title>
</svelte:head>

<main class='container'>
	<h1 class='center-text'>Get your business online with {variables.appName} Services</h1>
	<h4>Services Offered</h4>
	<h5>{randomWords}</h5>
	<br />
	<img class='img-fluid' src='img/website-hosting.gif' alt='Website Hosting Services' />
	<br />
	<a role='button' class='btn btn-primary btn-lg' href='/support'>Get a Quote</a>
	<section>
		<div class='row'>
			<div class='col-md-6 align-self-center'>
				<h2>Do you need to improve your website?</h2>
				<p>{variables.appName} can customize the website design to tailored your industry.</p>
			</div>
			<div class='col-md-6'>
				<img class='img-fluid' src='img/modern-website.gif' alt='Web Development Services' />
			</div>
		</div>
	</section>
	<section>
		<div class='row'>
			<div class='col-md-6'>
				<img
					class='img-fluid'
					src='img/hosting-services.gif'
					alt='Hosting Services and More'
				/>
			</div>
			<div class='col-md-6 align-self-center'>
				<h2>Whether you need a website, online shop or anything else.</h2>
				<p>{variables.appName} can help you get started from a simple blog to a more complex website.</p>
			</div>
		</div>
		<br />
		<a href='/quote' role='button' class='btn btn-primary btn-lg'>QET A QUOTE</a>
	</section>
	<section>
		<div class='row'>
			<div class='col-md-6'>
				<div class='card mt-4'>
					<div class='card-body'>
						<h5 class='card-title'>Standard security</h5>
						<p class='card-text'>Data is protected by HTTPS encryption.</p>
						<figure class='is-64x64 icon'>
							<svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1'>
								<g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
									<path
										d='M21.75,0 C22.9926407,0 24,1.00735931 24,2.25 L24,9.93797721 C24.0004226,16.891852
                                18.9816355,22.830527 12.125,23.98951 C12.0422535,24.0034967 11.9577465,24.0034967
                                11.875,23.98951 C5.01836448,22.830527 -0.00042263272,16.891852 0,9.938 L0,2.25
                                C0,1.00735931 1.00735931,0 2.25,0 L21.75,0 Z M22.499,6 L1.499,6 L1.5,9.93804558
                                C1.49962443,16.1176187 5.92921489,21.4011541 12,22.4887295 C18.0707851,21.4011541
                                22.5003756,16.1176187 22.5,9.93804558 L22.499,6 Z M16.7196699,9.21866991
                                C17.0125631,8.9257767 17.4874369,8.9257767 17.7803301,9.21866991 C18.0732233,9.51156313
                                18.0732233,9.98643687 17.7803301,10.2793301 L17.7803301,10.2793301
                                L12.3107076,15.7489523 C12.0295295,16.0305312 11.6479294,16.1887543 11.25,16.1887543
                                C10.8520706,16.1887543 10.4704705,16.0305312 10.1898241,15.7494843
                                L10.1898241,15.7494843 L8.46982415,14.0304843 C8.17684577,13.7376762
                                8.17670769,13.2628025 8.46951573,12.9698241 C8.76232376,12.6768458 9.23719748,12.6767077
                                9.53017585,12.9695157 L9.53017585,12.9695157 L11.2496699,14.6886699 Z M21.75,1.5
                                L2.25,1.5 C1.83578644,1.5 1.5,1.83578644 1.5,2.25 L1.499,4.5 L22.499,4.5 L22.5,2.25
                                C22.5,1.83578644 22.1642136,1.5 21.75,1.5 Z'
										fill='currentColor'
									/>
								</g>
							</svg>
						</figure>
					</div>
				</div>
			</div>
			<div class='col-md-6'>
				<div class='card mt-4'>
					<div class='card-body'>
						<h5 class='card-title'>Excellent support</h5>
						<p class='card-text'>We resolve issues usually within the same day.</p>
						<figure class='is-64x64 icon'>
							<svg
								version='1.1'
								id='Capa_1'
								xmlns='http://www.w3.org/2000/svg'
								xmlns:xlink='http://www.w3.org/1999/xlink'
								x='0px'
								y='0px'
								viewBox='0 0 295.996 295.996'
								style='enable-background:new 0 0 295.996 295.996;'
								xml:space='preserve'
							>
								<g>
									<path
										d='M147.998,0C66.392,0,0,66.392,0,147.998s66.392,147.998,147.998,147.998s147.998-66.392,147.998-147.998 S229.605,0,147.998,0z M147.998,279.996c-36.256,0-69.143-14.696-93.022-38.44c-9.536-9.482-17.631-20.41-23.934-32.42 C21.442,190.847,16,170.047,16,147.998C16,75.214,75.214,16,147.998,16c34.523,0,65.987,13.328,89.533,35.102 c12.208,11.288,22.289,24.844,29.558,39.996c8.27,17.239,12.907,36.538,12.907,56.9 C279.996,220.782,220.782,279.996,147.998,279.996z'
										fill='currentColor'
									/>
									<circle cx='99.666' cy='114.998' r='16' fill='currentColor' />
									<circle cx='198.666' cy='114.998' r='16' fill='currentColor' />
									<path
										d='M147.715,229.995c30.954,0,60.619-15.83,77.604-42.113l-13.439-8.684c-15.597,24.135-44.126,37.604-72.693,34.308 c-22.262-2.567-42.849-15.393-55.072-34.308l-13.438,8.684c14.79,22.889,39.716,38.409,66.676,41.519 C140.814,229.8,144.27,229.995,147.715,229.995z'
										fill='currentColor'
									/>
								</g>
							</svg>
						</figure>
					</div>
				</div>
			</div>
		</div>

		<div class='row'>
			<div class='col-md-6'>
				<div class='card mt-4'>
					<div class='card-body'>
						<h5 class='card-title'>Customer satisfaction guaranteed</h5>
						<p class='card-text'>Our goal is customer retention and loyalty.</p>
						<figure class='is-64x64 icon'>
							<svg width='24px' height='24px' viewBox='0 0 24 24' version='1.1'>
								<g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
									<path
										d='M20.8392398,12.0524301 C22.0372383,12.2467402 23.0688202,13.005043
                                23.611912,14.090773 C24.3382836,15.5445084 24.0533397,17.2999034 22.9153771,18.438048
                                L17.8013771,23.772048 C17.5061419,24.079984 17.0138581,24.079984 16.7186229,23.772048
                                L11.6156611,18.4493212 C10.4662948,17.2999167 10.1817416,15.5438315 10.9091645,14.09062
                                C11.4518415,13.0051437 12.4832806,12.2467515 13.6811915,12.0524154
                                C14.8791025,11.8580794 16.097399,12.2514991 16.9553301,13.1096699 L17.26,13.4143398
                                L17.5646738,13.1096661 C18.4228632,12.2514891 19.6412413,11.85812 20.8392398,12.0524301
                                Z M18.6253301,14.1703301 L17.7903301,15.0053301 C17.4974369,15.2982233
                                17.0225631,15.2982233 16.7296699,15.0053301 L15.8945958,14.170256 C15.3775199,13.6530356
                                14.6433147,13.4159416 13.9213949,13.533058 C13.199475,13.6501744 12.5778793,14.1072188
                                12.2506695,14.7617118 C11.8121888,15.6376882 11.9836745,16.6959912 12.6873771,17.399952
                                L17.260012,22.1692978 L21.8435737,17.3887662 C22.5362069,16.6958815 22.707988,15.6376251
                                22.2702357,14.7615223 C21.9429738,14.1072719 21.3211834,13.6502018 20.5990848,13.5330805
                                C19.8769861,13.4159593 19.1426036,13.6530641 18.6253301,14.1703301 Z M2.25,0.003
                                L20.25,0.003 C21.440864,0.003 22.4156449,0.928161591 22.4948092,2.09895119 L22.5,2.253
                                L22.5,9.753 C22.5,10.1672136 22.1642136,10.503 21.75,10.503 C21.3703042,10.503
                                21.056509,10.2208461 21.0068466,9.85477056 L21,9.753 L21,6.003 L1.5,6.003 L1.5,18.753
                                C1.5,19.1326958 1.78215388,19.446491 2.14822944,19.4961534 L2.25,19.503 L9.75,19.503
                                C10.1642136,19.503 10.5,19.8387864 10.5,20.253 C10.5,20.6326958 10.2178461,20.946491
                                9.85177056,20.9961534 L9.75,21.003 L2.25,21.003 C1.05913601,21.003
                                0.084355084,20.0778384 0.00519081254,18.9070488 L0,18.753 L0,2.253 C0,1.06213601
                                0.925161591,0.087355084 2.09595119,0.00819081254 L2.25,0.003 L20.25,0.003 Z M20.25,1.503
                                L2.25,1.503 C1.87030423,1.503 1.55650904,1.78515388 1.50684662,2.15122944 L1.5,2.253
                                L1.5,4.503 L21,4.503 L21,2.253 C21,1.87330423 20.7178461,1.55950904
                                20.3517706,1.50984662 L20.25,1.503 Z'
										fill='currentColor'
									/>
								</g>
							</svg>
						</figure>
					</div>
				</div>
			</div>
			<div class='col-md-6'>
				<div class='card mt-4'>
					<div class='card-body'>
						<h5 class='card-title'>Performance Ready Hosting Service</h5>
						<p class='card-text'>Maximize your website performance with our SSD.</p>
						<figure class='is-64x64 icon'>
							<svg
								id='Capa_1'
								enable-background='new 0 0 510 510'
								height='512'
								viewBox='0 0 510 510'
								width='512'
								xmlns='http://www.w3.org/2000/svg'
							>
								<g>
									<path
										d='m480 472.489v-270h-90v270h-30v-210h-90v210h-30v-150h-90v150h-30v-105h-90v105h-30v30h510v-30zm-420 0v-75h30v75zm120 0v-120h30v120zm120 0v-180h30v180zm120 0v-240h30v240z'
										fill='currentColor'
									/>
									<path
										d='m75 277.468c34.254 0 55.893-36.782 39.392-66.716l63.634-71.589c5.428 2.203 11.201 3.305 16.975 3.305 10.584 0 21.161-3.711 29.613-11.111l46.081 25.92c-2.406 13.937 1.747 28.795 12.486 39.532 8.772 8.773 20.296 13.159 31.819 13.159s23.047-4.387 31.819-13.159c13.466-13.466 16.585-33.409 9.381-49.888l58.112-54.472c6.465 3.342 13.575 5.018 20.688 5.018 11.523 0 23.047-4.387 31.819-13.159 17.546-17.545 17.546-46.094 0-63.639-17.545-17.545-46.094-17.545-63.639 0-13.466 13.466-16.585 33.409-9.381 49.888l-58.112 54.472c-16.087-8.314-36.169-6.28-50.301 6.093l-46.081-25.92c2.405-13.937-1.748-28.795-12.486-39.532-17.545-17.545-46.094-17.545-63.639 0-14.483 14.482-16.999 36.457-7.572 53.557l-63.635 71.589c-16.26-6.598-35.626-3.312-48.793 9.854-17.546 17.545-17.546 46.094 0 63.639 8.773 8.772 20.297 13.159 31.82 13.159zm349.394-235.585c2.833-2.833 6.6-4.394 10.606-4.394s7.773 1.561 10.606 4.394 4.394 6.6 4.394 10.606-1.56 7.773-4.394 10.606c-2.833 2.833-6.6 4.393-10.606 4.393s-7.773-1.56-10.606-4.393-4.394-6.6-4.394-10.606 1.56-7.773 4.394-10.606zm-120 112.5c2.833-2.833 6.6-4.394 10.606-4.394s7.773 1.561 10.606 4.394 4.394 6.6 4.394 10.606c0 4.007-1.56 7.773-4.394 10.606-2.833 2.833-6.6 4.394-10.606 4.394s-7.773-1.561-10.606-4.394-4.394-6.6-4.394-10.606c0-4.007 1.56-7.773 4.394-10.606zm-120-67.5c2.833-2.833 6.6-4.394 10.606-4.394s7.773 1.561 10.606 4.394 4.394 6.6 4.394 10.606c0 4.007-1.561 7.773-4.394 10.607-2.833 2.833-6.6 4.393-10.606 4.393s-7.773-1.56-10.606-4.393-4.394-6.6-4.394-10.607 1.561-7.773 4.394-10.606zm-120 135c2.833-2.833 6.6-4.394 10.606-4.394s7.773 1.561 10.606 4.394 4.394 6.6 4.394 10.606c0 4.007-1.561 7.773-4.394 10.606s-6.6 4.394-10.606 4.394-7.773-1.561-10.606-4.394-4.394-6.6-4.394-10.606c0-4.007 1.561-7.773 4.394-10.606z'
										fill='currentColor'
									/>
								</g>
							</svg>
						</figure>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
    .center-text {
				font-size: 40px;
    }

    .icon svg {
        width: 50px;
        height: 50px;
        color: #0b5ed7;
    }

    section {
        padding: 120px 40px;
    }

    main {
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }

    h1 {
        color: #3e3e3e;
        text-transform: uppercase;
        font-size: 4rem;
        font-weight: 100;
        line-height: 1.1;
        margin: 4rem auto;
        max-width: 14rem;
    }

    p {
        max-width: 14rem;
        margin: 2rem auto;
        line-height: 1.35;
    }

    @media (min-width: 480px) {
        h1 {
            max-width: none;
        }

        p {
            max-width: none;
        }
    }
</style>
