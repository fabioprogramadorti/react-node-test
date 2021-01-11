#! /bin/bash

mongoimport --host mongodb --db graphql --collection customers --type json --file customers.json --jsonArray