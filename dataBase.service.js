import Mysql from "sync-mysql";


export class dataBaseService {
    constructor() {
        this.host='mysql3.webio.pl';
        this.user= '20534_vladyslavo';
        this.password='BjB4Es43X4v*p+';
        this.database='20534_vladysalvomelchenko';

        this.connection=null;
    }

    __openConnection() {
        let connection = new Mysql({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });

        this.connection = connection;
    }


    __endConnection() {
        this.connection = null;
    }

    query(queryLine) {
        this.__openConnection();

        let data = this.connection.query(queryLine);

        this.__endConnection();

        return data;
    }

}
