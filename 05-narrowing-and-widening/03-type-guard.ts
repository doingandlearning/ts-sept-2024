const elem = document.getElementById("headline");

elem?.ATTRIBUTE_NODE; // optional chaining

if (elem) {
  elem;
} else {
  elem;
}

if (!elem) throw new Error("Element not found.");

elem;

function contains(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    return Boolean(search.exec(text));
  }
  return text.includes(search);
}
function contains2(text: string, search: string | RegExp) {
  if (typeof search === "string") {
    return text.includes(search);
  }
  return Boolean(search.exec(text));
}

interface Apple {
  isGoodForBaking: boolean;
  ripe: boolean;
}

interface Orange {
  numOfSegments: number;
  ripe: boolean;
}

function pickFruit(fruit: Apple | Orange) {
  if ("isGoodForBaking" in fruit) {
    return fruit;
  } else {
    return fruit;
  }
  fruit;
}

interface Events {
  type: "upload" | "download";
}

interface UploadEvent extends Events {
  type: "upload";
  filename: string;
  contents: string;
}

interface DownloadEvent extends Events {
  type: "download";
  filename: string;
}

type AppEvent = UploadEvent | DownloadEvent;

function isUploadEvent(e: AppEvent): e is UploadEvent {
  return "contents" in e;
}

function handleEvent(e: AppEvent) {
  if (isUploadEvent(e)) {
    e;
  } else {
    e;
  }

  switch (e.type) {
    case "download":
      e;
      break;
    case "upload":
      e;
      break;
    default:
      e;
  }
}
