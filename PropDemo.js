import { LightningElement, track, api } from 'lwc';

export default class PropDemo extends LightningElement {
    @track message = 'Reactive Property';

    @api message1 = 'Reactive Property using @api decorators';

    handleChange(event){
        this.message1 = event.target.value;
        console.log(' Updated Message is ', this.message1);
    }
}
