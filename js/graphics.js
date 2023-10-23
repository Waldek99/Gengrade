"use strict";

async function LoadJson() {

    const requestURL = "./data/media.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const data00 = await response.json();

    ThisIsTheWay(data00.graphics);
}


function ThisIsTheWay(graphics) {

 	function base00(graphics, toggle) {

 		let layout00 = document.getElementById("content-all");

        const name_array = [
            ["sl-title", "sl-content", "sl-example", "sl-source"],
            ["buttonRight", "title-pro", "buttonLeft"], 
            ["img/arrowUp_icon.svg", "img/arrowDown_icon.svg"],
            ["nav-menu", "nav-slides"]
        ];

        if (toggle == 0) {

            let layout0A = document.getElementById("selectPro00");
            for (let f = 0, k = graphics.length; f < k; f++) {
                layout0A.appendChild(document.createElement("img")).classList.add("img-min00");
                layout0A.children[f].setAttribute("src", graphics[f].image_source[0].image_thumb[0]);
                layout0A.children[f].setAttribute("alt", graphics[f].image_source[0].image_thumb[0].substring(graphics[f].image_source[0].image_thumb[0].lastIndexOf('/')+1));
                layout0A.children[f].id = graphics[f].id;
            }
            for (let a = 0, b = 3; a <= b; a++) {

                if (layout00.children.length == 1) {
                    layout00.appendChild(document.createElement("div"));
                    layout00.children[1].id = "base-slides";
                }
                if (layout00.children[1].children.length < 3) {
                    layout00.children[1].appendChild(document.createElement("div")).classList.add("slides");
                    layout00.children[1].children[a].id = "slide0" + a;
                    for (let q = 0, v = 3; q <= v; q++) {
                        layout00.children[1].children[a].appendChild(document.createElement("div")).classList.add(name_array[0][q] + "s");
                        layout00.children[1].children[a].children[q].id = name_array[0][q] + a + q;
                    }
                }
            }
        }

        let layout02 = document.getElementsByClassName("sl-titles");
        if (toggle == 0) {

            let array_element = graphics.pop();
            graphics.unshift(array_element);
        }
        for (let s = 0; s < layout02.length; s++) {
            if (toggle == 1) {

                while (layout02[s].hasChildNodes()) {
                    layout02[s].firstChild.remove();
                }
            }
            for (let z = 0, c = 2; z <= c; z++) {
                if (z == 1 ) {

                    layout02[s].appendChild(document.createElement("div")).classList.add("nav-title");
                    layout02[s].children[z].id = name_array[1][z] + "0" + s;
                    if (toggle == 1) {
                        layout02[s].children[z].innerHTML = graphics[s].title;
                    }
                    else {
                        layout02[s].children[z].innerHTML = graphics[s].title;
                    }
                }
                else {

                    layout02[s].appendChild(document.createElement("div")).classList.add("button-nav");
                    layout02[s].children[z].id = name_array[1][z] + "0" + s;

                    layout02[s].children[z].appendChild(document.createElement("img")).classList.add("button-nav-icon");
                    layout02[s].children[z].firstElementChild.setAttribute("src", name_array[2][z / 2]);
                    layout02[s].children[z].firstElementChild.setAttribute("alt", name_array[2][z / 2].slice(4,-4));
                }
            }
        }
        let layout03 = document.getElementsByClassName("sl-contents");
        for (let w = 0; w < layout03.length; w++) {

            if (toggle == 1) {
                while (layout03[w].hasChildNodes()) {
                    layout03[w].firstChild.remove();
                }
            }
            layout03[w].appendChild(document.createElement("img")).classList.add("content-img");
            layout03[w].children[0].id = "content-img0" + w;
            layout03[w].children[0].setAttribute("src", graphics[w].image_source[0].image_big[0]);

            layout03[w].children[0].setAttribute("alt", graphics[w].image_source[0].image_big[0].substring(graphics[w].image_source[0].image_big[0].lastIndexOf('/')+1));
            layout03[w].children[0].addEventListener("load", () => {
                document.getElementById("base-slides").style.height = document.getElementById("slide01").clientHeight + "px";
            });
        }
        let layout04 = document.getElementsByClassName("sl-examples"),
        slides00 = document.querySelectorAll(".slides");
        for (let b = 0; b < slides00.length; b++) {

            if (toggle == 1) {
                while (layout04[b].hasChildNodes()) {
                    layout04[b].firstChild.remove();
                }
            }
            layout04[b].appendChild(document.createElement("div")).classList.add("nav00");
            layout04[b].children[0].id = name_array[3][0] + [b] + "0";
            layout04[b].children[0].innerHTML = "Przykłady zastosowania";

            layout04[b].appendChild(document.createElement("div")).classList.add("nav01");
            layout04[b].children[1].id = name_array[3][1] + [b] + "0";
            layout04[b].children[1].appendChild(document.createElement("div")).classList.add("nav11", "examples00");
            for (let x = 0, z = graphics[b].image_exam[0].image_thumb.length; x < z; x++) {

                layout04[b].children[1].children[0].appendChild(document.createElement("img")).classList.add("img-min00");
                layout04[b].children[1].children[0].children[x].setAttribute("src", graphics[b].image_exam[0].image_thumb[x]);
                layout04[b].children[1].children[0].children[x].setAttribute("alt", graphics[b].image_exam[0].image_thumb[x].substring(graphics[b].image_exam[0].image_thumb[x].lastIndexOf('/')+1));
            }
        }
        let layout05 = document.getElementsByClassName("sl-sources");
        for (let b = 0; b < slides00.length; b++) {

            if (toggle == 1) {
                while (layout05[b].hasChildNodes()) {
                    layout05[b].firstChild.remove();
                }
            }
            layout05[b].appendChild(document.createElement("div")).classList.add("nav00");
            layout05[b].children[0].id = name_array[3][0] + [b] + "1";
            layout05[b].children[0].innerHTML = "Pliki źródłowe";

            layout05[b].appendChild(document.createElement("div")).classList.add("nav01");
            layout05[b].children[1].id = name_array[3][1] + [b] + "1";
            layout05[b].children[1].appendChild(document.createElement("div")).classList.add("nav11", "sources00");
            for (let x = 0, z = graphics[b].image_source[0].image_thumb.length; x < z; x++) {

                layout05[b].children[1].children[0].appendChild(document.createElement("img")).classList.add("img-min00");
                layout05[b].children[1].children[0].children[x].setAttribute("src", graphics[b].image_source[0].image_thumb[x]);
                layout05[b].children[1].children[0].children[x].setAttribute("alt", graphics[b].image_source[0].image_thumb[x].substring(graphics[b].image_source[0].image_thumb[x].lastIndexOf('/')+1));
            }
        }

        if (document.getElementsByClassName("examples00")[1].firstElementChild != null) {
            if (document.getElementsByClassName("examples00")[1].firstElementChild.src == document.getElementsByClassName("sources00")[1].firstElementChild.src) {
                document.getElementsByClassName("sources00")[1].firstElementChild.style.display = "none";
            }
        }

        ani00(graphics);
        selectExamSourc00(graphics);
        fullScr00();

 	}
    function ani00(graphics) {

        let buttons00 = document.getElementsByClassName("button-nav"),
        slides00 = document.querySelectorAll(".slides");
        for (let m = 0; m < buttons00.length; m++) {

            buttons00[m].addEventListener("click", () => {
                if (buttons00[m].id == "buttonLeft0" + (m-2)) {

                    let slideHight = document.getElementById("slide02").clientHeight + "px";
                    slides00.forEach((element) => {

                        element.classList.add("slides-left");
                        element.addEventListener('animationend', (event) => {

                            element.classList.remove("slides-left");
                            document.getElementById("base-slides").style.height = slideHight;
                        }, {once: true});
                    });
                    slides00[2].addEventListener("animationend", (event) => {

                        let array_element = graphics.shift();
                        graphics.push(array_element);
                        base00(graphics, 1);
                    }, {once: true});

                }
                if (buttons00[m].id == "buttonRight0" + (m-1)) {

                    let slideHight = document.getElementById("slide00").clientHeight + "px";
                    slides00.forEach((element) => {

                        element.classList.add("slides-right");
                        element.addEventListener('animationend', (event) => {

                            element.classList.remove("slides-right");
                            document.getElementById("base-slides").style.height = slideHight;
                        }, {once: true});
                    });
                    slides00[2].addEventListener("animationend", (event) => {

                        let array_element = graphics.pop();
                        graphics.unshift(array_element);
                        base00(graphics, 1);
                    }, {once: true});
                }
            });
        }
    }
    function selectPro00(graphics) {

        let divPro00 = document.querySelectorAll("#selectPro00");
        divPro00.forEach((element) => {

            for (let project of element.children) {
                project.addEventListener("click", (event) => {

                    let index = graphics.findIndex(object => {
                        return object.id === event.target.id;
                    });
                    for (let a = 1; a < index; a++) {
                        let array_element = graphics.shift();
                        graphics.push(array_element);
                    }
                    if (index === 0) {
                        let array_element = graphics.pop();
                        graphics.unshift(array_element);
                    }
                    base00(graphics, 1);
                });
            }
        });
    }
    function selectExamSourc00(graphics) {

        let divExam00 = document.querySelectorAll(".examples00,.sources00"),
        typeFile = [
            ["svg", "png", "jpg"],
            ["mp4"],
            ["https"]
        ]

        function firstCondition(imageSrc, imageAlt) {

            let newContent = document.createElement("img");
            newContent.className = "content-img";
            newContent.id = "content-img01";
            newContent.src = imageSrc;
            newContent.alt = imageAlt;

            document.getElementById("slide01").children[1].children[0].replaceWith(newContent);
            document.getElementById("slide01").children[1].children[0].addEventListener("load", () => {
                document.getElementById("base-slides").style.height = document.getElementById("slide01").clientHeight + "px";
            });
            fullScr00();
        }

        function secondCondition(videoSrc) {

            let newContent = document.createElement("video");
            newContent.className = "content-img";
            newContent.id = "content-img01";
            newContent.src = videoSrc;
            newContent.controls = true;
            newContent.innerHTML = "Wystąpił problem, brak filmu";
            newContent.load();
            newContent.style.backgroundColor = "black";

            document.getElementById("slide01").children[1].children[0].replaceWith(newContent);
            document.getElementById("slide01").children[1].children[0].addEventListener("loadeddata", () => {
                document.getElementById("base-slides").style.height = document.getElementById("slide01").clientHeight + "px";
            });
        }

        function thirdCondition(iframeSrc, iframeTitle) {

            let newContent = document.createElement("iframe");
            newContent.className = "content-iframe";
            newContent.id = "content-svgrame";
            newContent.src = iframeSrc;
            newContent.innerHTML = "Wystąpił problem, brak filmu";
            newContent.title = iframeTitle;
            newContent.allow = "fullscreen";

            document.getElementById("slide01").children[1].children[0].replaceWith(newContent);
            document.getElementById("slide01").children[1].children[0].addEventListener("load", () => {
                document.getElementById("base-slides").style.height = document.getElementById("slide01").clientHeight + "px";
            });
        }

        divExam00.forEach((element) => {

            for (let example of element.children) {
                example.addEventListener("click", (event) => {
                    for (let a = 0, q = event.target.parentNode.children.length; a <= q; a++) {

                        if (event.target == event.target.parentNode.children[a] && event.target.parentNode.classList.contains("examples00")) {
                            if (typeFile[0].some(item => graphics[1].image_exam[0].image_big[a].includes(item))) {

                                firstCondition(
                                    graphics[1].image_exam[0].image_big[a],
                                    graphics[1].image_exam[0].image_big[a].substring(graphics[1].image_exam[0].image_big[a].lastIndexOf('/')+1)
                                )
                            }
                            if (typeFile[1].some(item => graphics[1].image_exam[0].image_big[a].includes(item))) {

                                secondCondition(graphics[1].image_exam[0].image_big[a])
                            }
                            if (typeFile[2].some(item => graphics[1].image_exam[0].image_big[a].includes(item))) {

                                thirdCondition(
                                    graphics[1].image_exam[0].image_big[a],
                                    graphics[1].image_exam[0].image_big[a].substring(graphics[1].image_exam[0].image_big[a].lastIndexOf('/')+1)
                                )
                            }
                        }
                        if (event.target == event.target.parentNode.children[a] && event.target.parentNode.classList.contains("sources00")) {
                            if (typeFile[0].some(item => graphics[1].image_source[0].image_big[a].includes(item))) {

                                firstCondition(
                                    graphics[1].image_source[0].image_big[a],
                                    graphics[1].image_source[0].image_big[a].substring(graphics[1].image_source[0].image_big[a].lastIndexOf('/')+1)
                                )
                            }
                            if (typeFile[1].some(item => graphics[1].image_source[0].image_big[a].includes(item))) {

                                secondCondition(graphics[1].image_source[0].image_big[a])
                            }
                            if (typeFile[2].some(item => graphics[1].image_source[0].image_big[a].includes(item))) {

                                thirdCondition(
                                    graphics[1].image_source[0].image_big[a],
                                    graphics[1].image_source[0].image_big[a].substring(graphics[1].image_source[0].image_big[a].lastIndexOf('/')+1)
                                )
                            }
                        }
                    }
                });
            }
        });
    }
    function fullScr00() {

        document.getElementById("content-img01").addEventListener("click", (event) => {
            if (event.target.requestFullscreen) {
                event.target.requestFullscreen();
            }
        });
        document.getElementById("content-img01").addEventListener("dblclick", (event) => {
            if (document.fullscreenElement) {
                document.exitFullscreen(); 
            }
        });
    }
 	base00(graphics, 0);
    selectPro00(graphics);



}

LoadJson();

//document.addEventListener("DOMContentLoaded", ThisIsTheWay);