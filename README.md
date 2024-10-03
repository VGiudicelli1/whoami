# whoami

a website to describe who am i

## install, run and deploy

```bash
git clone "..."
cd whoami
npm install
```

run without PHP:

```bash
npm run dev
```

run with PHP:

```bash
docker compose up -d
npm run auto_build
```

to build:

```bash
npm run build
```

to deploy on your own site with ftp access:

- create a branch named `deploy`
- add secrets `FTP_HOST`, `FTP_USER`, `FTP_PASS` on github
- merge your current branch with `deploy` (with a PR to be safe)
- note: you can deploy with an other branch on an other location by editing `.github/workflow/action.yml`. For example: using branches `deploy` and `deploy-preprod` can be usefull if you want to deploy in two times.

## needs

- Docker
- npm

## déployé

<https://vgiudice.alwaysdata.net/whoami>
