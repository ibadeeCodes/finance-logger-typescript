import { HasFormatter } from '../Interfaces/HasFormatter'

export class Payment implements HasFormatter {
  constructor(
    readonly client: string,
    readonly work: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.client} is owed ${this.amount} for ${this.work}`
  }
}
