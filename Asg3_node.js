
var rs = require("readline-sync")
const chalk = require("chalk")

let log = console.log

let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let title = chalk.black.bold.bgYellow
let inverse = chalk.inverse

var score = 0;
var highscore = 15;

let que = [
  {
    no: '1',
    question: ` ____________________ is the anticipation of unauthorized access or break to computers or data by means of wireless networks`,
    A: 'Wireless access',
    B: 'Wireless security',
    C: 'Wired Securityk',
    D: 'Wired device apps',
    answer: 'B',
  },
  {
    no: '2',
    question: `Which among them has the strongest wireless security?`,
    A: 'WEP',
    B: 'WPA',
    C: 'WPA2',
    D:'WPA3',
    answer: 'D',
  },
  {
    no: '3',
    question: ` Which among the following is the least strong security encryption standard?`,
    A: 'WEP',
    B: 'WPA',
    C: 'WPA2',
    D: 'WPA3',
    answer: 'A',
  },
  {
    no: '4',
    question: `. _________ is an old IEEE 802.11 standard from the year 1999.`,
    A: 'WPA2',
    B: 'WPA3',
    C: 'WEP',
    D: 'WPA',
    answer: 'C',
  },
  {
    no: '5',
    question: `. _______________ is the central node of 802.11 wireless operations`,
    A: 'WPA',
    B: 'Access Point',
    C: 'WAP',
    D: 'Access Port',
    answer: 'B',
  }
  
];

log(cyan("Welcome to the..."), title("WhatsApp Security ...\n"))
let user = rs.question("Please Enter Your Name : ")
log(yellow(`Hello ${user}`))

log(blueBright("\nA Quiz from WhatsApp Security ..."))
log("\nThere will be Ten(10) questions.....")
log(yellow("+5"), "Point For Correct Answer.....", Blue("-2"), "Point For Wrong Answer....\n")

for (q of que) {
  log(yellow(q.no + ': ' + q.question));
  log(cyan('A: ' + q.A));
  log(cyan('B: ' + q.B));
  log(cyan('C: ' + q.C));
  log(cyan('D: ' + q.D));

  //input answer
  var ans = rs.question('Answer : ');

  //compare answer
  if (ans.toLowerCase() === q.answer.toLowerCase()) {
    log(green("\n+5"), "Your Answer Is :- ", green("correct"), ".");
    score += 5;
    log("Your Current Score Is :", green(score), "\n");
  } else {
    log(red("+2"), "Your answer Is :", red("incorrect"), ".");
    score -= 2;
    log("Your Current Score Is :", red(score), "\n");
  }
}


if (score > highscore) {
  log(green("Congratulation You Are Win"))
} else {
  log(red("You Are Not Win The Quiz!\n"))
}

log(blue("Scoreboard :"))
log('Hello' + green(user) + ' Your Final Resuly Is : ' + score)