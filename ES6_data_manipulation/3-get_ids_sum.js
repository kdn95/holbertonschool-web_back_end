export default function getStudentIdsSum(x) {
  const totalNumIds = x.reduce((sum, value) => sum + value.id, 0);
  return totalNumIds;
}