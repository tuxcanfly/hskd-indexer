/*!
 * plugin.js - indexer plugin for hsd
 * Copyright (c) 2017-2018, Christopher Jeffrey (MIT License).
 * https://github.com/handshake-org/hsd
 */

'use strict';

const OutpointIndexer = require('./outpointindexer');

/**
 * @exports wallet/plugin
 */

const plugin = exports;

/**
 * Plugin
 * @extends EventEmitter
 */

class Plugin extends OutpointIndexer {
  /**
   * Create a plugin.
   * @constructor
   * @param {Node} node
   */

  constructor(node) {
    const options = {
      network: node.network,
      logger: node.logger,
      chain: node.chain,
      memory: node.config.bool('memory'),
      prefix: node.config.filter('index').str('prefix') || node.config.prefix
    };

    super(options);
  }
}

/**
 * Plugin name.
 * @const {String}
 */

plugin.id = 'outpointindexer';

/**
 * Plugin initialization.
 * @param {Node} node
 * @returns {WalletDB}
 */

plugin.init = function init(node) {
  return new Plugin(node);
};
