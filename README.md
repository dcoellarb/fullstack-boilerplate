BOILERPLATE
=====================

A boilerplate to start parse - react - native projects

### Usage

```
git clone https://github.com/dcoellarb/fullstack-boilerplate.git

1. Download
	1. git clone https://github.com/dcoellarb/fullstack-boilerplate.git
	2. remove .git folder
2. Common code setup
	1. Update ./config/config.js (generate guids from https://www.guidgenerator.com/online-guid-generator.aspx)
3. Parse Server setup
	1. Local MongoDB setup
		1. mongod --dbpath /Users/dcoellar/mongodb/data/db
		2. mongo
		3. use <dbname>
		4.
		
		db.createUser({user: "local",pwd: "local",roles:[{ role: "dbAdmin", db: "<dbname>" },{ role: "read", db: "<dbname>" },{ role: "readWrite", db: "<dbname>" },{ role: "dbOwner", db: "<dbname>" },{ role: "userAdmin", db: "<dbname>" }]})

		or

		db.updateUser("local",{roles:[{ role: "dbAdmin", db: "<dbname>" },{ role: "read", db: "<dbname>" },{ role: "readWrite", db: "<dbname>" },{ role: "dbOwner", db: "<dbname>" },{ role: "userAdmin", db: "<dbname>" }]})

	2. Update ./config/default.json with dev local IDs and db name
	3. Update ./.ebextensions/app.config with QA IDs
	4. Update ./.elasticabeanstalk/config.yml with QA IDs
4. React Native setup
5. React Web setup
6. Install npm packages
```
npm install

cd parse-server
npm install

cd ..
cd react-native
npm install

cd ..
cd react-web
npm install
```

Test local (Go to Running section to get started)!!!

6. AWS setup
	1. Code commit setup
		1. Parse Server repository setup
		2. React Native repository setup
		3. React Web repository setup
	2. Parse Sever aws setup
		1. Mongodb server setup
		2. Parse Server beanstalk servers setup
	3. React web S3 setup
7. Commit
	1. Commit Parse Server
		1. cd parse-server
		2. git init
		3. git add .
		4. git add remote <url code commmit>
		5. git push
	2. Commit React Native
		1. cd parse-server
		2. git init
		3. git add .
		4. git add remote <url code commmit>
		5. git push
	3. Commit React Web
		1. cd parse-server
		2. git init
		3. git add .
		4. git add remote <url code commmit>
		5. git push
```

### Running

```
mongod --dbpath /Users/dcoellar/mongodb/data/db

cd /usr/local/lib/node_modules/parse-dashboard
parse-dashboard --config parse-dashboard-config.json

cd <path to project>
npm run watch:test

cd parse-server
npm run watch
npm run nodemon
npm run watch:testcd

cd ..
cd react-native

cd ..
cd react-web
npm start
npm run watch:test
```

### Deployment

#### First time QA
1. Parse server setup
	1. MongoDB setup
		1. Create db

#### First time Production

1. Create PROD branch
