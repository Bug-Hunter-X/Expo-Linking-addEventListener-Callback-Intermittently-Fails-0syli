# Expo Linking.addEventListener Intermittent Failure

This repository demonstrates a bug in Expo's `Linking` API where the `addEventListener` callback for deep links fails to fire consistently. This issue is intermittent and difficult to reproduce reliably. The problem is likely related to how Expo manages background processes and interacts with the OS's deep link handling.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run the app on a physical device or emulator.
4. Attempt to open a deep link that targets the app. Observe that the console log in `bug.js` may not always show the received URL.

## Potential Causes

* **Expo Background Process Handling:** Expo's background process management might sometimes interfere with the timely processing of deep link events.
* **OS Deep Link Handling:** The interaction between Expo and the underlying operating system's deep link handling mechanism may have inconsistencies.

## Solution (See bugSolution.js)

A possible workaround involves using a combination of `getInitialURL` and polling for new URLs within a reasonable time frame.