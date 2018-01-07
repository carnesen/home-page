#!/usr/bin/env node

const {websiteFactory, run} = require('@carnesen/aws')

const website = websiteFactory()

run(website.create)
