<!-- SPDX-License-Identifier: MIT -->

# Submitting Patches: Getting your code submitted

For a person or company who wishes to submit a change to Fyndro,
the process can sometimes be daunting if you're not familiar with "the system."
This text is a collection of suggestions which can greatly
increase the chances of your change being accepted.

This document contains a large number of suggestions in a relatively terse format.
For detailed information on how the development process works,
see the [DevelopmentProcess.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/DevelopmentProcess.md).
Also, read [SubmitChecklist.md](https://github.com/CMihai99/fyndro/blob/main/Documentation/process/SubmitChecklist.md)
for a list of items to check before submitting code.

This documentation assumes that you're using git to prepare your patches.
If you're unfamiliar with git, you would be well-advised to learn how to use it,
it will make your life as a developer much easier.

## Obtain a current source tree

If you do not have a repository with the current source handy,
use git to obtain one. You'll want to start with the mainline repository,
which can be grabbed with:

```console
git clone https://github.com/CMihai99/fyndro.git
```

Note, however, that you may not want to develop against the mainline tree directly.
Most maintainers run their own trees and want to see patches prepared against those trees.
Ask the specific maintainer to find that tree.
