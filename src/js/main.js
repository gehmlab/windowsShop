import { initializeGlazingSlider, initializeDecorationSlider } from "./modules/slider";
import modals from "./modules/modal";
import forms from "./modules/forms";
import tabs from "./modules/tabs";

$(document).ready(function() {
    initializeGlazingSlider();
    initializeDecorationSlider();
});
modals();
forms('form');
tabs();

