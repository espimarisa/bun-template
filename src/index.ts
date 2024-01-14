// Tests relative imports in a nasty way
import { readIfCuteAgain } from "$src/importTest.js";

// Read if cute
function readIfCute(cute = true) {
  if (cute) {
    console.log("Read if cute");
  } else {
    console.log("Read if cute");
  }

  console.log("Read if double cute");
}

readIfCute();
readIfCuteAgain();
