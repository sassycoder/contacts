import './bootstrap.min.scss';

export default {
  template:
`
<div class="row">
  <div class="col">
    <contact-form model="formModel" add-contact="onClickedSubmit(item)"></contact-form>
  </div>
  <div class="col">
    <contacts-list
      contacts-data="contactsList"
      remove-contact="onDeleteContact(item)"
      update-contact="onUpdateContact(item)">
    </contacts-list>
  </div>
</div>
`,

controller: 'MainController'
};
