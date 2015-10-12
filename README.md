# Food Truck Starter

[Heroku link][heroku] **NB:** foodtruckstarter.herokuapp.com (placeholder, will still need to host)

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Food Truck Starter is a web application inspired by KickStarter for food truck enthusiasts. It is built using Ruby on Rails and React.js and allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] CRUD for food trucks
- [ ] Filter (categories and carousel) for food trucks for viewing
- [ ] Make pledges to support food trucks


## Implementation Timeline

### Phase 1: User Authentication, Food Truck Model and JSON API (1.5 days)

I will implement user signup and authentication with BCrypt and generate basic landing page for signing up and logging in. The root URL will be setup along with JSON API for food trucks.

[Details][phase-one]

### Phase 2: Flux Architecture and Note CRUD (2.5 days)

I will set up Flux with components and router, which will be used for each of the food trucks to link to their individual pages. Next comes the food truck store and the actions needed to fulfill the CRUD functionalities. I will focus on reading first, then creating, and updating and deleting. I will use some bootstrap for styling.

[Details][phase-two]

### Phase 3: Categories and Food Trucks (2 days)

Here, I will focus on categorizing food trucks (tagging) so that they can be filtered through to the main page.

[Details][phase-three]

### Phase 4: Incorporate Pledges(Perks) (1.5 days)

Pledges sync up with the amount raised and give the user more selection on suggest amounts to donate. This will be built through another component that is a subcomponent of food truck.

[Details][phase-four]

### Phase 5: Styling Cleanup and Seeding (1.5 days)

I will use bootstrap and some jqeury to add styling and the carousel view on the homepage.

[Details][phase-five]

Bonus:
- [ ] Edit account
- [ ] View your donations
- [ ] View other users' profiles
- [ ] Tag users on food trucks
- [ ] Comment on food trucks
- [ ] Search bar for food trucks

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
