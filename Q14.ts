// 14. Guest List: If you could invite anyone, living or decease, to dinner, who would you invite? Make a list that includes at least three people you'd like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner. 

let guestArr: string[] = ["Vivian", "Dante", "Isabella", "Kai" , "Lau"]

guestArr.map((item) => (
    console.log(`Dear ${item}, you are invited to a dinner`)
))
