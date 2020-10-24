
module.exports = class Config {
    constructor() {
        this.path = "../";
    }

    get getTemplatePath() {
        return "templates/";
    }

    get getService() {
        return "servise/";
    }

    get getPublicPath() {
        return "";
    }

    get getRealPublicPath() {
        return "static/";
    }



}
