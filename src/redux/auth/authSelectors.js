const selectUser = state => state.auth.user;
const selectUserName = state => state.auth.user.name;
const selectIsLoggedIn = state => state.auth.isLoggedIn;

export { selectUser, selectUserName, selectIsLoggedIn };