import { Event } from "./Event";

export interface EventHandler{
    handle(event: Event):any;   
}