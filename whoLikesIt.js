/* You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"

For 4 or more names, the number in and 2 others simply increases. */

/* const likes = names => {
    return names.length == 0 ? 'no one likes this' :
        names.length == 1 ? `${names[0]} likes this` :
            names.length < 4 ?
                `${names.slice(0, -1).join(', ')} and ${names.slice(-1)} like this` :
                `${names.slice(0, 2).join(', ')} and ${names.length - 2} others like this`;

};
 */

//other way
const likes = names => {
    const onePerson = `${names[0]} likes this`;
    const twoOrThreePeople = `${names.slice(0, -1).join(', ')} and ${names.slice(-1)} like this`;
    const FourOrMorePeople = `${names.slice(0, 2).join(', ')} and ${names.length - 2} others like this`;

    return names.length == 0 ? 'no one likes this' :
        names.length == 1 ? onePerson :
            names.length < 4 ? twoOrThreePeople : FourOrMorePeople;
};


//other way to solve it
/*
function likes(names) {
    names = names || [];
    switch (names.length) {
        case 0: return 'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
} */

console.log(likes);