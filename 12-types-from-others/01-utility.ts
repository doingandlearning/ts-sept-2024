const asyncNumber = async () => "hello";
const result = asyncNumber();

type valueOfResult = Awaited<typeof result>;
type valueOfPromise = Awaited<ReturnType<typeof asyncNumber>>;

console.log(typeof 1); // number

const number = 1;
type test = typeof number;

type UserNotificationSettings = "email" | "browser";
type ServiceNoticationCapabilities = "email" | "sms" | "whatsapp";

type MethodsToNotifyUser = Extract<
  UserNotificationSettings,
  ServiceNoticationCapabilities
>;

type MethodsToNotifyUser2 = Exclude<
  ServiceNoticationCapabilities,
  UserNotificationSettings
>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
  id: string;
}

type CompleteTodo = Required<Todo>;
type IncompleteTodo = Partial<Todo>;

type Regions = "SE" | "Scotland" | "Wales" | "NE" | "NI" | "SW" | "North";

interface RegionType {
  [key: string]: { weather: string; population: number };
}

type RegionRecord = Partial<
  Record<Regions, { weather: string; population: number }>
>;

interface API {
  response: Partial<Record<Regions, { weather: string; population: number }>>;
}

const person = { name: "Ryan" };

type Test = Partial<typeof person>;
const regions: RegionRecord = {
  North: { weather: "Awesome", population: 10 },
};
