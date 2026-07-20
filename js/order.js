// order.js by Jigsy (https://github.com/Jigsy1) released under the Unlicense.
//
// Creates a circular tree based on an array of names. E.g. https://postimg.cc/n9BJGGN6
//
// This is actually an earlier revision of my code since the modified version is used on my website.

// let names = ["paimon"];
// let names = ["klee", "nahida", "paimon", "columbina", "kamisato ayaka", "yoimiya", "sandrone", "ningguang", "citlali", "lisa", "lumine", "sangonomiya kokomi"];
let names = ["klee", "nahida", "paimon", "columbina", "kamisato ayaka", "yumemizuki mizuki", "sandrone", "ningguang", "citlali", "yoimiya", "lumine", "sangonomiya kokomi", "nefer"];
// let names = ["alice", "klee"];
// let names = ["yoimiya", "sangonomiya kokomi"];

if (names.length == 1) {
    console.log(names[0]);
    return;
}
let extra = names.length > 2 ? 1 : 0;
let name = "";
let string = "";
let temp = 0;
for (a = 0; a < names.length; a++) {
    name = names[a];
    switch(true) {
        case (a == 0):
            if (names[a].length > names[(a + 1) % names.length].length) {
                string = "," + (extra == 1 ? "-" : "") + "-> " + name + " --,";
                console.log(string);
                temp = (names[a].length - names[(a + 1) % names.length].length);
                break;
            }
            sum = (names[(a + 1) % names.length].length - names[a].length);
            string = "," + (extra == 1 ? "-" : "") + "-> " + name + " " + "-".repeat(sum) + "--,";
            console.log(string);
            break;
        case (a == (names.length - 1)):
            if ((a % 2) == 0) {
                string = (extra == 1 ? "|" : "") + "`-> " + name + " --,";
                console.log(string);
                if (extra == 1) {
                    console.log("%s", "`" + "-".repeat((string.length - 2)) + "'");
                }
                break;
            }
            string = "`--" + (extra == 1 ? "-" : "") + " " + name + " <" + "-".repeat(temp) + "-'";
            console.log(string);
            break;
        case ((a % 2) == 0):
            if (names[a].length > names[(a + 1) % names.length].length) {
                string = (extra == 1 ? "|" : "") + "`-> " + name + " --,";
                console.log(string);
                temp = (names[a].length - names[(a + 1) % names.length].length);
                break;
            }
            sum = (names[(a + 1) % names.length].length - names[a].length);
            string = (extra == 1 ? "|" : "") + "`-> " + name + " " + "-".repeat(sum) + "--,";
            console.log(string);
            break;
        case ((a % 2) == 1):
            if (temp > 0) {
                string = (extra == 1 ? "|" : "") + ",-- " + name + " <" + "-".repeat(temp) + "-'";
                console.log(string);
                temp = 0;
                break;
            }
            string = (extra == 1 ? "|" : "") + ",-- " + name + " <-'";
            console.log(string);
            break;
        default:
            // noop
            break;
    }
}

// EOF
