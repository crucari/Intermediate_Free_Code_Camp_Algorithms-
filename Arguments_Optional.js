function addTogether() {
  // Function to check if a number is actually a number
  // and return undefined otherwise.
  var checkNum = function(num) {
    if (typeof num !== 'number') {
      return undefined;
    } else
      return num;
  };

  // Check if we have two parameters, check if they are numbers
  // handle the case where one is not
  // returns the addition.
  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    // If only one parameter was found, returns a new function that expects two
    // Store first argument before entering the new function scope
    var c = arguments[0];

    // Check the number again, must be outside the function to about returning an object
    // instead of undefined.
    if (checkNum(c)) {
      // Return function that expect a second argument.
      return function(arg2) {
        // Check for non-numbers
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // if numbers then add them.
          return c + arg2;
        }
      };
    }
  }
}

// test here
addTogether(2,3);

__________

function addTogether() {
    var numOne = arguments[0];
    if (typeof(numOne) !== 'number') {
        return undefined;
    }
    if (arguments.length === 2) {
        if (typeof(arguments[1]) === 'number') {
            return numOne + arguments[1];
        }
        return undefined;
    }

    return function() {
        if (typeof(arguments[0]) === 'number') {
            return numOne + arguments[0];
        }
        return undefined;
    };
}

addTogether(2,3);

________


function addTogether() {
    var numOne = arguments[0];
    if (typeof(numOne) !== 'number') {
        return undefined;
    }
    if (arguments.length === 2) {
        if (typeof(arguments[1]) === 'number') {
            return numOne + arguments[1];
        }
        return undefined;
    }

    return function() {
        return typeof(arguments[0]) === 'number' ? numOne + arguments[0] : undefined;
    };
}

addTogether(2,3);

______


function addTogether() {
    var numOne = arguments[0];
    if (typeof(numOne) !== 'number') {
        return undefined;
    }
    if (arguments.length === 2) {
        return typeof(arguments[1]) === 'number' ? numOne + arguments[1] : undefined;
    }

    return function() {
        return typeof(arguments[0]) === 'number' ? numOne + arguments[0] : undefined;
    };
}

addTogether(2,3);

____


function addTogether() {
    var numOne = arguments[0];
    function addTwo(numTwo) {
        return typeof(numTwo) === 'number' ? numOne + numTwo : undefined;
    }
    if (typeof(numOne) !== 'number') {
        return undefined;
    }
    if (arguments.length === 2) {
        return addTwo(arguments[1]);
    }

    return addTwo;
}

addTogether(2,3);

____


function addTogether() {
    var numOne = arguments[0];
    function addTwo(numTwo) {
        return typeof(numTwo) === 'number' ? numOne + numTwo : undefined;
    }
    return typeof(numOne) !== 'number' ? undefined : (arguments.length === 2 ? addTwo(arguments[1]) : addTwo);
}

addTogether(2,3);

// if 2 arguments add them together
// must be numbers
// if 1 argument send function back to get the second item

// if 2 arguments add them together
// must be numbers
// if 1 argument send function back to get the second item

// if 2 arguments add them together
// must be numbers
// if 1 argument send function back to get the second item