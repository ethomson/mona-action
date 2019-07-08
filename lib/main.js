"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const github = __importStar(require("@actions/github"));
const octocats_1 = require("./octocats");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const token = process.env.GITHUB_TOKEN || '';
            const context = github.context;
            const command = context.payload.comment.body.trim();
            if (command == '/octocat' || command == '/mona') {
                const octokit = new github.GitHub(token);
                const repository = context.payload.repository;
                const issue = context.payload.issue;
                const rand = Math.floor(Math.random() * octocats_1.octocats.length);
                const octocat = octocats_1.octocats[rand];
                octokit.issues.createComment({
                    owner: repository.owner.login,
                    repo: repository.name,
                    issue_number: issue.number,
                    body: '![' + octocat + '](' + octocats_1.octodex_url + '/' + octocat + ')'
                });
            }
        }
        catch (err) {
            core.setFailed(err.message);
        }
    });
}
run();
