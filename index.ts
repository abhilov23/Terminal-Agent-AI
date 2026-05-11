#!/usr/bin/env node

import "dotenv/config";

import { startAgent } from "./core/agentLoop.js";

startAgent();
