


import { SomeActionHappened } from "./staticBrokerTest/SomeActionHappendHandler";
import { EventHandler } from "./ApplicationLayer/EventHandler";
import { EventBus } from "./ApplicationLayer/EventBus";
import { AggregateRoot } from "./staticBrokerTest/AggregateRoot";

//const broker = new EventBus();
//1. crear el handler y registrarlo
 const handler: EventHandler = new SomeActionHappened();
 EventBus.register(AggregateRoot.SOME_ACTION_EVENT,handler);



 //2. registrar handlers adicionales

 //3. asumir que el agregado fue obtenido del repositorio
const aggregateRoot = new AggregateRoot();
//3. una accion es acionada en el agregado
aggregateRoot.someAction();
//4. el handler es ejecutado

console.log('------------------')

//Resultado de pruebas

/* ------------------
event dispatcher not found
creating event dispatcher
registering event:  SOME_ACTION_EVENT
-------------
handler registered:  handle(event) {
        console.log(`${this.constructor.name}: Handler executed`);
    }
-----------------
AggregateRoot: Carried out the action Successfully.
event raised:   SOME_ACTION_EVENT
event dispatcher:  [object Object]
-----------------
dispatching event: SOME_ACTION_EVENT
SomeActionHappened: Handler executed
------------------ */













