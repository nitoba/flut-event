/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
/* eslint-disable  */
import { IDomainEvent } from './domain-event.interface';

export default interface IHandle<IDomainEvent> {
     setupSubscriptions(): void;
}
