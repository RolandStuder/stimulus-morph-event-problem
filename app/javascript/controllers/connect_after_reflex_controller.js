import ApplicationController from './application_controller'
import StimulusReflex from 'stimulus_reflex'


/* This is the custom StimulusReflex controller for ExampleReflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
    static targets = [ "button", "comment"]
    connect() {
        StimulusReflex.register(this)
    }

    afterReflex(element, reflex) {
        console.log("reflexing")
        this.commentTarget.textContent = "Reflex is triggered, I could reattach stuff here maybe?"
        var replaceElement = $(this.element).clone(true).off().html()
        this.element.outerHTML = replaceElement

    }

}
