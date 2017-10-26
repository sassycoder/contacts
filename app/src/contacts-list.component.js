import './contacts-list.style.scss';

export default {
  template:
`
<div class="contacts-list p-4">
  <h4>Contacts</h4>
  <p ng-if="!contacts.length">You have no contacts.</p>
  <ul class="list-group" ng-if="contacts.length">
    <li class="contact-item list-group-item" ng-repeat="contact in contacts">
    <div class="d-block mb-2">
      <button class="btn btn-secondary" ng-hide="edit" ng-click="edit = true">Edit</button>
      <button class="btn btn-secondary" ng-hide="edit" ng-click="onDeleteContact(contact)">Remove</button>
    </div>
      <span ng-hide="edit" ng-repeat="(key, value) in contact" class="facet {{key}}">{{key}}: {{value}}</span>
      <form ng-show="edit" ng-submit="edit = false">
        <div class="form-group facet {{key}}" ng-repeat="(key, value) in contact">
          <label>{{key}}:</label>
          <input type="text" class="form-control" ng-model="contact[key]" placeholder="{{key}}">
        </div>
        <br/>
        <button class="btn btn-primary" type="submit" ng-click="onUpdateContact(contact)">Save</button>
      </form>

    </li>
  <ul>
</div>
`,
  controller: ($scope, ContactsService) => {
    $scope.contacts = [];
    ContactsService.retrieve().then((response) => {
      $scope.contacts = response.data;
    });
    $scope.onUpdateContact = (model) => {
      ContactsService.update(model);
    };
    $scope.onDeleteContact = (contact) => {
      let index = $scope.contacts.indexOf(contact);
      $scope.contacts.splice(index, 1);
      ContactsService.removeC(contact);
    };
  }
};
