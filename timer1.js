let alarms = process.argv;                     //take in command line arg
const timer = function(value) {
  for (let i = 0; i < value.length; i++) {    //loop through value
    if (value[i] > 0) {                       //ensure value is a number and a positive integer
      setTimeout(() => {
        process.stdout.write('.');  
      }, value[i] * 1000);                    //value * 1 so that it outputs at the proper time 
    }
  }
};
timer(alarms);                                // call function