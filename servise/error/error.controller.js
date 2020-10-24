export  class errorController {


    get error404Action () {
        return {
            "view": "404.twig",
            "data": null
        }
    }

}