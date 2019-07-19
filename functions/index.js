const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!")
})

const createNotification = (notification => {
    return admin.firestore().collection('notification').add(notification).then(doc => console.log('noti added', doc))
})

exports.projectCreated = functions.firestore.document('projects/{project}').onCreate(doc => {
    const project = doc.data()
    const notification = {
        content: 'Added a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
})