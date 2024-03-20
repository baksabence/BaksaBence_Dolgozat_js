import { PARFUMOK } from "./adatok.js";
import { tablazatLetrehoz } from "./fuggvenyek.js";
import { hatterValtas } from "./fuggvenyek.js";

const tablaMegfog = document.getElementsByClassName("tartalom")[0];
tablaMegfog.innerHTML += tablazatLetrehoz(PARFUMOK);

hatterValtas();

