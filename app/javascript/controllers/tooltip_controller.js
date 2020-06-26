import { Controller } from "stimulus"
import StimulusReflex from 'stimulus_reflex'


export default class extends Controller {

    static targets = []

    connect() {
        var something = function(){ alert();}
        $(this.element).tooltip()
        StimulusReflex.register(this)
        this.element.addEventListener("click", something )

    }

    afterReflex() {
        $(this.element).tooltip()
        this.element.addEventListener("click", something )
    }

    disconnect() {
        console.log("disconnecting")
    }
}
