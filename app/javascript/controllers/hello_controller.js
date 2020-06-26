import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output", "bootstrapy" ]

  connect() {
    console.log("element connect called")
    this.bootstrapyTarget.textContent = 'I am changed by a controller on the element!'
    // this.bootstrapyTargets.forEach(function(val,index) {
    //   val.textContent = "Aw"
    // })
  }

  afterReflex() {
    this.bootstrapyTarget.textContent = 'I am changed by a controller on the element!'

  }
}
