# JS Developer Homework
Implement simple App using React. The App should authenticate itself and then display table with meters.
You can use plain JSX components or any UI library.

## Instructions
1. Get authentication token by calling login endpoint. You don't have to create a login form. Credentials can be hardcoded.
   Use following credentials:
```
email: homework@enmon.tech
password: VerySecretPassword

method: 'POST',
url: 'https://dev.enmon.tech/auth/login',
JSON payload: {
    email: 'exampleEmail',
    password: 'examplePass',
}
```

2. Use accessToken returned to authenticate request to the meters endpoint:
```
method: 'GET',
url: 'https://dev.enmon.tech/api/meters',
headers: 'authorization: Bearer {accessToken}'
```

3. Visualise returned data in a table. You can choose 4-8 attributes to display.

4. (optional) Include loading indicator and other UI elements to make the app more appealing.
