function toNumber(x) {
    return x.map((value) => Number(value));
}
let teacherA = { subject: 'math' };
let teacherB = { subject: ['science', 'english'] };
let teacherC = { subject: ['science', 'art', 'korean'] };
function giveLastSubject(obj) {
    if (typeof obj.subject === 'string') {
        return obj.subject;
    }
    else if (Array.isArray(obj.subject)) {
        return obj.subject[obj.subject.length - 1];
    }
    else {
        return 'nothing';
    }
}
