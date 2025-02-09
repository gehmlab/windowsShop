import { initializeGlazingSlider, initializeDecorationSlider } from "./modules/slider";
import modals from "./modules/modal";
import forms from "./modules/forms";
import tabs from "./modules/tabs";
import calc from "./modules/calc";
import tabsDecoration from "./modules/tabsDecoration"
import initImagePopup from "./modules/initImagePopup";
import initCountdownTimer from "./modules/initCountdownTimer";

$(document).ready(function() {
    initializeGlazingSlider();
    initializeDecorationSlider();
});
modals();
forms('form');
tabs();
calc();
tabsDecoration();
initImagePopup();
initCountdownTimer();
