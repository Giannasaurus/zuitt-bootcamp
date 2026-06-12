let message = 'No message.'

function provideAccess(username, role) {
	if ((username === '' || username === undefined) || (role === '' || role === undefined)) {
		return 'Username or role must not be empty.'
	}
	else {
		if (role === 'Admin') {
			return 'Welcome admin, ' + username + '. You now have access to all features.'
		}
		else if (role === 'Manager') {
			return 'Welcome manager, ' + username + '. You now have limited access to account management.'
		}
		else if (role === 'Agent') {
			return 'Welcome agent, ' + username + '. You now have sufficient access to assist client.'
		}
		else {
			return 'Welcome user, ' + username + '. Enjoy our app and contact us for questions.'
		}
	}
}

message = provideAccess("Giannasaurus", "Admin")
console.log(message)
message = provideAccess("Erol", "Manager")
console.log(message)
message = provideAccess("Ashton", "Agent")
console.log(message)
message = provideAccess("Paulo", "User")
console.log(message)

function earthquakeAlert(magnitude1, magnitude2, magnitude3, magnitude4) {
	let averageIntensity = (magnitude1 + magnitude2 + magnitude3 + magnitude4) / 4

	if (averageIntensity <= 3.9) {
		return 'The magnitude level is: ' + averageIntensity + '. Light earthquake detected.'
	}
	else if (averageIntensity >= 4.0 && averageIntensity <= 5.9) {
		return 'The magnitude level is: ' + averageIntensity + '. Moderate earthquake detected. Check for damages and structure stability.'
	}
	else if (averageIntensity >= 6.0 && averageIntensity <= 6.9) {
		return 'The magnitude level is: ' + averageIntensity + '. Strong earthquake detected. Please evacuate and follow emergency procedures.'
	}
	else {
		return 'The magnitude level is: ' + averageIntensity + '. Great earthquake detected. Please be aware or falling debris and imminent danger.'
	}
}

message = earthquakeAlert(1.8, 2.1, 1.3, 1.4) // light
console.log(message)
message = earthquakeAlert(6.2, 6.1, 5.6, 5.2) // moderate
console.log(message)
message = earthquakeAlert(6.5, 7.1, 6.9, 6.7) // strong
console.log(message)
message = earthquakeAlert(9.9, 9.9, 9.9, 9.9) // great
console.log(message)