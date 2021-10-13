export class Payment {
    constructor(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    format() {
        return `${this.client} is owed ${this.amount} for ${this.work}`;
    }
}
