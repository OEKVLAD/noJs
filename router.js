import {service} from "./servise/service.js";
import fs from 'fs';
const se = new service();

export class router {

    constructor() {
        this.data = null;
        this.viewsPath = null;
        this.entryData = null;
    }

    get entry() {
        const data = fs.readFileSync('./entery.json', 'utf8')
        this.entryData = JSON.parse(data);
    }

    controller(paramsController, params) {
        let controller = null;
        this.entry;

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
            case "accordion":
                controller = se.accordionController;
                this.viewsPath = "accordion/"+controller.indexAction.view;
                this.data = controller.indexAction.data;
                break;
            case "features":
                controller = se.featuresController;
                this.viewsPath = "features/"+controller.indexAction.view;
                this.data = controller.indexAction.data;
                break;
            case "contact":
                controller = se.contactController;
                this.viewsPath = "contact/"+controller.indexAction.view;
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
        return  Object.assign(
            {
                "entry" : this.entryData,
                "data" :  this.data
            }
        );
   }
}
