FROM mongo

COPY customers.json /customers.json

CMD mongoimport --host localhost --db graphql --collection customers --type json --file /customers.json --jsonArray
