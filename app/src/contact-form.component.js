import './contact-form.style.scss';

export default {
  template:
`
<div class="contact-form p-4">
  <h4>Add a contact</h4>
  <form name="contactForm" novalidate>
    <div class="form-group">
      <label for="fname">First name *</label>
      <input required type="text" class="form-control" name="fname" id="fname" ng-model="$ctrl.model.fname">
      <p class="invalid-feedback">Your name is required.</p>
    </div>
    <div class="form-group">
      <label for="lname">Last name *</label>
      <input required type="text" class="form-control" name="lname" id="lname" ng-model="$ctrl.model.lname">
      <p class="invalid-feedback">Your last name is required.</p>
    </div>
    <div class="form-group">
      <label for="email">Email address *</label>
      <input required type="email" class="form-control" name="email" id="email" ng-model="$ctrl.model.email">
      <p class="invalid-feedback">Please enter a valid email address.</p>
    </div>
    <div class="form-group">
      <label for="photo">Photo</label>
      <input type="file" class="form-control-file" name="photo" id="photo" ng-model="$ctrl.model.photo"">
    </div>
    <div class="form-group">
      <label for="company">Company</label>
      <input type="text" class="form-control" name="company" id="company" ng-model="$ctrl.model.company">
    </div>
    <div class="form-group">
      <label for="job">Job title</label>
      <input type="text" class="form-control" name="job" id="job" ng-model="$ctrl.model.job">
    </div>
    <div class="form-group">
      <label for="tel">Phone number</label>
      <input type="tel" class="form-control" name="tel" id="tel" ng-model="$ctrl.model.tel">
    </div>
    <div class="form-group">
      <label for="bday">Birthday</label>
      <input type="date" class="form-control" name="bday" id="bday" ng-model="$ctrl.model.bday">
    </div>
    <div class="form-group">
      <label for="addr">Address</label>
      <textarea class="form-control" name="addr" id="addr" rows="3" ng-model="$ctrl.model.addr"></textarea>
    </div>
    <div class="form-group">
      <label for="notes">Notes</label>
      <textarea class="form-control" name="notes" id="notes" rows="3" ng-model="$ctrl.model.notes"></textarea>
    </div>

    <button class="btn btn-primary" type="submit" ng-disabled="contactForm.$invalid" ng-click="$ctrl.addContact({item: $ctrl.model})">Add</button>
    <small class="text-muted validation-help">
      Please fill in all required fields.
    </small>
  </div>
</form>
`,

  bindings: {
    model: '=',
    addContact: '&'
  }
};
