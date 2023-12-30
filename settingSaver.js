//this file contains a function that saves settings to a file, loading the file, updating the object key, and saving the json over the top of the old one.

function saveSettings(setting,target,notify,fs) {
  // Step 1: Create an empty object to hold the saved settings
  let savedSettings = {};

  // Step 2: Load the existing settings from the file if they exist
  try {
    
    savedSettings = require('./0identities.json')
  } catch (err) {
    notify("Error loading settings:", err.message);
    console.log(`Error loading settings: ${err.message}`);
  }

  // Step 3: Update the object with the new settings
  savedSettings = { ...savedSettings, ...setting };//|||what happens if a key in settings is the same as a key in savedSettings?

  // Step 4: Save the updated settings to the file
  fs.writeFileSync(target, JSON.stringify(savedSettings));
}
//export default saveSettings;
exports.saveSettings = saveSettings;//it says this isn't a default export.

// "In this case, when a key in the "settings" object is the same as a key in the "savedSettings" object, the value of the corresponding key in the "settings" object will overwrite the value in the "savedSettings" object during the merge operation. The result will be a new object that contains all keys and values from both objects, with any duplicate keys from "settings" taking precedence over those in "savedSettings"."

//That is wizardly. So I can think of elipses like dumping the whole bucket of fish in consecutively like that, and same fish eat fish with the same name sequentially.

