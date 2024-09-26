type World = "world" | "BBC" | "Sky";
type Hello = "Hello" | "Gutentag";
type Goodbye = "Goodbye" | "Au revoir";
type Greeting = Hello | Goodbye;
type Salutation = `${Greeting} ${World}`;

type domains = "sport" | "iplayer" | "news";
type allowed_urls = `https://${domains}.bbc.co.uk`;
type worse_allowed_urls = `https://bbc.co.uk/${domains}`;
