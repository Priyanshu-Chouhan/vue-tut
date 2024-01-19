{
let user = localStorage.getItem('user-info');
if (user) {
this.$router.push({ name: 'Home' });
}
}
