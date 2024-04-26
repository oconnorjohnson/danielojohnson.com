## To-Do

- [ ] open with animated text in, something like: "Have you been tasked with learning about me? Well I've tried to be accomodating and prepare a few different experiences for you to choose from. Note that some options are only available on desktop.". Then fade in the options cards, with the code-editor disabled/not clickable on mobile, but nothing is "hidden" per se, just not clickable.
- [ ] make 3 experiences for the user, `code-editor`, `plain-text`, `mobile` (on mobile this is the only experience, if mobile is chosen on desktop it's presented in a wrapper that looks like an iPhone), could also consider adding additional experiences like `terminal`, `chat-bot`, `futuristic`, etc.
- [ ] on site load, have all pages closed and show cmd k commands like vs code
- [ ] integrate all cmmd k commands to open pages
- [ ] commands to open a page (cmd+p+(input file search)),

## Completed

- [x] render all pages to page view
- [x] set up Turso database
- [x] set up Drizzle ORM
- [x] create base Blogs and Projects tables
- [x] write generate and migrate node scripts
- [x] add ability to close pages
- [x] when all pages are closed, show a message to the user with the shortcuts to open a page
- [x] toggle page view state by side nav items
- [x] hold, drag, and drop tabs to reorder them
- [x] close a page(cmd+z), and close all pages(cmd+shift+z)
