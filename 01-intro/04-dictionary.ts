interface Preferences {
  volume: number;
  subtitles: boolean;
}

interface ChannelPreferences {
  bbc1: Preferences;
  bbc2: Preferences;
  bbcNews: Preferences;
  bbcParliament: Preferences;
  bbcSport: Preferences;
  // ...
}

type Channels = "bbc1" | "bbc2" | "bbcNews";

interface ChannelPreferencesDict {
  [channel: string]: Preferences;
}

const user1: ChannelPreferencesDict = {
  bbc1: {},
  "sky sport": { volume: 3, subtitles: false },
};

const preferenceMap = new Map<Channels, Preferences>();

preferenceMap.set("bbcNews", { volume: 2, subtitles: false });
// preferenceMap.has()
