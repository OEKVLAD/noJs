export  class carouselController {


    get indexAction () {

       let data = JSON.parse(`
       
          [
            {
              "past": 9,
              "next": 2,
              "id": 1,
              "src": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
              "alt": "",
              "checked": true
            },
            {
              "past": 1,
              "next": 3,
              "id": 2,
              "src": "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg",
              "alt": "",
              "checked": false
            },
            {
              "past": 2,
              "next": 4,
              "id": 3,
              "src": "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
              "alt": "",
              "checked": false
            },
            {
              "past": 3,
              "next": 5,
              "id": 4,
              "src": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
              "alt": "",
              "checked": true
            },
            {
              "past": 4,
              "next": 6,
              "id": 5,
              "src": "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg",
              "alt": "",
              "checked": false
            },
            {
              "past": 5,
              "next": 7,
              "id": 6,
              "src": "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
              "alt": "",
              "checked": false
            },
             {
              "past": 6,
              "next": 8,
              "id": 7,
              "src": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
              "alt": "",
              "checked": true
            },
            {
              "past": 7,
              "next": 9,
              "id": 8,
              "src": "https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg",
              "alt": "",
              "checked": false
            },
            {
              "past": 8,
              "next": 1,
              "id": 9,
              "src": "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg",
              "alt": "",
              "checked": false
            }
          ]
        
       `);

        return {
            "view": "index.twig",
            "data": data
        }
    }

}