export const createProject = project => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore
            .collection('projects')
            .add({
                ...project,
                authorFirstName: getState().firebase.profile.firstName,
                authorLastName: getState().firebase.profile.lastName,
                authorId: getState().firebase.auth.uid,
                createdAt: new Date()
            })
            .then(() => {
                dispatch({
                    type: 'CREATE_PROJECT',
                    project
                })
            })
            .catch(err => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', err })
            })
    }
}
