import {sliderController} from "./slider/slider.controller.js";
import {errorController} from "./error/error.controller.js";
import {homeController} from "./home/home.controller.js";
import {carouselController} from "./carousel/carousel.controller.js";
import {accordionController} from "./accordion/accordion.controller.js";
import {featuresController} from "./features/features.controller.js";
import {contactController} from "./contact/contact.controller.js";

export class service {

    get sliderController() {
        return new sliderController();
    }

    get errorController() {
        return new errorController();
    }

    get homeController() {
        return new homeController();
    }

    get carouselController() {
        return new carouselController();
    }

    get accordionController() {
        return new accordionController();
    }

    get featuresController() {
        return new featuresController();
    }

    get contactController() {
        return new featuresController();
    }

}