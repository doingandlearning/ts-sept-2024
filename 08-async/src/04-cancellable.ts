async function getJson(url: string, signal: AbortSignal) {
  try {
    const response = await fetch(url, { signal });
    if (!response.ok) {
      throw new Error(
        response.status + response.statusText + "Something went wrong!"
      );
    }
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      // redirect user? friendlier message? ping on call team?
      console.log(error.message);
    }
  }
}

interface GithubAPIResponse {
  name: string;
  blog: string;
  repos_url: string;
}

async function run() {
  try {
    const { signal, abort } = new AbortController();

    const response: Promise<GithubAPIResponse> = getJson(
      "https://api.github.com/users/doingandlearning",
      signal
    );

    setTimeout(() => {
      abort();
    }, 1000);

    const data = await response;
    console.log(`${data.name} blogs at ${data.blog}`);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "AbortError") {
        console.log("Request aborted.");
      } else {
        console.log("Something else went wrong", error);
      }
    }
  }
}
run();
