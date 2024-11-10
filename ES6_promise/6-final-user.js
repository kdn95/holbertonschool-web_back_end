import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName)
  // expected input is to be always resolved hence moved to then()
    .then((value) => ({
      status: 'fulfilled',
      value,
    }));

  const photo = uploadPhoto(fileName)
  // for errors print obj
    .catch((e) => ({
      status: 'rejected',
      value: e.toString(),
    }));

  return Promise.all([user, photo]);
}
