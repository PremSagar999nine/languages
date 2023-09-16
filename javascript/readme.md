<center><h1>javascript Doc</h1></center>
<hr>
<li>You can create strings with " or '
</li>
<li>.length is a property that gives you the length of a string</li>
<li>
.toUpperCase() and.toLowerCase() is a function that converts the string to upper case andlower case
</li>
<li>parentheses () on function calls are required. .length is a property that is already pre-computed; therefore, it does not need parentheses</li>
<li>Square brackets [index] are used to access a specific index from a string</li>
<li>The .at() method allows you to read a character at an index (which can also be negative)</li>
<li>string.substring(indexStart, indexEnd) is used to return a portion of the string</li>
<li>support interpolation with the  `I am learning ${language}`</li>
<li>Convert from a number to string: value.toString()</li>
<li>
The remainder operator (%) returns the division remainder between 2 numbers</li>
<li> let for variables that you will need to re-assign later on (as in changing their value)</li>
<li>const for variables that you won't need to re-assign later on</li>
<li>Variables declared with const cannot be re-assigned so you cannot have the = next to that variable name after declaring it</li>
<li>Using an if condition, you can run a piece of code when the condition evaluates to true</li>
<li>The syntax is if (condition) and then curly braces {} wrap the lines of code that correspond to this condition</li>
<li>The else keyword can be used to perform some other code based on all the other conditions not satisfied with the if.</li>
<li>Equal to (=) is an assignment operator</li>
<li>Double equals (==) is a comparison operator</li>
<li>Triple equals(===) is a strict equality comparison operator in JavaScript</li>
<li>const data = [1, 2, 3] is an array containing 3 numbers,square brackets</li>
<li>Arrays defined with const are not constants because you can change the elements inside of it. However, you cannot re-assign them to another value thus they will always be an array</li>
<li>The .filter() method returns a new array that contains some of the items from the original array, based on the condition you specify.</li>
<li>The array .map(callback) method allows you to transform an array into another one</li>
<li>An object is a data type that allows you to group several variables together into one variable that contains keys and values</li>
<li>In JavaScript, the recommended convention is camelCase for property names (for example firstName instead of first_name)</li>
<li>To read or update the value of a property, you can use the dot notation</li>
<li>A parameter is a variable in a function definition. When a function is called, the arguments are the data you pass into the method's parameters</li>
<ul>conditions for implicit return:
<li>Your function must be an arrow function.</li>
<li>The function body must be only one statement. This means you must remove the curly braces</li>
<li>You must remove the return keyword because the function body is one statement</li>
</ul>
<li>String .trim() removes all leading and trailing space characters</li>
<li>The Array .every(callback) method returns true when every item in the array satisfies the condition provided in the callback.</li>
<li>.some(callback) method returns true when at least one item in the array satisfies the condition provided in the callback.</li>
<li>The reduce() method is used to calculate a single value from an array.</li>
<li>Arrays of objects are the most common data type that you will encounter when working in web development, that's because most APIs (for example, a weather API, Twitter API, etc.) return arrays of objects.</li>
<li>A very important tip when working with arrays of objects, especially when iterating over an array of objects, is to add console.log() throughout your code to visualize the object that you receive in the callback.</li>
<li>Optional chaining allows you to access a property deep within an object without risking an error if one of the properties is null or undefined.</li>
<li>In case one of the properties is null or undefined, then the ?. will short-circuit to undefined.</li>
<li>You cannot use optional chaining on an object that may not exist. The object has to exist. Optional chaining is only used to access a property that may or may not exist.</li>
<li>Optional chaining can be used for arrays and  functions was ?.[index] and functionName?.()</li>
<li>The nullish coalescing ?? operator is a new operator introduced in JavaScript that allows you to default to a certain value when the left-hand side is a nullish value.A nullish value is a value that is either null or undefined.The nullish coalescing operator will short-circuit if the left-hand side returns a non-nullish value. This means that it will not execute the right-hand side.
You can only use nullish coalescing when the variable is defined.</li>
<li>Nullish coalescing can be used with optional chaining.The main usage here is to safely access a property that could be nullish while also being able to default to a certain value.</li>
<li>undefined vs null: undefined means that the property has not been defined yet. Whereas, null means that the property has been defined but is empty.</li>
<li>Implicit conversion happens when JavaScript expects a boolean value but is given a non-boolean value.
Implicit conversion means that JavaScript will automatically convert the value to boolean.<br>
Falsy values are converted to false. Everything else is converted to true.<br>
Most common falsy values are: false, null, undefined, 0, "", NaN.<br>
The logical NOT operator ! converts a boolean value to its opposite.</li>
<li>Arrays of objects can be reduced into a single value (most commonly a number).The main difference is that current becomes an object. So make sure to log it to the console to visualize it.The 2nd argument of the reduce is the starting value for the total parameter.The starting value for a sum is 0.The starting value for a product (multiplication) is 1.</li>
<ul>You can create a shallow copy of an array using the spread syntax ...: [...originalArray].
<li>This works by spreading the items into a new array.
<li>You can immutably add an item to an array like this: [...originalArray, newItem]
<li>You can create a copy of an object using the ... operator: {...originalObject}
<li>You can update an existing property: {...originalObject, property: 'newValue'}</ul>
<li>setTimeout(callback, milliseconds) is a JavaScript function that queues the callback into the future (depending on the milliseconds you specify).</li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
