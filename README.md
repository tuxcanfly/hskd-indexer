hskd-indexer
============

Indexes the hsd chain transactions by spent outpoint. Useful for explorers to
track spent outputs.

Install:
========

    npm install tuxcanfly/hskd-indexer

Usage:
======

    hsd --index-tx --plugins=hskd-indexer

    curl http://127.0.0.1:13037/tx/outpoint/:hash/:index

Note the hsd peer dependency.

Backported from bcoin indexer.
