# Mona Actions

Have more octocats in your life to brighten your mood and reduce the amount of sserious bussiness in your issues.  All you have to do is type `/octocat` in a GitHub issue to get an octocat bomb.

Set it up in your workflow:

```
on: issue_comment

jobs:
  octobomb:
    runs-on: ubuntu-latest
    steps:
    - uses: ethomson/mona-action@master
      env:
        GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}"
```

And once you do, any time somebody types `/octocat` in an issue, you'll get a random image from the [Octodex](https://octodex.github.com/).

![mona](https://user-images.githubusercontent.com/1130014/62495262-44164680-b7cd-11e9-9aef-a5f678ea4b21.gif)
