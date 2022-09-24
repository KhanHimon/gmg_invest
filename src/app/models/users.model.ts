export class Users{
    id:number;
    name:string;
    username: string;
    email: string;
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: String,
            lng: String
        }
    };
    phone: String
}