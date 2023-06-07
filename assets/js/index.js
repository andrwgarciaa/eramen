const play = document.querySelector('#play-button');
const pause = document.querySelector('#pause-button');
const repeat = document.querySelector('#repeat-button');
const progress = document.querySelector('.progress-fill');
const breakpoint = document.querySelectorAll('.progress-breakpoint');
const news = document.querySelectorAll('.news');
let progressWidth = 0;
let interval;

const toggleHidden = (active, hidden) => {
	active.classList.add('active');
	active.classList.remove('hidden');
	hidden.classList.add('hidden');
	hidden.classList.remove('active');
};

const navigateProgress = (active, hidden) => {
	active.classList.add('active');
	active.classList.remove('hidden');
	hidden.map((i) => {
		i.classList.add('hidden');
		i.classList.remove('active');
	});
};

// progress bar
const playProgressBar = () => {
	checkProgress();
	clearInterval(interval);
	toggleHidden(pause, play);
	const frame = () => {
		if (progressWidth === 100) {
			setTimeout(() => {
				progressWidth = 0;
				toggleHidden(play, pause);
				clearInterval(interval);
				progress.style.transition = 'none';
				progress.style.width = progressWidth + '%';
				toggleHidden(news[0], news[5]);
			}, 2000);
		} else {
			progressWidth += 5;
			progress.style.transition = 'width 1s linear';
			progress.style.width = progressWidth + '%';
			checkProgress();
		}
	};
	interval = setInterval(frame, 1000);
};

const pauseProgressBar = () => {
	clearInterval(interval);
};

const repeatProgressBar = () => {
	for (let i = 0; i < news.length; i++) {
		if (i === 0) {
			news[i].classList.add('active');
			news[i].classList.remove('hidden');
		} else {
			news[i].classList.add('hidden');
			news[i].classList.remove('active');
		}
	}
	progressWidth = 0;
	progress.style.transition = 'none';
	progress.style.width = progressWidth + '%';
	clearInterval(interval);
	playProgressBar();
};

const skipProgressTo = (i, position) => {
	clearInterval(interval);
	navigateProgress(
		news[i],
		Array.from(news).filter((i) => {
			return i.classList.contains('active');
		})
	);
	console.log(i, position);
	progressWidth = position;
	progress.style.width = progressWidth + '%';
	progress.style.transition = 'none';
	checkProgress();
	playProgressBar();
};

for (let i = 0; i < breakpoint.length; i++) {
	breakpoint[i].addEventListener('click', () => {
		let position;
		if (i === 0) position = 5;
		else position = i * 25;
		skipProgressTo(i + 1, position);
	});
}

const checkProgress = () => {
	if (progressWidth === 0) {
		toggleHidden(news[0], news[5]);
	} else if (progressWidth === 5) {
		toggleHidden(news[1], news[0]);
	} else if (progressWidth === 30) {
		toggleHidden(news[2], news[1]);
	} else if (progressWidth === 55) {
		toggleHidden(news[3], news[2]);
	} else if (progressWidth === 80) {
		toggleHidden(news[4], news[3]);
	} else if (progressWidth === 100) {
		toggleHidden(news[5], news[4]);
	}
};

// progress bar buttons
play.addEventListener('click', () => {
	playProgressBar();
});

pause.addEventListener('click', () => {
	pauseProgressBar();
	toggleHidden(play, pause);
});

repeat.addEventListener('click', repeatProgressBar);

document.addEventListener('load', playProgressBar());

// check progress
