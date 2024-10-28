export default function createReportObject(employeesList) {
// createReportObject to return obj w/ key "allEmployees"
  const report_obj = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length
    },
  };
  //use "object.keys(report_obj) to return "allEmployees" as key
  return report_obj
}