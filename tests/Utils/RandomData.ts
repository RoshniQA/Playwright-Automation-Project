export class RandomData {

    static randomeName(): string {
        return 'User' + Math.floor(Math.random() * 100000);
    }

    static randomEmails(): string {
        
        return 'user' + Math.floor(Math.random() * 1000000) + '@gmail.com';
    }

}