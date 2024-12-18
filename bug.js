This bug occurs when using Expo's `Linking` API to handle deep links.  Sometimes, the `Linking.addEventListener` callback doesn't fire when a deep link is opened, even if the URL scheme is correctly configured and the app is installed. This is intermittent and hard to reproduce reliably.  It's likely related to how Expo handles background processes and the interaction with the OS's deep link handling mechanisms.  The following code shows a typical implementation that might fail to trigger the callback consistently:

```javascript
import * as Linking from 'expo-linking';

Linking.addEventListener('url', (url) => {
  console.log('Deep link received:', url);
  // Handle the deep link here
});

Linking.getInitialURL().then(url => {
  if (url) {
    console.log('Initial URL:', url);
    // Handle the initial URL
  }
});
```