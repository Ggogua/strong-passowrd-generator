<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Strong Password Generator</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
    }

    h1 {
      color: #333;
      border-bottom: 2px solid #333;
      padding-bottom: 5px;
    }

    h2 {
      color: #555;
    }

    code {
      background-color: #f4f4f4;
      padding: 2px 4px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    pre {
      background-color: #f4f4f4;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow: auto;
    }

    a {
      color: #007acc;
    }

    a:hover {
      text-decoration: none;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin-bottom: 10px;
    }

    .command {
      background-color: #222;
      color: #fff;
      padding: 5px 10px;
      border-radius: 4px;
      font-family: 'Courier New', Courier, monospace;
    }

    blockquote {
      border-left: 4px solid #888;
      padding-left: 10px;
      color: #777;
      font-style: italic;
    }
  </style>
</head>

<body>

  <h1>Strong Password Generator</h1>

  <h2>Overview</h2>

  <p>This is a simple command-line utility written in JavaScript for generating strong and secure passwords. The password generator utilizes a combination of uppercase and lowercase letters, numbers, and special characters to create robust passwords that enhance security.</p>

  <h2>Features</h2>

  <ul>
    <li>Generates strong and random passwords</li>
    <li>Customizable password length</li>
    <li>Includes uppercase and lowercase letters, numbers, and special characters</li>
  </ul>

  <h2>Getting Started</h2>

  <h3>Prerequisites</h3>

  <ul>
    <li>Git</li>
    <li>Node.js</li>
  </ul>

  <h3>Installation</h3>

  <ol>
    <li>Clone the repository:</li>
  </ol>

  <pre><code>git clone https://github.com/Ggogua/strong-password-generator.git</code></pre>

  <ol start="2">
    <li>Change into the project directory:</li>
  </ol>

  <pre><code>cd strong-password-generator</code></pre>

  <ol start="3">
    <li>Install dependencies:</li>
  </ol>

  <pre><code>npm install</code></pre>

  <h3>Usage</h3>

  <ol>
    <li>Run the password generator:</li>
  </ol>

  <pre><code class="command">node generatePassword</code></pre>

  <ol start="2">
    <li>Follow the prompts to specify the password length.</li>
    <li>The generated password will be displayed.</li>
  </ol>

  <h3>Examples</h3>

  <pre><code>$ node generatePassword
Enter the desired password length: 12
Generated Password: 9$RkLb2WvFh1
</code></pre>

  <h2>Customization</h2>

  <p>You can customize the password generation by modifying the <code>generatePassword.js</code> file. Adjust the character sets and length according to your preferences.</p>

  <h2>Contributing</h2>

  <p>If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.</p>



 
</body>

</html>
