<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Time Capsule - README</title>
</head>
<body>
    <h1>Time Capsule</h1>

    <h2>Overview</h2>
    <p>The Note & Timer Chrome Extension allows you to quickly save notes and set timers to remind you about them after a specified duration. It's a handy tool for managing reminders and keeping track of important tasks.</p>

    <h2>Features</h2>
    <ul>
        <li><strong>Save Notes:</strong> Easily save notes with a title and content.</li>
        <li><strong>Set Timers:</strong> Attach a timer to each note to get reminders after a specified duration.</li>
        <li><strong>Notifications:</strong> Receive browser notifications when the timer expires.</li>
    </ul>

    <h2>Installation</h2>
    <p>To set up this extension locally, follow these steps:</p>

    <h3>Prerequisites</h3>
    <ul>
        <li>Google Chrome or Chromium browser installed on your computer.</li>
    </ul>

    <h3>Steps</h3>
    <ol>
        <li><strong>Clone the Repository</strong>
            <pre><code>(https://github.com/roshankrr/TimeCapsue_chrome_extension)
cd TimeCapsue_chrome_extension</code></pre>
        </li>
        <li><strong>Open Chrome Extensions Page</strong>
            <ul>
                <li>Open Google Chrome.</li>
                <li>Go to <code>chrome://extensions/</code> in the address bar.</li>
                <li>Enable "Developer mode" using the toggle switch at the top-right of the page.</li>
            </ul>
        </li>
        <li><strong>Load the Extension</strong>
            <ul>
                <li>Click on the "Load unpacked" button.</li>
                <li>Navigate to the directory where you cloned the repository.</li>
                <li>Select the folder containing the extension files.</li>
            </ul>
        </li>
        <li><strong>Verify Installation</strong>
            <ul>
                <li>You should now see the Note & Timer extension icon in your Chrome toolbar.</li>
                <li>Click on the icon to open the extension and start using it.</li>
            </ul>
        </li>
    </ol>

    <h2>Usage</h2>
    <ol>
        <li><strong>Add a Note</strong>
            <ul>
                <li>Click on the extension icon in the toolbar.</li>
                <li>Enter the title and content of your note.</li>
                <li>Set the timer duration for the reminder.</li>
                <li>Click "Save" to store your note and start the timer.</li>
            </ul>
        </li>
        <li><strong>Receive Reminders</strong>
            <ul>
                <li>When the timer expires, a notification will appear in your browser reminding you about the note.</li>
            </ul>
        </li>
    </ol>

    <h2>Development</h2>
    <p>To contribute or modify the extension:</p>

    <h3>Setup Development Environment</h3>
    <ul>
        <li>Ensure you have <a href="https://nodejs.org/">Node.js</a> and <a href="https://www.npmjs.com/">npm</a> installed.</li>
    </ul>

    <h3>Install Dependencies</h3>
    <pre><code>npm install</code></pre>

    <h3>Run Local Server</h3>
    <p>For local development, you can use a static server or build tools to serve your extension files.</p>

    <h3>Build Extension</h3>
    <p>Build your extension files using your preferred build tools.</p>

    <h3>Update Extension</h3>
    <p>If you make changes to the code, reload the extension in <code>chrome://extensions/</code> by clicking the "Reload" button.</p>


    <h2>Contribution</h2>
    <p>Feel free to contribute .</p>
</body>
</html>
