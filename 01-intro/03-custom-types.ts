type NewType = string;
interface NewInterface {}

{
  type VALID_API_VALUE = number | string | boolean;

  let result: VALID_API_VALUE = "";

  interface API_RESULT {
    results: number;
    items: VALID_API_VALUE[]; // Array<VALID_API_VALUE>
    other_items: Array<VALID_API_VALUE>;
  }

  type API_RESULT_TYPE = {
    results: number;
    items: VALID_API_VALUE[]; // Array<VALID_API_VALUE>
    other_items: Array<VALID_API_VALUE>;
  };

  type BirdType = {
    wings: 2;
  };

  interface BirdInterface {
    wings: 2;
  }

  const bird1: BirdType = { wings: 2 };
  const bird2: BirdInterface = { wings: 2 };
  const bird3: BirdType = bird2; // Structural typing
  // Duck Typing
  // If it looks a duck, sounds a duck, and walks liek a duck - it is a duck

  type Owl = BirdType & { nocturnal: true }; // intersection
  type Robin = BirdInterface & { nocturnal: false };

  interface Chicken extends BirdInterface {
    colourful: false;
    flies: false;
  }

  interface Peacock extends BirdInterface {
    colourful: true;
    flies: false;
  }

  // const chicken1: Chicken = {}
  interface Chicken {
    laysEggs: true;
  }

  let peacock: Peacock = { colourful: false };

  let chicken: Chicken = {}; // defined with interface
  let owl: Owl = { wings: 2, nocturnal: true }; // defined with a type
}
