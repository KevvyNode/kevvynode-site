import { generateBuildId } from "../next.config";
document.getElementById("current-commit").innerHTML = generateBuildId();