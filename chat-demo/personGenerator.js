var generatePerson = function (online) {

	var name = "";
	while (!name) {
		name = prompt("Please enter your name");
	};

	var myChatUser = JSON.parse(localStorage.getItem("myChatUser"));
	if (myChatUser) {
		return myChatUser;
	}

	var person = {};


	var avatars = [
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg',
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg',
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg',
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg',
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg',
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg',
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg',
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_08.jpg',
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_09.jpg',
		'https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg'
	];

	person.first = name;
	person.last = name;
	person.full = name;
	person.uuid = name;

	person.avatar = avatars[Math.floor(Math.random() * avatars.length)];

	person.online = online || false;

	person.lastSeen = Math.floor(Math.random() * 60);


	localStorage.setItem('myChatUser', JSON.stringify(person));
	return person;

}