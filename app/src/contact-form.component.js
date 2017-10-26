export default {
  template:
`
<div class="contact-form p-4">
  <h4>Add a contact</h4>
  <form name="contactForm" novalidate>
    <div class="form-group">
      <label for="fname">First name *</label>
      <input required type="text" class="form-control" name="fname" id="fname" ng-model="$ctrl.model.fname">
      <p class="validation-msg" ng-show="contactForm.fname.$invalid && !contactForm.fname.$pristine">Your name is required.</p>
    </div>
    <div class="form-group">
      <label for="lname">Last name *</label>
      <input required type="text" class="form-control" name="lname" id="lname" ng-model="$ctrl.model.lname"><br>
      <p class="validation-msg" ng-show="contactForm.lname.$invalid && !contactForm.lname.$pristine">Your name is required.</p>
    </div>
    <div class="form-group">
      <label for="email">Email address *</label>
      <input required type="email" class="form-control" name="email" id="email" ng-model="$ctrl.model.email"><br>
      <p class="validation-msg" ng-show="contactForm.email.$invalid && !contactForm.email.$pristine">Please enter a valid email address.</p>
    </div>
    <div class="form-group">
      <label for="photo">Photo</label>
      <input type="file" class="form-control-file" name="photo" id="photo" ng-model="$ctrl.model.photo""><br>
    </div>
    <div class="form-group">
      <label for="company">Company</label>
      <input type="text" class="form-control" name="company" id="company" ng-model="$ctrl.model.company"><br>
    </div>
    <div class="form-group">
      <label for="job">Job title</label>
      <input type="text" class="form-control" name="job" id="job" ng-model="$ctrl.model.job"><br>
    </div>
    <div class="form-group">
      <label for="tel">Phone number</label>
      <input type="tel" class="form-control" name="tel" id="tel" ng-model="$ctrl.model.tel"><br>
    </div>
    <div class="form-group">
      <label for="bday">Birthday</label>
      <input type="date" class="form-control" name="bday" id="bday" ng-model="$ctrl.model.bday"><br>
    </div>
    <div class="form-group">
      <label for="addr">Address</label>
      <textarea class="form-control" name="addr" id="addr" rows="3" ng-model="$ctrl.model.addr"></textarea><br>
    </div>
    <div class="form-group">
      <label for="notes">Notes</label>
      <textarea class="form-control" name="notes" id="notes" rows="3" ng-model="$ctrl.model.notes"></textarea>
    </div>

    <button class="btn btn-primary" type="submit" ng-disabled="contactForm.$invalid" ng-click="onClickedSubmit($ctrl.model)">
      Add
    </button>
  </div>
</form>
`,
  controller: ($scope, $window, ContactsService) => {
    $scope.ngModel = $scope.ngModel || {};
    $scope.onClickedSubmit = (model) => {
      console.debug(model);
      if ($scope.contactForm.$valid) {
        ContactsService.create(model);
      }
    };
  },
  bindings: {
    model: '='
  }
};
