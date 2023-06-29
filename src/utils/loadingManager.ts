import { LoadingManager } from "three";
import { canvas } from "./domElements";
import { main } from "../main";

export const loadingManager = new LoadingManager();

const loading = document.querySelector<HTMLDivElement>(".loading")!;

loadingManager.onLoad = function () {
    loading.classList.add("loaded");
    loading.ontransitionend = function() {
        main();
        canvas.classList.add("loaded");
        loading.style.display = "none";
    }
};

loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
	console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    loading.style.setProperty("--progress", `${100 - itemsLoaded / itemsTotal * 100}%`);
};

loadingManager.onError = function (url) {
	console.log( 'There was an error loading ' + url );
};