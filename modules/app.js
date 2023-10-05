import { header } from "./header-module.js";
import { spd } from "./spd.js";
import { data } from './spd-data.js'

let val = header();
let spdv = spd(data);
export function app(){
  return(`<header>
  <div class="header-inner">${val}</div>
</header>
<div class="projects-boxex">
${spdv}
</div>`)
}