export default function createEmployeesObject(departmentName, employees) {
  // Use computer property name syntax
  const companyObj = {
    // indicate obj property name as value of 'departmentName'
    // indicate the value for 'computer property name' (value of
    // 'employees')
    [departmentName]: employees,
  };

  return companyObj;
}
