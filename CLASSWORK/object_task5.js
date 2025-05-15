const company  = {
    name: "TechCorp",
    location: "San Francisco",
    employee: []
}

company.employee[0] = {id: 2222, name: "suliha", department: "HR"};
company.employee[1] = {id: 3333, name: "olamide", department: "Engineering"};
company.employee[2] = {id: 1111, name: "mhojy", department: "Marketing"};
company.employee[3] = {id: 4444, name: "wale", department: "EAccountant"}



console.log(company.employee[1].name);

const {name, location} = company
console.log(`Name of company: ${name} \nLocation: ${location}`);


for(let employee of company.employee){
    console.log(`\n${employee.name}:  ${employee.department}`)
}
