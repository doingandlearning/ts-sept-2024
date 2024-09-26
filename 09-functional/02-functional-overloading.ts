type CallbackFn = () => void;

/**  Call a task with it's dependencies - they should be strings */
function task(name: string, dependencies: string[]): void;
/**  Call a task with it's dependencies and a callback - it should */
function task(name: string, dependencies: string[], callback: CallbackFn): void;
/**  Call a task with it's dependencies - they should be strings */
function task(name: string, callback: CallbackFn): void;
function task(
  name: string,
  arg2: string[] | CallbackFn,
  arg3?: CallbackFn
): void {
  console.log(name);

  if (Array.isArray(arg2)) {
    console.log(...arg2);
  } else {
    arg2();
  }

  if (arg3) {
    arg3();
  }
}

task("default", ["styles", "scripts"]);
task("scripts", ["lint"], () => {});
task("styles", () => {});

task(
  "invalid-call",
  () => {},
  () => {}
); // Get TS to shout at me!

task();

document.createEvent;
