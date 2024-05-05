
# PROJECT Overview and Guidelines

## Participation Instructions
- If interested in this project, post your GitHub username in the slack thread.
- Everyone will have owner access to the organization to properly setup their projects.
- Goal is for everyone to do things on their own.  If you ask for assistance you are the driver.  The person helping you is the navigator.  The navigator should not be changing any settings or inputting text of any sort for you.

## Study Group Participation
- The "PROJECT" serves as an enriching complement to lectures and other study groups happening this week. I highly recommend that everyone attends study groups with Elizabeth or joins those organized by others.
- Avoid reusing existing code—try rewriting it yourself if you plan to engage in this project.

## Pair Programming and Assistance
- If you're willing to assist others in pair programming, please make yourself known as a resource. Teaching is an excellent way to reinforce your knowledge.
- If someone is stuck, post in `#study-pals` and ask for a pair-programming session. I’ll monitor `#study-pals` and help anyone requesting assistance.

## Project Focus: Simple DOM Timesheet
- The project's objective is to develop a simple, DOM-based website that stores labeled timers in a backend database. The timers must align with REST best practices:
  - POST request to create a timer.
  - DELETE request to remove a timer.
  - PATCH request to edit a timer.
  - GET requests to retrieve all timers.
  - GET request to retrieve a specific timer.

## Database Formats
### Timer Database Format
- `user_id`
- `timer_id`
- `timer_label`
- `timer_description`
- `timer_timestamp_start`
- `timer_timestamp_end`

### User Database Format
- `user_id`
- `user_username`
- `user_password`

## Backend Database Guidelines
- Select any database system (SQL, Mongo, Redis, etc.).
- Experiment with different libraries and tools as needed.
- Properly utilize middleware and routers.

## Frontend Guidelines
- Limit the frontend to pure DOM manipulation.
- Do not use frameworks like React or Svelte.
- Directly serve the frontend from the backend server port.

## Exercise Best Practices and Restrictions
### Project Organization
- If assisting others, ensure everyone follows the guidelines.

### Git Goals and Restrictions
- All repositories should be public.
- Create REST-DOM-TIMER-GPT-<FirstName-LastNletter> and REST-DOM-TIMER-NOGPT-<FirstName-LastNletter> repositories.
- Set up permissions for "main" and "dev":
  - **DEV Branch:** Requires one review.
  - **MAIN Branch:** Requires two reviews.
  - No direct pushes allowed to "dev" or "main."
- Fork the upstream repo into an origin repo.
- Submit pull requests from the forked origin repo to the upstream repo.

### GPT/AI Goals and Restrictions
- Create two repositories if using GPT tools:
  - `REST-DOM-TIMER-GPT-<FirstName-LastNletter>`
  - `REST-DOM-TIMER-NOGPT-<FirstName-LastNletter>`
- If using GPT, label your repo appropriately, and also attempt the exercise without AI assistance.

### Backend/REST API Practices and Restrictions
- Organize routers logically.
- Implement error-handling middleware.
- Structure files to facilitate collaboration.

### Frontend/REST API Practices and Restrictions
- Use only plain DOM manipulation.
- Serve the frontend directly from the backend server port.

---

By adhering to these guidelines, we'll ensure a cohesive, well-organized project where everyone can both contribute and learn effectively.
