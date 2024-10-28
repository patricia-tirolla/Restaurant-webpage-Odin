import "./style.css";
import {test} from "./new.js";
console.log(test);
console.log("it's working");

const templateContent = document.getElementById("template-content");
const clone = templateContent.content.cloneNode(true);

const contentDestiny = document.getElementById("content");
contentDestiny.appendChild(clone);

