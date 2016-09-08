BOILERPLATE
=====================

A boilerplate to start parse - react - native projects

### Usage

```
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

7. AWS setup
	1. Code commit setup
		1. Parse Server repository setup
		2. React Native repository setup
		3. React Web repository setup
	2. Parse Sever aws setup
		1. Mongodb server setup
		2. Parse Server beanstalk servers setup
	3. React web S3 setup
8. Commit
	1. Commit Project
		1. git init
		3. git add .
		4. git add remote <url code commmit>
		5. git push

```
### Running

```
1. Start Mongo DB
	1. mongod --dbpath /Users/dcoellar/mongodb/data/db
2. Start Parse dashboard
	1. cd /usr/local/lib/node_modules/parse-dashboard
	2. parse-dashboard --config parse-dashboard-config.json
3. Start projects
	1. Common code tests
		1. cd <path to project>
		2. npm run watch:test
	2. Parse servr
		1. cd parse-server
		2. npm run watch
		3. npm run nodemon
		4. npm run watch:testcd
	3. React Native
		1. cd ..
		2. cd react-native
	4. React Web
		1. cd ..
		2. cd react-web
		3. npm start
		4. npm run watch:test
```

### Deployment

#### First time QA
1. Parse server setup
	1. MongoDB setup
		1. Create db

#### First time Production

1. Create PROD branch
2. webpack -p --config ./webpack.prod.config.js
