export default function(type, property) {
	switch(type) {
		case 'update':
			return `update:${property}`
			break;
		default:
			break;
	}
};