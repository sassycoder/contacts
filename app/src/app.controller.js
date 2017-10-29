export default ($scope, ContactsService) => {
  $scope.formModel = {};
  $scope.contactsList = [];

  $scope.getContacts = () => {
    ContactsService.retrieve().then((response) => {
      $scope.contactsList = response.data;
    });
  };

  $scope.onClickedSubmit = (model) => {
    ContactsService.create(model).then(() => {
      $scope.getContacts();
    });
  };

  $scope.onUpdateContact = (model) => {
    ContactsService.update(model);
  };

  $scope.onDeleteContact = (contact) => {
    ContactsService.removeContact(contact).then(() => {
      $scope.getContacts();
    });
  };

  $scope.getContacts();
};
