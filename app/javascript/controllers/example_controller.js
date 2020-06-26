import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for ExampleReflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
    static targets = [ "output", "bootstrapy" ]
      connect() {
        console.log("wrapping connect called")
        this.bootstrapyTargets.forEach(function(val,index) {
          val.textContent = "I am changed by a wrapping controller"
        })
    }

    afterReflex(element, reflex) {
        this.bootstrapyTargets.forEach(function(val,index) {
            val.textContent = "I am changed by a wrapping controller"
        })

    }

}
