# Free Code Camp Project
## Front End Libraries: Pomodoro Clock

![Pomodoro Clock gif]

---

## [Project Requirements](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-pomodoro-clock)

1. There is an element with `id="break-label"` that contains a string.

2. There is an element with `id="session-label"' that contains a string.

3.  There are two clickable elements with corresponding IDs: `id="break-decrement"` and `id="session-decrement"`.

4. There are two clickable elements with corresponding IDs: `id="break-increment"` and `id="session-increment"`.

5. There is an element with a corresponding `id="break-length"`, which by default (on load) displays a value of 5.

6.  There is an element with a corresponding `id="session-length"`, which by default displays a value of 25.

7. There is an element with a corresponding `id="timer-label"`, that contains a string indicating a session is initialized.

8. There is an element with corresponding `id="time-left`". NOTE: Paused or running, the value in this field should always be displayed in `mm:ss` format (i.e. 25:00).
   
9.  There is a clickable element with a corresponding `id="start_stop"`.
    
10. There is a clickable element with a corresponding `id="reset"`.
    
11. When the element with the id of `reset` is clicked, any running timer should be stopped, the value within `id="break-length"` should return to 5, the value within `id="session-length"` should return to 25, and the element with `id="time-left"` should reset to it's default state.
    
12. When the element with the id of `break-decrement` is clicked, the value within `id="break-length"` decrements by a value of 1, and the updated value is displayed.
    
13. When the element with the id of `break-increment` is clicked, the value within `id="break-length"` increments by a value of 1, and the updated value is displayed.
    
14. When the element with the id of `session-decrement` is clicked, the value within `id="session-length"` decrements by a value of 1, and the updated value is displayed.
    
15. When the element with the id of `session-increment` is clicked, the value within `id="session-length"` increments by a value of 1, and the updated value is displayed.
    
16. It should not be able to set a session or break length to <= 0.
    
17. It should not be able to set a session or break length to > 60.
    
18. When the element with `id="start_stop"` is first clicked, the timer should begin running from the value currently displayed in `id="session-length"`, even if the value has been incremented or decremented from the original value of 25.
    
19. If the timer is running, the element with the id of `time-left` should display the remaining time in `mm:ss` format (decrementing by a value of 1 and updating the display every 1000ms).
    
20. If the timer is running and the element with `id="start_stop"` is clicked, the countdown should pause.
21. If the timer is paused and the element with `id="start_stop"` is clicked, the countdown should resume running from the point at which it was paused.
    
22. When a session countdown reaches zero, and a new countdown begins, the element with the id of `timer-label` should display a string indicating a break has begun.
    
23. When a session countdown reaches zero, a new break countdown should begin, counting down from the value currently displayed in the `id="break-length"` element.
    
24. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of `timer-label` should display a string indicating a session has begun.
    
25. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the i`d="session-length"` element.
    
26. When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding `id="beep"`.
    
27. The audio element with `id="beep"` must be 1 second or longer.
    
28. The audio element with id of `beep` must stop playing and be rewound to the beginning when the element with the id of `reset` is clicked.

---


### Additional notes
In terminal:
1. Navigate to `clock`
2. ```sass``` should be installed
3. Run to reflect changes to scss:
    `sass src/css/styles.scss css/styles.css`

---