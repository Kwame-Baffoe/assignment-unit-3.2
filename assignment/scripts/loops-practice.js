console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
            // SOLUTION
// so in this case we need to change the condition in the lop to make fit our logic as i < 6
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {
  console.log(i);



// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?

  // SOLUTION
  // we need to change the start value of i to 3 and the condition to i <
console.log('count from 3 to 5');
for (let i=3; i<6; i++) {
  console.log(i);

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
        // SOLUTION
        // we need to change the condition to i % 2 === 0 and the start value to 2
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i=2; i<11; i++) {
  if (i % 2 === 0) {
    console.log(i);

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
// SOLUTION
// we need to change the start value to 5 and the condition to i > 0
for (let i=5; i>0; i--) {
  console.log(i);



// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
// SOLUTION
// we need to use the for of loop and use the variable 'star' to get each element
for (let star of stars) {
  console.log(star);

} 

// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
// SOLUTION
// we need to use the while loop and use the variable 'i' to get the index and 
// the variable 'star' to get the element
let j = 0;
while (i < stars.length) {
  console.log(stars[j]);
  i++;
  }


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
// SOLUTION
// we need to use the while loop and use the variable 'i' to get the index and
// the variable 'i' to get the value
let p = 0;
while (i <= 5) {
  console.log(p);
  i++;
  }

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
// SOLUTION
// we need to use the while loop and use the variable 'i' to get the index and
// the variable 'i' to get the value, and change the condition to i >= 5
let i = 10;
while (i >= 5) {
  console.log(i);
  i--;
  }
  