
<img src="https://raw.githubusercontent.com/fonoster/routr/master/brand.png" alt="Routr Logo" height="100">

<br />

[![Build Status](https://travis-ci.org/fonoster/routr.svg?branch=master)](https://travis-ci.org/fonoster/routr) [![Maintainability](https://api.codeclimate.com/v1/badges/beb25546dbb26fd600d2/maintainability)](https://codeclimate.com/github/fonoster/routr/maintainability) <!-- [![Test Coverage](https://api.codeclimate.com/v1/badges/beb25546dbb26fd600d2/test_coverage)](https://codeclimate.com/github/fonoster/routr/test_coverage)--> [![Join the chat Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/fonoster/routr?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Join the chat on Slack](https://img.shields.io/badge/slack-join%20chat-pink.svg)](https://fonosterteam.typeform.com/to/Xy8Oc0)
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="license: MIT"></a>

<p align="left">
  <a href="#key-features">Key Features</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="https://routr.io/docs">Documentation</a> •
  <a href="#bugs-and-feedback">Bugs and Feedback</a> •
  <a href="#Contributing">Contributing</a> •
  <a href="#license">License</a>
</p>

**Routr** – a lightweight sip proxy, location server, and registrar that provides a reliable and scalable SIP infrastructure for telephony carriers, communication service providers, and integrators. It also provides with capabilities that are suitable for the enterprise and personal needs. To get involved in the development of this project please contact us at @fonoster.

[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Next-generation%20SIP%20Server&url=https://github.com/fonoster/routr&via=fonoster&hashtags=voip,sip,webrtc,telephony)

Be sure to see the [demo](https://demo.routr.io/login)

## Key Features

- Proxy
- Registrar Service
- Location Service
- Call Forking
- Multi-Tenancy/Multi-Domain
- Access to the PSTN Using SIP Gateways
- Transport: TCP, UDP, TLS, WebSocket
- Data Sources: Redis, Restful API, Files
- Restful API
- Command Line Tool for Admin Operations
- Routing Capabilities
  - Intra-Domain Routing (IDR)
  - Domain Ingress Routing(DIR)
  - Domain Egress Routing (DER)
  - Peer Egress Routing (PER)
- Security
  - Digest SIP User Authentication
  - Domain Access Control List (DACL)
  - Restful service secured with TLS and JWT tokens

To learn more, read the [documentation](https://routr.io/docs). :books:

## Quick Start

&#10122; Download the server for your plattform

| Platform | Download |
| -- | -- |
| Linux | [tar.gz](https://github.com/fonoster/routr/releases/download/1.0.0-rc1/routr-1.0.0-rc1_linux-x64_bin.tar.gz) |  
| macOS | [tar.gz](https://github.com/fonoster/routr/releases/download/1.0.0-rc1/routr-1.0.0-rc1_osx-x64_bin.tar.gz) |  
| Windows | [tar.gz](https://github.com/fonoster/routr/releases/download/1.0.0-rc1/routr-1.0.0-rc1_windows-x64_bin.tar.gz), [zip](https://github.com/fonoster/routr/releases/download/1.0.0-rc1/routr-1.0.0-rc1_windows-x64_bin.zip) |  
| Docker | [img](https://hub.docker.com/r/fonoster/routr/) |  

&#10123; Then extract it:

```bash
tar xvfz routr-*.tar.gz
cd routr-*
```

&#10124; Run the server using the `routr` command

```bash
./routr
```

> Instructions to install the command-line tool are available at https://github.com/fonoster/routr-ctl

## Bugs and Feedback

For bugs, questions, and discussions please use the [Github Issues](https://github.com/fonoster/routr/issues)

## Contributing

For contributing, please see the following links:

 - [Contribution Documents](https://github.com/fonoster/routr/blob/master/CONTRIBUTING.md)
 - [Contributors](https://github.com/fonoster/routr/contributors)

## Authors
 - [Pedro Sanders](https://github.com/psanders)

## LICENSE
Copyright (C) 2018 by [Fonoster Inc](https://fonoster.com). MIT License (see [LICENSE](https://github.com/fonoster/routr/blob/master/LICENSE) for details).
