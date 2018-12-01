// var database = firebase.database();
//
// function writeUserData(userId, name, email) {
//   database.ref('users/' + userId).set({
//     username: name,
//     email: email,
//   });
// }
//
// function getAllUsers(){
//   database.ref('users').once('value', (snapshot) => {
//     console.log(snapshot);
//     console.log(snapshot.val());
//     snapshot.forEach(child => {
//       console.log(child.val());
//     });
//   })
// }
//
// function updateUser(userId, updateObject){
//   database.ref(`users/${userId}`).update(updateObject)
// }
//
// function removeItem(path){
//   database.ref(path).remove()
// }
//
// function newPushedItem(dataObject){
//   database.ref('users').push(dataObject).then(res => console.log(res))
// }
//
// newPushedItem({
//   name: "Jordan2",
//   hobbies: [
//     "Music",
//     "video games",
//     "alcohol"]
// });
//
// getAllUsers();



//
//
//
//
//
//
//
// "https://api-gate2.movieglu.com/filmsNowShowing/?n=1"
// -H "api-version: v200"
// -H "Authorization: Basic Sk9SRDprdXhOOXJmWEdwNUQ="
// -H "x-api-key: CWx6W265q1a00iiBCqmO75r8593efXTG3xdPclci"
// -H "device-datetime: 2018-11-11T11:11:11.000Z"
// -H "territory: US"
// -H "client: JORD"


$.ajax({
  type: "GET",
  headers: {
    "Username": "JORD",
    "api-version": "v200",
    "x-api-key": "CWx6W265q1a00iiBCqmO75r8593efXTG3xdPclci",
    "Territory": "US",
    "Authorization": "Basic Sk9SRDprdXhOOXJmWEdwNUQ=",
    "device-datetime": "2018-11-11T11:11:11.000Z",
    "Access-Control-Allow-Origin": "*",
  },
  url: "https://api-gate2.movieglu.com/filmsNowShowing/?n=1" ,
}).then(result => {
  console.log(result)
});