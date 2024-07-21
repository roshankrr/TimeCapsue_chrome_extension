chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'noteReminder') {
      chrome.storage.local.get('note', (data) => {
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icons/icon128.png',
          title: 'Time Capsule Reminder',
          message: data.note
        });
  
        // Clear the note and reminderTimestamp after showing the notification
        chrome.storage.local.remove(['note', 'reminderTimestamp']);
      });
    }
  });
  