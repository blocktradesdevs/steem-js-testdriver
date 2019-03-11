Steem-js-testdriver
===================

## Installation

Firstly it is needed to clone master branch with correct steem-js submodule:

```
git clone --recurse-submodules https://github.com/blocktradesdevs/steem-js-testdriver.git
```

Installation of packages:

```
cd steem-js-testdriver
cd steem-js
git checkout sps-develop2
git pull
npm link
cd ./../
npm install
npm link steem-js
```

Starting server:

```
npm start
```

## GET parameters

It is possible with GET parameters to change name of file, api url and methods/operations input params:

- name_of_file - default is test-a
- api_url - default is http://192.168.6.100:8090
- wif - default is 5HuVghGZvimhc5wkNA574wsDPwrsRfYrMAoh7UwHn8kQ5D8YZZV
- creator - default is initminer
- receiver - default is initminer
- start_date - default is 2019-03-18T00:00:00
- end_date - default is 2019-04-01T00:00:00
- daily_pay - default is 5.000 TBD
- subject - default is this is example
- url - default is http://url.html
- voter - default is initminer
- proposal_ids - default is [0]
- approve - default is true
- proposal_owner - default is initminer
- id_set - default is [0]
- start - default is initminer
- order_by - default is by_creator
- order_direction - default is direction_ascending
- limit - default is 5
- active - default is -1

Creator/wif, voter/wif and proposal_owner/wif params must be passed both. There are relations between them.

It is also possible to choose only one method or operation if passed with method_operation GET parameter
(create_proposal, update_proposal_votes, remove_proposal, find_proposals, list_proposals, list_voter_proposals).
If method_operation GET parameter is not passed, all methods and operations are tested.

Example curl:

```
curl --request GET --url http://localhost:8080/test-a --data '{}'
```

Result of tests there is in folder 'test'.
