/*{
--> Refactor code below to DRY it up.
--> Will need to loop through each character (make array & for loop).
--> Set a delay and increase the delay on setInterval by +200 each iteration.
--> Make sure it's rewriting the line each time.
--> Add newline at the end of the process.
}*/

const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let delay = 0;

for (const char of characters) {
  setTimeout(() => {
    process.stdout.write('\r' + char)
  }, delay);
  delay += 200;
};

setTimeout(() => {
  console.log('')
}, delay);



// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/  ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\  ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|  ');
// }, 1700);


// setTimeout(() => {
//   console.log('');
// }, 1701);