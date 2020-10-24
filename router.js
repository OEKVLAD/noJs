import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import {service} from "./servise/service.js";

const se = new service();

export class router {

    constructor() {
        this.data = null;
        this.viewsPath = null;
    }

    controller(paramsController, params) {
        let controller = null;
        switch (paramsController) {
            case "/":
                controller = se.homeController;
                this.viewsPath = "home/"+controller.indexAction.view;
                this.data = controller.indexAction.data;
                break;
            case "slider":
                controller = se.sliderController;
                this.viewsPath = "slider/"+controller.indexAction.view;
                this.data = controller.indexAction.data;
                break;
            case "carousel":
                controller = se.carouselController;
                this.viewsPath = "carousel/"+controller.indexAction.view;
                this.data = controller.indexAction.data;
                break;
            default:
                controller = se.errorController;
                this.viewsPath = controller.error404Action.view;
                this.data = controller.error404Action.data;
                break;
        }
    }

   get getViewsPath () {

        return this.viewsPath;
    }

    get getData () {
        let entry = require('./entery.json')

        return  Object.assign(
            {
                "entry" : entry,
                "data" :  this.data
            }
        );
    }

}
