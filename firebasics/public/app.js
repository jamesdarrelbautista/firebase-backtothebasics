const auth = firebase.auth();



// console.log(firebase);
document.addEventListener("DOMContentLoaded", () => {
    const whenSignedIn = document.getElementById('whenSignedIn');
    const whenSignedOut = document.getElementById('whenSignedOut');

    const signInBtn = document.getElementById('signInBtn');
    const signOutBtn = document.getElementById('signOutBtn');
    const userDetails = document.getElementById('userDetails');

    const provider = new firebase.auth.GoogleAuthProvider();

    signInBtn.onclick = () => auth.signInWithPopup(provider);

    signOutBtn.onclick = () => auth.signOut();

    auth.onAuthStateChanged(user => {

        if (user) {
            whenSignedIn.hidden = false;
            whenSignedOut.hidden = true;
            userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>UserID: ${user.uid}</p>`;
        } else {
            whenSignedIn.hidden = true;
            whenSignedOut.hidden = false;
            userDetails.innerHTML = '';
        }
    });
});



