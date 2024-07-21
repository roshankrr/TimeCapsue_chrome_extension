document.getElementById('saveNote').addEventListener('click', () => {
    const note = document.getElementById('note').value;
    const reminderTime = parseInt(document.getElementById('reminderTime').value);
    
    if (note && reminderTime) {
      const currentTime = Date.now();
      const reminderTimestamp = currentTime + reminderTime * 60000; // Convert minutes to milliseconds
      
      chrome.storage.local.set({ note, reminderTimestamp }, () => {
        chrome.alarms.create('noteReminder', { when: reminderTimestamp });
  
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icons/icon128.png',
          title: 'Note Saved',
          message: 'Your note has been saved and you will be reminded later.'
        });
  
        // Close the popup
        window.close();
      });
    } else {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icons/icon128.png',
        title: 'Error',
        message: 'Please write a note and set a valid reminder time.'
      });
    }
  });
  