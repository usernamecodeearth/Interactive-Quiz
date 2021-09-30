const correctAnswers = ['B', 'A', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');


form.addEventListener('submit', e => {
  e.preventDefault();//prevents default page refreshing

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
  //now have the values the user enters inside above array

  //check answers
    userAnswers.forEach((answer, index)=> {
      if(answer === correctAnswers[index]){
        score += 25;
      }
    })
    //showing results
    scrollTo(0,0);//two arguments, x and y coordinates (0,0,) is top left
    //result.querySelector('span').textContent = `${score}%`;//showing score in percentage
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
      result.querySelector('span').textContent = `${output}%`;
      if (output === score){
        clearInterval(timer);
      }else{
        output++;
      }
    },10);


});

//display score on top of page when user presses submit
//when user presses submit, score is calculated, then displayed. 


//window Object (global Object)
// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('form'));
// console.log(window.document.querySelector('form'));

//alert('hello');
//window.alert('hello');
//window presence is inferred.

//setTimeout(()=> {
//   alert('hello')
// }, 3000); //when page loads it waits 3 seconds (3000 milliseconds) to show alert

// let i = 0;
// const timer = setInterval(() => {
//   console.log('hello');
//   i++
//   if (i === 5){
//    clearInterval(timer);
//  }
// }, 1000);
//continually logs event every set amount of milliseconds 





