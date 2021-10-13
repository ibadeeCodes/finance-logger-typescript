import { HasFormatter } from '../Interfaces/HasFormatter'

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    readonly work: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.client} owes ${this.amount} for ${this.work}`
  }
}
