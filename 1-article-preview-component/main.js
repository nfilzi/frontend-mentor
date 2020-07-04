import { Application, Controller } from "stimulus"

class ToggleController extends Controller {
  static classes = [ "hidden" ]
  static targets = [ "togglable" ]

  toggle() {
    this.togglableTargets.forEach((toggableTarget) => {
      toggableTarget.classList.toggle(this.hiddenClass)
    })
  }
}

const application = Application.start()
application.register("toggle", ToggleController)
