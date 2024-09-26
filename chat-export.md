BBC - TypeScript Training Course - 24-26 September 2024

Link https://github.com/doingandlearning/ts... by Kevin Cunningham
Tuesday 09:17
Kevin Cunningham

https://github.com/doingandlearning/ts-sept-2024

Url Preview for GitHub - doingandlearning/ts-sept-2024
GitHub - doingandlearning/ts-sept-2024

Contribute to doingandlearning/ts-sept-2024 development by creating an account on GitHub.

github.com

Link https://github.com/doingandlearning/ts... by Kevin Cunningham
Tuesday 09:17
Kevin Cunningham

https://github.com/doingandlearning/ts-sept-2024

Url Preview for GitHub - doingandlearning/ts-sept-2024
GitHub - doingandlearning/ts-sept-2024

Contribute to doingandlearning/ts-sept-2024 development by creating an account on GitHub.

github.com

Link Git repo by Kevin Cunningham
Tuesday 09:26
Kevin Cunningham

https://github.com/doingandlearning/ts-sept-2024

[dpc@mercury ts-sept-2024]$ node --versio... by Duncan Corps
Duncan Corps (External)
Tuesday 11:36

Plain Text

[dpc@mercury ts-sept-2024]$ node --version
v20.12.2
[dpc@mercury ts-sept-2024]$

Can we change; "target": "es2016" ... to; "... by Duncan Corps
Duncan Corps (External)
Tuesday 11:51

Can we change;

Plain Text

"target": "es2016"
... to;

Plain Text

"target": "es2020"
... to get rid of errors like this?

image

Link https://tsconfiger.netlify.app/ by Kevin Cunningham
Tuesday 11:52
Kevin Cunningham

https://tsconfiger.netlify.app/

Url Preview for Ts config helper
Ts config helper

tsconfiger.netlify.app
tsx --watch src/\*\*.ts works for me by Daniel Underwood
Daniel Underwood (External)
Tuesday 12:12

tsx --watch src/\*\*.ts works for me

I think I missed how to get tsx available... by Duncan Corps
Duncan Corps (External)
Tuesday 12:13

I think I missed how to get tsx available?

Plain Text

[dpc@mercury Duncan Corps]$ npm run beagle

> duncan-corps@1.0.0 beagle
> tsx --watch src/beagle.ts

sh: line 1: tsx: command not found
[dpc@mercury Duncan Corps]$
(Fedora Linux)

It would be okay to get the code order to r... by Ridwan Arshad
Ridwan Arshad (External)
Tuesday 12:14

It would be okay to get the code order to run when setting up a new project please

hello! I'm back Smile by Scott Kelly
Scott Kelly (External)
Tuesday 13:48

hello! I'm back 🙂

Welcome back Smile We're looking at htis ... by Kevin Cunningham
Tuesday 13:48
Kevin Cunningham

Welcome back 🙂 We're looking at htis lab https://github.com/doingandlearning/ts-sept-2024/blob/main/review1.md

GitHub

review1.md

Review Exercise 1 about 40 mins (then show-and-tell)
This is a chance to work with TypeScript/ECMAScript in a mini project.

Tackle this however you like, the point is for you to explore using the tools.

You will load up some data into a type-safe structure, then (optionally) sort the data and show slices of it.

You could manually transpile your .ts to js with tsc, or run directly with tsx.

You could make programatic choices (run in node) or ask the user in a web page (in a browser).

The JSON data is in the gist here: (copy a fragment of this data)

https://gist.github.com/doingandlearning/40ceb809aebc0c22f932b93a9644ca4e

Details
In a new folder, create a .ts file for your code (or make a copy of the init directory and use that)

Get a copy of (some of) the 'todos' array and make sure it is scoped to your code

Write an interface to match the types of a 'todo' member

Use your interface to make the 'todos' array type-safe

Create some type-safe instances which are derived from individual 'todo' members

let todo1:Todo = ...
NB you may need to make use of a tsconfig.json file

Optional
Next you will use the built-in JavaScript array 'sort' and 'filter' methods

Choose a data field to sort the entire 'todos' data set (e.g. by 'userId' or 'completed')

Decide on a strategy to show todos for one user, then just the un-completed jobs for a user

Consider how you could enforce the 'completed' state to be one of:

true, false, archived, pending, deleted

👀
1 Eyes reaction.
1

❤️
1 Heart reaction.
1
2 by Jade Nelson
Jade Nelson (External)
Tuesday 15:12

2

2 by Jayde Pearson
Jayde Pearson (External)
Tuesday 15:12

2

3 by Scott Kelly
Scott Kelly (External)
Tuesday 15:12

3

2 by Tom Chafer-Cook
Tom Chafer-Cook (External)
Tuesday 15:12

2

2 by Richard Bailey
Richard Bailey (External)
Tuesday 15:12

2

3 by Ridwan Arshad
Ridwan Arshad (External)
Tuesday 15:12

3

3 by Ryan Bytheway
Ryan Bytheway (External)
Tuesday 15:12

3

3 by Daisy Jamieson
Daisy Jamieson (External)
Tuesday 15:12

3

3 by Joanne Monaghan
Joanne Monaghan (External)
Tuesday 15:12

3

both by Ryan Bytheway
Ryan Bytheway (External)
Tuesday 15:41

both

👍
1 Like reaction.
1
Thanks Kevin by Daniel Underwood
Daniel Underwood (External)
Tuesday 16:16

Thanks Kevin

Meeting ended: at Tuesday 16:17 after 7 hours 9 minutes 49 seconds
Tuesday 16:17 Meeting ended: 7h 9m 49s
Attendance
Download the attendance report
Yesterday
Meeting started at Yesterday 09:14
Yesterday 09:14 Meeting started
Link https://miro.com/app/board/uXjVLbthlKQ... by Kevin Cunningham
Yesterday 09:31
Kevin Cunningham

https://miro.com/app/board/uXjVLbthlKQ=/

Url Preview for TS Sept '24
TS Sept '24

A post on Miro provided by: https://miro.com

miro.com
Link https://zackoverflow.dev/writing/flapp... by Kevin Cunningham
Yesterday 09:39
Kevin Cunningham

https://zackoverflow.dev/writing/flappy-bird-in-type-level-typescript/

Url Preview for Flappy Bird Implemented in Typescript types
Flappy Bird Implemented in Typescript types

The ultimate type-level trickery

zackoverflow.dev
(DG Tim is answering my question!) by Duncan Corps
Duncan Corps (External)
Yesterday 11:15

(DG Tim is answering my question!)

Begin Reference, (DG Tim is answering my qu... by Duncan Corps
Duncan Corps (External)
Yesterday 11:17
Edited

Duncan Corps
25/09/2024 11:15
(DG Tim is answering my question!)
Eh, I'll watch the recording over lunch

👍
1 Like reaction.
1
npm i -D @types/node webpack webpack-cli we... by Kevin Cunningham
Yesterday 12:22
Kevin Cunningham

npm i -D @types/node webpack webpack-cli webpack-dev-server ts-loader
html-webpack-plugin

Forgot to turn camera back on when I'd fini... by Duncan Corps
Duncan Corps (External)
Yesterday 14:36

Forgot to turn camera back on when I'd finished stuffing my face...

k by Duncan Corps
Duncan Corps (External)
Yesterday 15:05

k

"horribler" is a perfectly cromulent word by Duncan Corps
Duncan Corps (External)
Yesterday 15:06

"horribler" is a perfectly cromulent word

Exercise should be named "JawaScript Sandcr... by Duncan Corps
Duncan Corps (External)
Yesterday 15:51

Exercise should be named "JawaScript Sandcrawler"?

That would have been a much better name ...... by Kevin Cunningham
Yesterday 15:51
Kevin Cunningham

That would have been a much better name ... 🙂

Meeting ended: at Yesterday 22:36 after 13 hours 22 minutes 10 seconds
Yesterday 22:36 Meeting ended: 13h 22m 10s
Attendance
Download the attendance report
Today
Meeting started at 09:14
09:14 Meeting started
Link https://miro.com/app/board/uXjVLbthlKQ... by Kevin Cunningham
09:37
Kevin Cunningham

https://miro.com/app/board/uXjVLbthlKQ=/

Url Preview for TS Sept '24
TS Sept '24

A post on Miro provided by: https://miro.com

miro.com
im going to dorp off and rejoin. laptop spe... by Scott Kelly
Scott Kelly (External)
09:47

im going to dorp off and rejoin. laptop speakers are acting peculiar

Counterpoint: Users should type things corr... by Duncan Corps
Duncan Corps (External)
12:20

Counterpoint: Users should type things correctly in the correct format

😆
1 Laugh reaction.
1
Begin Reference, Counterpoint: Users should... by Scott Kelly
Scott Kelly (External)
12:21

Duncan Corps
26/09/2024 12:20
Counterpoint: Users should type things correctly in the correct format
very true
Bit of an open question - Is there an expec... by Richard Bailey
Richard Bailey (External)
12:52

Bit of an open question - Is there an expectation (both in the web dev community and specifically at the BBC), that libraries written in typescript should be easy to consume from vanilla javascript?

It seems that from an API point of view, leaning on the type system could simplify things, but might make use from javascript a bit more fiddly. e.g. you might be more tempted to return multiple types from a function when you have a compiler checking you discriminate at the call site. Similarly you might be more tempted to use function overloads with type checking machinery in place, vs having a bunch of similar functions with names that imply their signature where correct use depends on the user.

BRB, I think Kim's just driven up with a ca... by Duncan Corps
Duncan Corps (External)
14:07

BRB, I think Kim's just driven up with a casino

Yep, she has by Duncan Corps
Duncan Corps (External)
14:08

Yep, she has

Ah, I didn't like having enough space in th... by Duncan Corps
Duncan Corps (External)
14:09

Ah, I didn't like having enough space in the house to walk around anyway...

Link https://www.typescriptlang.org/docs/ha... by Kevin Cunningham
14:32
Kevin Cunningham

https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content

Url Preview for Documentation - Utility Types
Documentation - Utility Types

Types which are globally included in TypeScript

www.typescriptlang.org
Kevin Cunningham just fyi I will probabl... by Ridwan Arshad
Ridwan Arshad (External)
15:03

Kevin Cunningham just fyi I will probably have to leave at 3:30 today

❤️
1 Heart reaction.
1
npm i -D vitest @types/node by Kevin Cunningham
15:35
Kevin Cunningham

npm i -D vitest @types/node

Meeting ended: at 16:17 after 7 hours 2 minutes 39 seconds
16:17 Meeting ended: 7h 2m 39s
has context menu
