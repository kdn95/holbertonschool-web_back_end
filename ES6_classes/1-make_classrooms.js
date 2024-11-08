import ClassRoom from './0-classroom';

function initializeRooms() {
  // create and return array "[]"
  return [
    // create new instances in each
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
// export init...Rooms allowing
// other files to import and use same funct.
export default initializeRooms;
