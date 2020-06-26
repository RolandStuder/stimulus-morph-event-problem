import { Controller } from "stimulus"

export default class extends Controller {
    static targets = []

    connect() {
        $(this.element).tooltip()
        // this.bootstrapyTargets.forEach(function(val,index) {
        //   val.textContent = "Aw"
        // })
    }
}
