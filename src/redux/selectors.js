export const selectLoading = (state) => state.contacts.contacts.loading;

export const selectError = (state) => state.contacts.contacts.error;

export const selectFilter = (state) => state.filters.filters.name;

export const selectContacts = (state) => state.contacts.contacts.items;
