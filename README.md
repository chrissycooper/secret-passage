## Secret Passage
### Abstract:
Secret Passage is a poetry browsing application that involves a sort of ISpy-like navigation through pages that are styled conditionally. The styling comes from a list of the 25 most commonly found words in about 3,000 poems from Poetry magazine (you can find a link to the source in the Shout Outs below). This was a really fun project for me to build. The chance operations allow for some really cool juxtaposition between the poetry itself and the imagery paired with it.

### Preview
![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTBhNTg1YWNjZDQ2OTdjNTE3ZGY4ZDhmM2YzZTkzYTdiZDUzZDU1NyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/E3giXddIqO8OBXSKgE/giphy.gif)
![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTNhMTFlYmUwZTk3MmZhY2VkNjc2OWQ0ODFlNTJkYjFmZDAxZjEwOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/5vLBUwuHAKqZn9p8PH/giphy.gif)

### Contributors
[C. R. Cooper](https://github.com/chrissycooper)

### Learning Goals
This was the [showcase project](https://frontend.turing.edu/projects/module-3/showcase.html) for Module Three of the Front End Engineering program at Turing School of Software and Design. The goal was to demonstrate skills in React, Router, Asynchronous Javascript, and end to end testing with Cypress. 

### Wins
There was a very short timeline for this project, about five days for planning and execution. I am really proud of what I was able to accomplish within this timeline.
I am very pleased with the passkey's random position, it was an interesting problem to solve within React. I had originally worked it out in [this codepen](https://codepen.io/thecrimb/pen/eYPdRPb), but it wasn't exactly a plug-and-play to get it to work in the application. 

### Challenges
I structured my application with a set of nested components, and I struggled with handling bad url errors. The Poems component contains an array of Poem components, each which is wrapped in a Route. I wasn't able to get the Reroute to include bad urls like this: `/poems/banana`. 

### Shout Outs
I utilized this [list of most commonly used poetry words](https://www.robertpeake.com/archives/6676-top-poetry-words.html) from Robert Peake to create my styling schema.

Thanks to @thundercomb who created [this API](https://github.com/thundercomb/poetrydb) which made this project possible.
