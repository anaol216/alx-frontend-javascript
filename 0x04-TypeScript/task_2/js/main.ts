
export type Subjects = 'Math' | 'History';
export function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    } else {
        return '';
    }  
}

console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History