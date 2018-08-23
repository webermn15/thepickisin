# TPII is a quick fantasy football drafting application I wrote to facilitate in-person drafting.


### What is this?
----
Built in React, ThePickIsIn simply takes a MySQL db of football players and populates filterable lists sorted by position. When a player is selected, they are toggled to 'unavailable', and are by default removed from the position's list. You can toggle to show unavailable players and make them available again if there is an input error. Each player selection is accompanied by an audio announcement of the pick which is a big part of the reason why I was inspired to create it, because the announcement of a pick is one of the best aspects of drafting in person.

#### Feature list
----
* Tracks remaining players in distinct, easily filtered-by-name lists
* Plays super cool audio announcing the pick whenever a player is selected
* Zero setup or anything man it's chill

#### Running locally
----
You gotta have node.js! `npm start` runs this client, stay tuned for links to the api (when i build it) & mysql db migration for the players we are using

#### Plans for this
----
* Gonna setup a state manager, probably redux, and ramp up the information available for each player. There's gotta be an API out there I can get data from. 
* Will add team tracking, where you select number of teams in your league and draft type (snake, auction, w/e) and it tracks your teams' draftees. Redux or another state manager will also greatly assist with this
* Fancy animations for drafted players with like stats or highlights or something
