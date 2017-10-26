export default {
  template:
`
<div class="row">
  <div class="col">
    <contact-form model="$ctrl.model"></contact-form>
  </div>
  <div class="col">
    <contacts-list></contacts-list>
  </div>
</div>
`,
  controller: ($scope) => {
    $scope.model = {};
  }
};
