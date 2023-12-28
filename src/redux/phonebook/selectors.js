export const selectContacts = state => state.phonebookData.contacts.items;
export const selectFilter = state => state.phonebookData.filter;
export const selectLoading = state => state.phonebookData.contacts.isLoading;
export const selectError = state => state.phonebookData.contacts.error;
