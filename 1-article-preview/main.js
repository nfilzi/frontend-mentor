import { Application, Controller } from "stimulus"

class ToggleController extends Controller {
  static classes = [ "hidden", 'active' ]
  static targets = [ "togglable" ]

  toggle(e) {
    // this.togglableTargets.forEach((toggableTarget) => {
      this.togglableTarget.classList.toggle(this.hiddenClass)
      console.log(e.currentTarget)
      e.currentTarget.classList.toggle(this.activeClass)
    // })
  }
}

const application = Application.start()
application.register("toggle", ToggleController)
