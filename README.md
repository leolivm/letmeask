<h1 align="center">
  <img alt="letmeask" src=".github/assets/logo.svg" width="420px" /> 
  <br />
  <br />
  Typescript | Firebase
</h1>

## :bookmark: About the project

- ReactJS application for the Letmeask project developed at NLW @ Rocketseat.

## 🚀 Technologies

Technologies that I used to develop this web client

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)
- [Node-Sass](https://www.npmjs.com/package/node-sass)
- [Firebase](https://firebase.google.com/)
- Environment variables

## 💻 Getting started

### Requirements

**Clone the project and access the folder**

```bash
$ git clone https://github.com/leolivm/letmeask.git && cd letmeask
```

**Follow the steps below**

```bash
# Install the dependencies
$ yarn
```

# Make sure you create a real-time database with these rules on Google Firebase

```bash
{
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
          "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)"
          }
        }
      }
    }
  }
}
```

# Create an `.env.local` file in the project's root directory

# Copy the variables from the `.env.example` file and paste into `.env.local`, now fill in the information with the data obtained from firebase

# If you are going to emulate with ios, run this command
```bash
$ yarn start
```

---

Made with 💜 by Leandro Martins 👋 [See my linkedin](https://www.linkedin.com/in/leandro-martins-0640921a4/)
