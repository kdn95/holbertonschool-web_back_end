export default function guardrail(mathFunction) {
  let queue = [];

  try {
    const result = mathFunction();

    queue = [
      result,
      'Guardrail was processed',
    ];
  } catch (error) {
    queue = [
      error.toString(),
      'Guardrail was processed',
    ];
  }

  return queue;
}

// Write a function named guardrail that will accept one argument mathFunction (Function).
// 
// This function should create and return an array named queue.
// 
// When the mathFunction function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message Guardrail was processed should be added to the queue.
// 
// Example:
// 
// [
//   1000,
//   'Guardrail was processed',
// ]