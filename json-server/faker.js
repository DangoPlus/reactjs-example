//fakerjs
var faker = require('faker');
faker.locale = "zh_CN";

function generateFaker () {
  var customers = [];

  for (var id = 0; id < 100; id++) {
    var firstName = faker.name.firstName();
	var lastName = faker.name.lastName();
	var personName = firstName.concat(lastName);
    var phoneNumber = faker.phone.phoneNumberFormat();

    customers.push({
      "id": id,
      "name": personName,
      "phone": phoneNumber
    })
  }

  return { "customers": customers };
}

// 如果你要用json-server的话，就需要export这个生成fake data的function
module.exports = generateFaker