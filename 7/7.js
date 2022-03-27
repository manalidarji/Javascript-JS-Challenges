// De-structuring in array and objects
const phyClassroom = {
    hasTeachingAssistant: true,
    classList: ['Rashida', 'John', 'Roman', 'Omair', 'Lukas', 'Lisa']
}

const chemClassroom = {
    hasTeachingAssistant: false,
    classList: ['April', 'Hope', 'Sydney', 'Omair', 'Lukas', 'Roman']
}

const getStudents = (classroom) => {
	const {hasTeachingAssistant, classList} = classroom;
	let students;

	if(hasTeachingAssistant){
		[, , ...students] = classList;
	}else{
		[, ...students] = classList;
	}

	return students;
}

console.log( getStudents(phyClassroom) );
console.log( getStudents(chemClassroom) );