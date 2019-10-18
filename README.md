# eZ Platform GraphQL pulled by Gatsby

This is a simple study showing how easily eZ Platform can be used as a "Headless CMS", offering a rich content repository which can be queried using GraphQL.


## Prerequisites

### Install Netgen Media Site

Netgen Media Site is a blueprint installation of eZ Platform used by Netgen to bootstrap new client projects. It integrates most of Netgen open source tools and bundles, including Netgen Layouts.

Follow the instructions at https://github.com/netgen/media-site/blob/master/doc/netgen/INSTALL.md

### Set up eZ Platform GraphQL

All necessary components are installed with the Netgen Media Site. You only need to generate the domain scheme as described in https://doc.ezplatform.com/en/master/api/graphql/

    php bin/console ezplatform:graphql:generate-schema
    php bin/console cache:clear

## Installation

Install Gatsby CLI

    npm i gatsby-cli -g

Check out this repository

    git co https://github.com/dfritschy/ezplatform-gatsby.git
    
Install dependencies

    cd ezplatform-gatsby
    yarn install

Copy `.env.dist` to `.env` and adjust the settings to your installation. Then fire up Gatsby

    gatsby develop

You can now view gatsby-starter-default in the browser.

    http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema

    http://localhost:8000/___graphql

Note that the development build is not optimized. To create a production build, use `gatsby build`
⠀