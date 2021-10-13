export class Invoice {
    constructor(client, work, amount) {
        this.client = client;
        this.work = work;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.work}`;
    }
}
