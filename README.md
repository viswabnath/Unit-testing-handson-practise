# Loan Application

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Steps to start handson
1. Login/Signup Own Github account
2. Fork this repository to your own Github
3. Clone the code 
```bash
git clone <gitrepo-url>
```
4. Update Node version to 14.16.1 or above LTS version

## Generate Personal Access Token
Go to my account > Settings > Developer settings > Personal access tokens > Generate new token
Choose all scopes and click generate token
## Install all dependencies
```bash
npm i
```

## Testing with Web Test Runner
To run the suite of Web Test Runner tests, run
```bash
npm run test
```

To run the tests in watch mode (for &lt;abbr title=&#34;test driven development&#34;&gt;TDD&lt;/abbr&gt;, for example), run

```bash
npm run test:watch
```

## Demoing with Storybook
To run a local instance of Storybook for your component, run
```bash
npm run storybook
```
## Local Demo with `web-dev-server`
```bash
npm start
```

To resolve CORS issues while calling API from localhost, install `CORS Unblock` extension in chrome and  enable all 3 options.

## Commit & Push test files
```bash
git add filename

git config --global user.email `email address`

git config --global user.name `username`

git commit -m <msg>

git remote set-url origin https://<token>@github.com/<username>/<reponame>

git push
```

