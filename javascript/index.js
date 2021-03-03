const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", () => {
	const navbar__items = document.querySelector(".navbar__items");
	//Animate Links
	navbar__items.classList.toggle("open");
	
	//Hamburger Animation
	hamburger.classList.toggle("toggle");
});

const btn_primary = document.querySelector(".btn-primary");
const btn_secondary = document.querySelector(".btn-secondary");

btn_primary.addEventListener("mouseover", () => {
	btn_primary.classList.remove("btn-primary");
	btn_primary.classList.add("btn-secondary");

	btn_secondary.classList.add("btn-primary");
	btn_secondary.classList.remove("btn-secondary");

});
btn_primary.addEventListener("mouseout", () => {
	btn_primary.classList.add("btn-primary");
	btn_primary.classList.remove("btn-secondary");

	btn_secondary.classList.add("btn-secondary");
	btn_secondary.classList.remove("btn-primary");
});

btn_secondary.addEventListener("mouseover", () => {
	btn_secondary.classList.remove("btn-secondary");
	btn_secondary.classList.add("btn-primary");

	btn_primary.classList.add("btn-secondary");
	btn_primary.classList.remove("btn-primary");

});
btn_secondary.addEventListener("mouseout", () => {
	btn_secondary.classList.add("btn-secondary");
	btn_secondary.classList.remove("btn-primary");

	btn_primary.classList.add("btn-primary");
	btn_primary.classList.remove("btn-secondary");
});

	// const btn_primarys = document.querySelectorAll(".btn-primary");

    // btn_primarys.forEach(btn_primary => {
	// 		addEventListener("mouseover", () => {
	// 		btn_primary.classList.remove("btn-primary");
	// 		btn_primary.classList.add("btn-secondary");
	// 	});
	// });
 

const gotoRightPage = (currentPage, targetPageClassname) => {
	currentPage.classList.add("exitToLeft");
	currentPage.classList.remove("currentPage");

	const targetPage = document.querySelector(
		`.pagesCube__content--${targetPageClassname}`
	);
	targetPage.classList.add("enterFromRight", "currentPage");
	targetPage.classList.remove("display-none");
	setTimeout(removeUnnecessaryClassesHandler.bind(this, currentPage, targetPage), 803);
};

const gotoLeftPage = (currentPage, targetPageClassname) => {
	currentPage.classList.add("exitToRight");
	currentPage.classList.remove("currentPage");
	const targetPage = document.querySelector(
		`.pagesCube__content--${targetPageClassname}`
	);
	targetPage.classList.add("enterFromLeft", "currentPage");
	targetPage.classList.remove("display-none");
	setTimeout(removeUnnecessaryClassesHandler.bind(this, currentPage, targetPage), 803);
};

const removeUnnecessaryClassesHandler = (currentPage, targetPage) => {
	currentPage.classList.add("display-none");
	currentPage.classList.remove("exitToLeft", "exitToRight");

	targetPage.classList.remove("enterFromRight", "enterFromLeft");
};

function changePageHandler(targetPageNum) {
	const currentPage = document.querySelector(".currentPage");
	if (targetPageNum < currentPage.dataset.page) {
		gotoLeftPage(currentPage, window.location.hash.slice(1));
	} else if (targetPageNum > currentPage.dataset.page) {
		gotoRightPage(currentPage, window.location.hash.slice(1));
	}
}

const hashChangeHandler = (event) => {
	const previousActiveNavItem = document.querySelector(".navbar-item-active");
	previousActiveNavItem.classList.remove("navbar-item-active");
	const currentActiveNavItem = document.querySelector(`${window.location.hash}Nav div`);
	currentActiveNavItem.classList.add("navbar-item-active");

	let pageNum;
	switch (window.location.hash) {
		case "":
			pageNum = "1";
			window.location.hash = "about";
			break;
		case "#about":
			pageNum = "1";
			break;
		case "#projects":	
			pageNum = "2";
			break;
		case "#skills":
			pageNum = "3";
			break;
		case "#contact":
			pageNum = "4";
		default:
			break;
	}

	changePageHandler(pageNum);
	const navbar__items = document.querySelector(".navbar__items");
	//Animate Links
	navbar__items.classList.remove("open");

	//Hamburger Animation
	hamburger.classList.remove("toggle");
};

const initialLoad = () => {
	let pageId;
	if (window.location.hash) {
		pageId = window.location.hash.slice(1) + "Page";
		const currentActiveNavItem = document.querySelector(
			`${window.location.hash}Nav div`
		);
		currentActiveNavItem.classList.add("navbar-item-active");
	} else {
		pageId = "aboutPage";
		const currentActiveNavItem = document.querySelector(`#aboutNav div`);
		currentActiveNavItem.classList.add("navbar-item-active");
	}

	const pageContainer = document.getElementById(pageId);
	pageContainer.classList.remove("display-none");
	pageContainer.classList.add("currentPage");
};


initialLoad();
window.onhashchange = hashChangeHandler;



