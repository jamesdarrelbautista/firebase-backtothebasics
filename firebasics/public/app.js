const db = firebase.firestore();

const createThing = document.getElementById('createThing');

const thingsList = document.getElementById('thingsList');

let thingsRef;
let unsubscribe;

auth.onAuthStateChanged(user => {

    if (user) {
        thingsRef = db.collection('things');

        const {serverTimestamp} = firebase.firestore.FieldValue;

        createThing.onclick = () => {
            thingsRef.add({
                uid: user.uid,
                name: faker.commerce.productName(),
                createdAt: serverTimestamp()

            });
        }

    }
}

)