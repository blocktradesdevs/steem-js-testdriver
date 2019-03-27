import { Router } from 'express';
import fs from 'fs';
import steem from '@steemit/steem-js';

const router = Router();

router.get('/', (req, res) => {

    // set config
    var name_of_file = 'test-a';
    var api_url = 'http://sps-blocktrades-testnet-api.blocktrades.info:8090';
    var wif = '5HuVghGZvimhc5wkNA574wsDPwrsRfYrMAoh7UwHn8kQ5D8YZZV';
    var creator = 'initminer';
    var receiver = 'initminer';
    var start_date = '2019-03-18T00:00:00';
    var end_date = '2019-04-01T00:00:00';
    var daily_pay = '5.000 TBD';
    var subject = 'this is example';
    var permlink = 'http://url.html';
    var voter = 'initminer';
    var proposal_ids = [0];
    var approve = true;
    var proposal_owner = 'initminer';
    var id_set = [0];
    var start = 'initminer';
    var order_by = 'by_creator';
    var order_direction = 'direction_ascending';
    var limit = 5;
    var status = 'all';
    var method_operation = 'all';
    var last_id = null;

    if (req.query) {
        if (req.query.name_of_file) {
            name_of_file = req.query.name_of_file;
        }
        if (req.query.api_url) {
            api_url = req.query.api_url;
        }
        if (req.query.creator) {
            creator = req.query.creator;
        }
        if (req.query.receiver) {
            receiver = req.query.receiver;
        }
        if (req.query.start_date) {
            start_date = req.query.start_date;
        }
        if (req.query.daily_pay) {
            daily_pay = req.query.daily_pay;
        }
        if (req.query.subject) {
            subject = req.query.subject;
        }
        if (req.query.permlink) {
            permlink = req.query.permlink;
        }
        if (req.query.voter) {
            voter = req.query.voter;
        }
        if (req.query.proposal_ids) {
            proposal_ids = req.query.proposal_ids;
        }
        if (req.query.approve) {
            approve = req.query.approve;
        }
        if (req.query.proposal_owner) {
            proposal_owner = req.query.proposal_owner;
        }
        if (req.query.id_set) {
            id_set = req.query.id_set;
        }
        if (req.query.start) {
            start = req.query.start;
        }
        if (req.query.order_by) {
            order_by = req.query.order_by;
        }
        if (req.query.order_direction) {
            order_direction = req.query.order_direction;
        }
        if (req.query.limit) {
            limit = req.query.limit;
        }
        if (req.query.status) {
            status = req.query.status;
        }
        if (req.query.method_operation) {
            method_operation = req.query.method_operation;
        }
        if (req.query.last_id) {
            last_id = req.query.last_id;
        }
    }
    steem.api.setOptions({
        address_prefix: 'TST',
        chain_id: '18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e',
        url: api_url,
        retry: true,
        useAppbaseApi: !!api_url,
    });

    steem.config.set('address_prefix', 'TST');
    steem.config.set('chain_id', '18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');
    steem.config.set('transport', 'http');
    steem.config.set('uri', api_url);

    var file = fs.createWriteStream('test/' + name_of_file + '.txt');

    if ((method_operation === 'all') || (method_operation === 'create_proposal')) {
        steem.broadcast.createProposal(wif, creator, receiver, start_date, end_date, daily_pay, subject, permlink, function(err, result) {
            file.write('Test create_proposal' + '\n\n');
            file.write('Params: wif: ' + wif + ', creator: ' + creator + ', receiver: ' + receiver + ', start_date: ' + start_date + ', end_date: ' + end_date + ', daily_pay: ' + daily_pay + ', subject: ' + subject + ', permlink: ' + permlink + '\n');
            if (err) {
                file.write('Rresponse: ' + JSON.stringify(err).split(",").join(",\n").split("{").join("{\n") + '\n\n\n');
            } else if (result) {
                file.write('Rresponse: ' + JSON.stringify(result).split(",").join(",\n").split("{").join("{\n") + '\n\n\n');
            }
        });
    }

    if ((method_operation === 'all') || (method_operation === 'update_proposal_votes')) {
        steem.broadcast.updateProposalVotes(wif, voter, proposal_ids, approve, function(err, result) {
            file.write('Test update_proposal_votes' + '\n\n');
            file.write('Params: wif: ' + wif + ', voter: ' + voter + ', proposal_ids: ' + proposal_ids + ', approve: ' + approve + '\n');
            if (err) {
                file.write('Rresponse: ' + JSON.stringify(err).split(",").join(",\n").split("{").join("{\n") + '\n\n\n');
            } else if (result) {
                file.write('Rresponse: ' + JSON.stringify(result).split(",").join(",\n").split("{").join("{\n") + '\n\n\n');
            }
        });
    }

    if ((method_operation === 'all') || (method_operation === 'remove_proposal')) {
        steem.broadcast.removeProposal(wif, proposal_owner, proposal_ids, function(err, result) {
            file.write('Test remove_proposal' + '\n\n');
            file.write('Params: wif: ' + wif + ', proposal_owner: ' + proposal_owner + ', proposal_ids: ' + proposal_ids + '\n');
            if (err) {
                file.write('Rresponse: ' + JSON.stringify(err).split(",").join(",\n").split("{").join("{\n") + '\n\n\n');
            } else if (result) {
                file.write('Rresponse: ' + JSON.stringify(result).split(",").join(",\n").split("{").join("{\n") + '\n\n\n');
            }
        });
    }

    if ((method_operation === 'all') || (method_operation === 'find_proposals')) {
        steem.api.findProposals(id_set, function(err, result) {
            file.write('Test find_proposals' + '\n\n');
            file.write('Params: id_set: ' + id_set + '\n');
            if (err) {
                file.write('Rresponse: ' + JSON.stringify(err).split(",").join(",\n").split("{").join("{\n") + '\n\n\n');
            } else if (result) {
                file.write('Rresponse: ' + JSON.stringify(result).split(",").join(",\n").split("{").join("{\n") + '\n\n\n');
            }
        });
    }

    if ((method_operation === 'all') || (method_operation === 'list_proposals')) {
        steem.api.listProposals(start, order_by, order_direction, limit, status, last_id, function(err, result) {
            file.write('Test list_proposals' + '\n\n');
            file.write('Params: start: ' + start + ', order_by: ' + order_by + ', order_direction: ' + order_direction + ', limit: ' + limit + ', status: ' + status + ', last_id: ' + last_id + '\n');
            if (err) {
                file.write('Rresponse: ' + JSON.stringify(err).split(",").join(",\n").split("{").join("{\n") + '\n\n\n');
            } else if (result) {
                file.write('Rresponse: ' + JSON.stringify(result).split(",").join(",\n").split("{").join("{\n") + '\n\n\n');
            }
        });
    }

    if ((method_operation === 'all') || (method_operation === 'list_voter_proposals')) {
        steem.api.listVoterProposals(start, order_by, order_direction, limit, status, function(err, result) {
            file.write('Test list_voter_proposals' + '\n\n');
            file.write('Params: start: ' + start + ', order_by: ' + order_by + ', order_direction: ' + order_direction + ', limit: ' + limit + ', status: ' + status + '\n');
            if (err) {
                file.write('Rresponse: ' + JSON.stringify(err).split(",").join(",\n").split("{").join("{\n") + '\n\n\n');
            } else if (result) {
                file.write('Rresponse: ' + JSON.stringify(result).split(",").join(",\n").split("{").join("{\n") + '\n\n\n');
            }
        });
    }

    res.send({ status: steem }).end();
});

export default router;
